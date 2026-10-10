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
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
    },
    gender:{type: String, enum:["male","female"], required:true},
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