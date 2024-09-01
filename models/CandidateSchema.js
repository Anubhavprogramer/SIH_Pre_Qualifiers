const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['Candidate','Interviewer','Admin'],
    },
    date: {
        type: Date,
        default: Date.now
    },
    name:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    PostApplied:{
        type:String,
    },
    experience:{
        type:Number,
    },
    skills:[
        {
            type:String,
        }
    ],
    resume:{
        type:String,
        // we will implement multer here later
    },
    portfolio:{
        type:String,
    },
    project1:{
        type:String,
    },
    scoreCard:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'ScoreCard'
        }
    ],
    interview:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Interview'
        }
    ],
    

});

const Candidate = mongoose.model('Candidate', CandidateSchema);

export default Candidate;