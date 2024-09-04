const express = require('express');
const { loginUser, signupUser,CreateUser } = require('../Controllers/authController');
const router = express.Router();

router.post('/Signup',signupUser);
router.post('/',loginUser);
router.post('/CreatUser',CreateUser);


module.exports = router;