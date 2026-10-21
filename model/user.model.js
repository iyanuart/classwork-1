const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")

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

userSchema.pre("save", async function (){
    if(!this.isModified("password") )return;
        try{
             const hashedPassword= await bcrypt.hash(this.password, 10)
             this.password = hashedPassword;
        }
        catch(err){
            console.log(err)
        }
    })
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;