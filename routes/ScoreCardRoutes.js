const express = require('express');
const { CreateScoreCard, GetCard } = require('../Controllers/scoreCardContoller');
const route = express.Router();

route.get('/create',CreateScoreCard )
route.get('/get',GetCard)

module.exports = route;