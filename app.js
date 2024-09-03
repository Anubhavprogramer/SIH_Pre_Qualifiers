const express = require('express');
const app = express();
const connectDB = require('./db');
const path = require('path');
const cookieParser = require('cookie-parser');
const authrouter = require('./routes/AuthRoute.js');
const CandidateRouter = require('./routes/candidateRoute.js');
const InterviewerRouter = require('./routes/interviewerRoute.js');
const QuestionRouter = require('./routes/QuestionRoute.js');
const AdminRouter = require('./routes/adminRoutes.js');
const scoreCardRouter = require('./routes/ScoreCardRoutes.js');

require('dotenv').config();
connectDB();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use('/',authrouter);
app.use('/Candidate',CandidateRouter);
app.use('/Interviewer',InterviewerRouter);
app.use('/Question',QuestionRouter);
app.use('/ScoreCard',scoreCardRouter)
app.use('/Admin',AdminRouter);



// ScoreCard Routes

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

