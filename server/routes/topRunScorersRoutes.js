const express = require('express');
const router = express.Router();
const { getTopRunScorers } = require('../controllers/topRunScorersController');

router.get('/:competitionId', getTopRunScorers);

module.exports = router; 