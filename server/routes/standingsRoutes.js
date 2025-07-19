const express = require('express');
const router = express.Router();
const { getStandings } = require('../controllers/standingsController');
const { handleSuccess, handleError } = require('../utils/responseHandler');

router.get('/:competitionId', async (req, res) => {
  try {
    const { competitionId } = req.params;
    const data = await getStandings(competitionId);
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router; 