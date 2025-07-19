const axios = require('axios');
const jsonpParser = require('../utils/jsonpParser');
const { handleResponse } = require('../utils/responseHandler');

const getTopRunScorers = async (req, res) => {
    try {
        const competitionId = req.params.competitionId;
        const url = `https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/feeds/stats/${competitionId}-toprunsscorers.js`;
        
        const response = await axios.get(url);
        if (!response.data) {
            throw new Error('Failed to fetch top run scorers data');
        }

        // Parse JSONP response with the correct callback name
        const data = jsonpParser(response.data, 'ontoprunsscorers');
        
        if (!data || !data.toprunsscorers) {
            throw new Error('Invalid data format received');
        }

        return handleResponse(res, 200, true, 'Top run scorers fetched successfully', data.toprunsscorers);
    } catch (error) {
        console.error('Error fetching top run scorers:', error);
        return handleResponse(res, 500, false, error.message);
    }
};

module.exports = {
    getTopRunScorers
}; 