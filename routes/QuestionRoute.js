const express = require('express');
const { QuestionsWindoaw, addQuestion, deleteQuestion } = require('../Controllers/QuestionController');
const router = express.Router();

router.get('/',QuestionsWindoaw);
router.get('/add',addQuestion);
router.get('/delete',deleteQuestion);

module.exports = router;