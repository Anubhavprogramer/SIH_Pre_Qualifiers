const mongoose = require('mongoose');

const InterviewerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
        index: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['Candidate', 'Interviewer', 'Admin'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10,15}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    },
    department: {
        type: String,
        trim: true,
        required: true,
    },
    experience: {
        type: Number,
        min: 0,
        max: 50,
        required: true,
    },
    skills: [
        {
            type: String,
            trim: true,
        }
    ],
    expertise: {
        type: String,
        trim: true,
    },
    numberOfInterviews: {  // Updated field name and data type
        type: Number,
        default: 0,
    },
});

// Indexing the email field for faster search queries
InterviewerSchema.index({ email: 1 });

const Interviewer = mongoose.model('Interviewer', InterviewerSchema);

module.exports = Interviewer;
