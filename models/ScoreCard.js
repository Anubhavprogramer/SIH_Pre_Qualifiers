const { default: Candidate } = require("./CandidateSchema");

const mongoose = require();;

const QuestionSchema = new mongoose.Schema({
    Candidate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Candidtae'
    },
    date: {
        type: Date,
        default: Date.now,
    },
    technicalQuestions: {
        type: Number,
        required: true,
    },
    problemSolving: {
        type: Number,
        required: true,
    },
    communication: {
        type: Number,
        required: true,
    },
    Overall:{
        type:Number,
        required:true,
    }
});

module.exports = mongoose.model('Question', QuestionSchema);
