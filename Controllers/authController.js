const asyncHandler = require("../middlewares/asyncHandler");
const Candidate = require("../models/CandidateSchema.js"); // Assuming you have a Candidate model
const bcrypt = require('bcrypt'); // Missing bcrypt import
const jwt = require('jsonwebtoken'); // Missing jsonwebtoken import

const loginUser = asyncHandler((req, res) => {
    res.render('Login');
});

const signupUser = asyncHandler((req, res) => {
    res.render('Signup');
});

const CreateUser = asyncHandler(async (req, res) => {
    const { email, password, confirmPassword, DateOfBirth, role } = req.body;

    // Validate that password and confirmPassword match
    // if (password !== confirmPassword) {
    //     return res.status(400).json({ success: false, message: "Passwords do not match" });
    // }

    // Check if the user already exists
    const candidate = await Candidate.findOne({ email });
    if (candidate) {
        return res.status(400).json({ success: false, message: "User already exists" });
    }

    try {
        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create a new candidate/user
        const newUser = await Candidate.create({
            email,
            password: hash,
            DateOfBirth,
            role,
        });

        // Generate a JWT token
        const token = jwt.sign({ email: newUser.email, userid: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set the JWT as a cookie
        res.cookie('jwt', token, { httpOnly: true, secure: true });

        // Redirect the user to the /Candidate route after successful signup
        return res.redirect('/Candidate');
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = {
    loginUser,
    signupUser,
    CreateUser
};
