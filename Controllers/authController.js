const asyncHandler = require("../middlewares/asyncHandler");

const loginUser = asyncHandler(async (req, res) => {
    res.render('Login');
});

const signupUser = asyncHandler(async (req, res) => {
    res.render('Signup');
});

module.exports = {
    loginUser,
    signupUser
}