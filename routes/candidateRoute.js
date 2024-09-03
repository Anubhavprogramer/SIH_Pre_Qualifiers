const express = require('express');
const { Candidate_window, NoInterview, Interview, me, scoreCard } = require('../Controllers/candidateController');
const router = express.Router();

router.get('/',Candidate_window);
router.get('/NoInterview',NoInterview);
router.get('/Interview',Interview);
router.get('/scoreCard',scoreCard);
router.get('/me',me);

module.exports = router;