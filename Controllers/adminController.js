const asyncHandler = require("../middlewares/asyncHandler");

const getAllInterview = asyncHandler((req, res)=>{
    // Get all Interviewers

});
const getAllApplicant = asyncHandler((req, res)=>{
    // GEt all applicant

});
const getAllQuestions = asyncHandler((req, res)=>{
    // GEt all Questions

});

const CreateTheInterview = asyncHandler((req, res)=>{
    // Assign the Interviewer

});

module.exports = {
    getAllInterview,
    getAllApplicant,
    getAllQuestions,
    CreateTheInterview
}