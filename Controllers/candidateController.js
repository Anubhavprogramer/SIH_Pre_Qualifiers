const asyncHandler = require("../middlewares/asyncHandler");


const Candidate_window = asyncHandler((req, res)=>{
    res.render('candidate_interviewnot scheduled')
})

const NoInterview = asyncHandler( (req, res)=>{
    res.render('candidate_not_in_interview');
});

const Interview = asyncHandler((req, res)=>{
    res.render('cnadidate_Interview');
})

const scoreCard = asyncHandler((req, res)=>{
    res.render("Candidate_scoreCard");
})

const me = asyncHandler((req, res)=>{
    res.render("Candidate_update");
})

module.exports ={
    Candidate_window,
    NoInterview,
    Interview,
    scoreCard,
    me
}