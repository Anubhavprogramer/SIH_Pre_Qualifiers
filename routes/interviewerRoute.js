const express = require('express');
const { Interviewer, Interviewer_interview_window, Interviewer_update } = require('../Controllers/InterviewerController');

const router = express.Router();

router.get('/',Interviewer);
router.get('/Interviewer_interview_window',Interviewer_interview_window);
router.get('/me',Interviewer_update);

module.exports = router;