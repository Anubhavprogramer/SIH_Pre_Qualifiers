const asyncHandler = require("../middlewares/asyncHandler");

const loginUser = asyncHandler( (req, res) => {
    res.render('Login');
});

const signupUser = asyncHandler( (req, res) => {
    res.render('Signup');
});

module.exports = {
    loginUser,
    signupUser
}