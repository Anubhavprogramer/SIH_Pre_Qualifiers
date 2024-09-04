const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
        select: false
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

CandidateSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try{
        if(this.isCCModified('password')){
            this.password = await bcrypt.hash(this.password, 10);
        }

        next();
    }
    catch(error){
        next(error);
    }
});

CandidateSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

CandidateSchema.methods.getResetPasswordToken = function(){
    // we will do it later
};


const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;