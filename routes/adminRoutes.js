const express = require('express');
const { getAllApplicant, CreateTheInterview, getAllQuestions, getAllInterview } = require('../Controllers/adminController');
const router = express.Router();

router.get('/GetAllInterview',getAllApplicant);
router.get('/getAllApplicant',getAllInterview);
router.get('/getAllQuestion',getAllQuestions);
router.get('/CreateTheInterview',CreateTheInterview);

module.exports= router;