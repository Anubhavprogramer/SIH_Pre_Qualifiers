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

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});

