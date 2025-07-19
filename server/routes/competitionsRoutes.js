const express = require('express');
const router = express.Router();
const { getMensCompetitions, getWomensCompetitions } = require('../controllers/competitionsController');
const { handleSuccess, handleError } = require('../utils/responseHandler');

// Route for men's competitions
router.get('/men', async (req, res) => {
  try {
    const data = await getMensCompetitions(req, res);
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
});

// Route for women's competitions
router.get('/women', async (req, res) => {
  try {
    const data = await getWomensCompetitions(req, res);
    handleSuccess(res, data);
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = router; 