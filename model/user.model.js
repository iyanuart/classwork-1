const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;