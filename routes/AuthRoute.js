const express = require('express');
const { loginUser, signupUser } = require('../Controllers/authController');
const router = express.Router();

router.get('/signup',signupUser);
router.get('/login',loginUser);


module.exports = router;