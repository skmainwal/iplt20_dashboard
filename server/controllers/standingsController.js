const axios = require('axios');
const parseJSONPResponse = require('../utils/jsonpParser');

const getStandings = async (competitionId) => {
  try {
    const timestamp = new Date().getTime();
    const response = await axios.get(
      `https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/feeds/stats/${competitionId}-groupstandings.js?ongroupstandings=_jqjsp&_${timestamp}=`,
      {
        headers: {
          'Accept': '*/*',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        }
      }
    );

    if (!response.data) {
      throw new Error('No data received from API');
    }

    // Parse the JSONP response with the correct callback name
    const parsedData = parseJSONPResponse(response.data, 'ongroupstandings');

    // Validate the parsed data
    if (!parsedData || !parsedData.points || !Array.isArray(parsedData.points)) {
      throw new Error('Invalid data format received');
    }

    // If points array is empty
    if (parsedData.points.length === 0) {
      return {
        success: true,
        points: []
      };
    }

    return {
      success: true,
      points: parsedData.points
    };

  } catch (error) {
    console.error('Error in getStandings:', error);
    throw new Error(error.message || 'Failed to fetch standings data');
  }
};

module.exports = {
  getStandings
}; 