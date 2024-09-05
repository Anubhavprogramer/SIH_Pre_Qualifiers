const asyncHandler = require("../middlewares/asyncHandler");

const getAllInterview = asyncHandler((req, res)=>{
    // Get all Interviewers
    res.render('InterviewerPortal');

});
const getAllApplicant = asyncHandler((req, res)=>{
    // GEt all applicant
    res.render('candidatePortal');
});
const getAllQuestions = asyncHandler((req, res)=>{
    // GEt all Questions
    res.render('QuestionsPortal');

});

const CreateTheInterview = asyncHandler((req, res)=>{
    // Assign the Interviewer
    res.render('planTheInterview');

});

module.exports = {
    getAllInterview,
    getAllApplicant,
    getAllQuestions,
    CreateTheInterview
}