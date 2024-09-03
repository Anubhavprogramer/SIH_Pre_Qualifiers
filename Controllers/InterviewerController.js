const asyncHandler = require("../middlewares/asyncHandler");

const Interviewer = asyncHandler((req, res)=>{
    res.render('Interviewer');
})

const Interviewer_interview_window = asyncHandler( (req, res)=>{
    res.render('Interviewer_interview_window');
});

const Interviewer_update = asyncHandler((req, res)=>{
    res.render('Interviewer_update');
});

module.exports ={
    Interviewer,
    Interviewer_interview_window,
    Interviewer_update
}