const axios = require('axios');
const parseJSONPResponse = require('../utils/jsonpParser');

const fetchCompetitions = async (url) => {
  const response = await axios.get(url);

  if (!response.data) {
    throw new Error('No data received from API');
  }

  // Parse the JSONP response with the correct callback name
  const parsedData = parseJSONPResponse(response.data, 'oncomptetion');
  
  // Transform the data to match the expected format
  return parsedData.competition.map(comp => ({
    id: comp.CompetitionID.toString(),
    name: comp.CompetitionName,
    shortName: comp.CompetitionName.replace(/^(IPL|Women's T20 Challenge|Women's IPL)\s+/, ''),
    year: comp.SeasonID,
    isLive: comp.live === 1,
    isCompleted: comp.completed === 1,
    hasFixtures: comp.fixtures === 1,
    feedSource: comp.feedsource,
    timezone: comp.timezone,
    type: comp.TeamType
  }));
};

const getMensCompetitions = async () => {
  try {
    const competitions = await fetchCompetitions(
      'https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/mc/competition.js'
    );
    return {
      success: true,
      data: competitions
    };
  } catch (error) {
    console.error('Error fetching men\'s competitions:', error);
    throw new Error('Failed to fetch men\'s competitions');
  }
};

const getWomensCompetitions = async () => {
  try {
    const competitions = await fetchCompetitions(
      'https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/mc/womenscompetition.js'
    );
    return {
      success: true,
      data: competitions
    };
  } catch (error) {
    console.error('Error fetching women\'s competitions:', error);
    throw new Error('Failed to fetch women\'s competitions');
  }
};

module.exports = {
  getMensCompetitions,
  getWomensCompetitions
}; 