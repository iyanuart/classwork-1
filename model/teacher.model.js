const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phoneNumber:{
        type: Number,
        required: true,
        min: 11
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    historyOfTeaching: {
        workedIn: {
            type: String,
            required: true,
        },workedFor: {
            type: String,
            required: true,
        },yearsOfExperience: {
            type: Number,
            required: true,
        },
        qualifications: {
            type: String,
            required: true,
        }
    },
    martialstatus:{
        type: String,
        required: true,
        enum: ["single","married","divorce","widowed"]
    },
    staffRank: {
        type: String,
        required: true,
        enum: ["assistant lecturer", "lecturer I", "senior lecturer", "lecturer I", "professor"]
    },
    gender:{enum:["male","female"], required:true},
    verificationStatus: {
        type: Boolean,
        default: false
    },
    purchaseDate: {
    type: Date,
    default: Date.now
  }
},
 {
    timestamps: true
});
const teacherModel = mongoose.model('Teacher', teacherSchema);
module.exports = teacherModel;