const asyncHandler = require("../middlewares/asyncHandler");
const Candidate = require("../models/CandidateSchema.js"); // Assuming you have a Candidate model
const { default: ErrorHandler } = require("../utils/ErrorHandler.js");
const sendtoken = require("../utils/response.js");

const loginUser = asyncHandler((req, res) => {
    res.render('Login');
});

const signupUser = asyncHandler((req, res) => {
    res.render('Signup');
});

const CreateUser = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const candidate = await Candidate.findOne({ email });
    if (candidate) {
        return next(new ErrorHandler("User already exists", 400));
    }
    const user = await Candidate.create(req.body);

    sendtoken(user, 200, res);

    res.render("candidate_not_in_interview");
});

module.exports = {
    loginUser,
    signupUser,
    CreateUser
};
