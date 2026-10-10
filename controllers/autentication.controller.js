const userModel = require("../model/user.model")

// moduleration for the arrangemnet of the 
 const signin =(req, res) => {
    res.render('signin')
} 
const signup = (req,res) => {
    res.render('signup')
}
const allUser =async (req, res) => {
    try{
        const allUser = await userModel.find();
         
        res.json(allUser)
    }
    catch(err){
        console.log(err)
    }
}
const dbuser= async (req, res) => {
    try{
    const User = await userModel.find({firstName:req.body.searchinput});
    res.json(User)
}
catch(err){
    console.log(err)
}

}
const register =async (req, res) => { 
    console.log(req.body) 
    // this can't work without the middleware express.urlencoded({ extended: true }) and express.json() which is used to parse the incoming request body and make it available in the req.body object.
    try{
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
    }
    catch(err){
        console.log(err)
    }
}
module.exports ={signin,register, signup,allUser, dbuser}