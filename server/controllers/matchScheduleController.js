const { jsonpToJson } = require('../utils/jsonpParser');
const { handleSuccess, handleError } = require('../utils/responseHandler');
const axios = require('axios');

const BASE_URL = 'https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/feeds';

const getMatchSchedule = async (req, res) => {
    try {
        const { competitionId } = req.params;
        
        if (!competitionId) {
            return handleError(res, 'Competition ID is required');
        }

        // Construct URL with dynamic competition ID
        const MATCH_SCHEDULE_URL = `${BASE_URL}/${competitionId}-matchschedule.js`;
        console.log('Fetching match schedule from:', MATCH_SCHEDULE_URL);
        
        // Fetch data from the URL
        let response;
        try {
            response = await axios.get(MATCH_SCHEDULE_URL);
            console.log('Response received with status:', response.status);
        } catch (axiosError) {
            console.error('Axios error:', {
                status: axiosError.response?.status,
                statusText: axiosError.response?.statusText,
                url: MATCH_SCHEDULE_URL,
                message: axiosError.message
            });
            return handleError(res, `Failed to fetch match schedule: ${axiosError.message}`);
        }

        // Extract the JSON data from JSONP response
        const jsonpData = response.data;
        console.log('JSONP data type:', typeof jsonpData);
        console.log('JSONP data starts with:', jsonpData.substring(0, 50));

        if (typeof jsonpData !== 'string') {
            console.error('Invalid JSONP data type:', typeof jsonpData);
            return handleError(res, 'Invalid JSONP response format: not a string');
        }

        if (!jsonpData.startsWith('MatchSchedule(')) {
            console.error('Invalid JSONP format, data starts with:', jsonpData.substring(0, 50));
            return handleError(res, 'Invalid JSONP response format: incorrect prefix');
        }

        // Extract JSON string from JSONP wrapper
        // Find the position of the first opening parenthesis and last closing parenthesis
        const startPos = jsonpData.indexOf('(');
        const endPos = jsonpData.lastIndexOf(')');
        
        if (startPos === -1 || endPos === -1) {
            console.error('Failed to find JSONP wrapper boundaries');
            return handleError(res, 'Invalid JSONP format: missing parentheses');
        }

        // Extract the JSON string between the parentheses
        const jsonString = jsonpData.substring(startPos + 1, endPos);
        console.log('Extracted JSON string starts with:', jsonString.substring(0, 50));

        let matchData;
        try {
            matchData = JSON.parse(jsonString);
            console.log('Successfully parsed JSON data');
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            console.error('Failed to parse JSON string:', jsonString.substring(0, 100));
            return handleError(res, 'Failed to parse match data');
        }

        if (!matchData || !matchData.Matchsummary || !Array.isArray(matchData.Matchsummary)) {
            console.error('Invalid match data structure:', {
                hasMatchData: !!matchData,
                hasMatchsummary: !!(matchData && matchData.Matchsummary),
                isArray: Array.isArray(matchData?.Matchsummary)
            });
            return handleError(res, 'Invalid match data format');
        }

        console.log(`Processing ${matchData.Matchsummary.length} matches`);

        // Process and transform the data
        const matches = matchData.Matchsummary.map(match => {
            try {
                return {
                    id: match.MatchID,
                    competitionId: match.CompetitionID,
                    competitionName: match.CompetitionName,
                    matchName: match.MatchName,
                    matchOrder: match.MatchOrder,
                    matchType: match.MatchType,
                    matchStatus: match.MatchStatus,
                    date: match.MatchDateNew,
                    time: match.MatchTime,
                    gmtTime: match.GMTMatchTime,
                    gmtDate: match.GMTMatchDate,
                    venue: {
                        id: match.GroundID,
                        name: match.GroundName,
                        city: match.city
                    },
                    homeTeam: {
                        id: match.HomeTeamID,
                        name: match.HomeTeamName,
                        logo: match.HomeTeamLogo,
                        color1: match.HomeTeamColor1,
                        color2: match.HomeTeamColor2,
                        battingSummary: match.FirstBattingSummary
                    },
                    awayTeam: {
                        id: match.AwayTeamID,
                        name: match.AwayTeamName,
                        logo: match.AwayTeamLogo,
                        color1: match.AwayTeamColor1,
                        color2: match.AwayTeamColor2,
                        battingSummary: match.SecondBattingSummary
                    },
                    toss: {
                        winner: match.TossTeam,
                        details: match.TossDetails,
                        text: match.TossText
                    },
                    result: {
                        winner: match.WinningTeamID,
                        comments: match.Comments,
                        mom: {
                            name: match.MOM,
                            type: match.MOM_TYPE,
                            playerId: match.MOMPlayerId,
                            runs: match.MOMRuns,
                            balls: match.MOMBalls,
                            wickets: match.MOMWicket,
                            image: match.MOMImage
                        }
                    },
                    scores: {
                        firstInnings: {
                            summary: match['1Summary'],
                            score: match['1FallScore'],
                            wickets: match['1FallWickets'],
                            overs: match['1FallOvers'],
                            runRate: match['1RunRate']
                        },
                        secondInnings: {
                            summary: match['2Summary'],
                            score: match['2FallScore'],
                            wickets: match['2FallWickets'],
                            overs: match['2FallOvers'],
                            runRate: match['2RunRate']
                        },
                        revisedTarget: match.RevisedTarget,
                        revisedOvers: match.RevisedOver,
                        projectedScore: match.ProjectedScore
                    },
                    officials: {
                        umpire1: match.GroundUmpire1,
                        umpire2: match.GroundUmpire2,
                        thirdUmpire: match.ThirdUmpire
                    },
                    preMatchCommentary: match.PreMatchCommentary,
                    postMatchCommentary: match.PostMatchCommentary
                };
            } catch (mapError) {
                console.error('Error mapping match data:', mapError);
                console.error('Problematic match data:', match);
                throw mapError;
            }
        });

        console.log('Successfully processed all matches');
        return handleSuccess(res, matches);
    } catch (error) {
        console.error('Error in getMatchSchedule:', error);
        return handleError(res, `Failed to fetch match schedule: ${error.message}`);
    }
};

module.exports = {
    getMatchSchedule
}; 