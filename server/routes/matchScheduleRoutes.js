const express = require('express');
const router = express.Router();
const { getMatchSchedule } = require('../controllers/matchScheduleController');

// GET /api/match-schedule/:competitionId
router.get('/:competitionId', getMatchSchedule);

module.exports = router; 