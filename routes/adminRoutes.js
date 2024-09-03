const express = require('express');
const { getAllApplicant, CreateTheInterview } = require('../Controllers/adminController');
const router = express.Router();

router.get('/GetAllInterview',getAllApplicant);
router.get('/getAllApplicant',getAllApplicant);
router.get('/getAllApplicant',getAllApplicant);
router.get('/CreateTheInterview',CreateTheInterview);

module.exports= router;