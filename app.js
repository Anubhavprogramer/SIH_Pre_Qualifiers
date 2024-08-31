const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/signup',(req, res)=>{
    res.render('Signup');
});

app.get('/login',(req,res)=>{
    res.render('Login');
})

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

app.get('/Interviewer',(req,res)=>{
    res.render('Interviewer');
})
app.get('/Interviewer/interview',(req,res)=>{
    res.render('Interviewer_interview_window');
})
app.get('/Interviewer/me',(req,res)=>{
    res.render('Interviewer_update');
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});

