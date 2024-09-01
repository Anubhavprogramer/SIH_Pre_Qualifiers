const express = require('express');
const app = express();
const connectDB = require('./db');
const path = require('path');
const cookieParser = require('cookie-parser');
const authrouter = require('./routes/AuthRoute.js');

require('dotenv').config();
connectDB();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use('/',authrouter);
// Candidate Routes
app.get('/Candidate',(req,res)=>{
    res.render('candidate_interviewnot scheduled');
})
app.get('/Candidate/NoInterview',(req,res)=>{
    res.render('candidate_not_in_interview');
})
app.get('/Candidate/Interview',(req,res)=>{
    res.render('cnadidate_Interview');
})
app.get('/Candidate/scoreCard',(req,res)=>{
    res.render('Candidate_scoreCard');
})
app.get('/Candidate/me',(req,res)=>{
    res.render('Candidate_update');
})
// Interviewer Routes
app.get('/Interviewer',(req,res)=>{
    res.render('Interviewer');
})
app.get('/Interviewer/interview',(req,res)=>{
    res.render('Interviewer_interview_window');
})
app.get('/Interviewer/me',(req,res)=>{
    res.render('Interviewer_update');
})

// admin Routes
app.get('/admain/AssignInterview',(req,res)=>{
    res.render('PlanTheInterview');
})
app.get('/admain/Candidate',(req,res)=>{
    res.render('candidatePortal');
})
app.get('/admain/Interviewer',(req,res)=>{
    res.render('InterviewerPortal');
})

// Question Routes
app.get('/admain/Questions',(req,res)=>{
res.render('QuestionsPortal');
})


// ScoreCard Routes

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

