const mongoose = require('mongoose');
const Interviewer = require('./Interviewer');

const QuestionSchema = new mongoose.Schema({
    Question:{
        type:String,
        required:true,
    },
    Answer:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    InterviewerAdded:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Interviewer'
    }
});