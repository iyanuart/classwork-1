const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs")


// moduleration for the arrangemnet of the 
 const signin =(req, res) => {
    res.render('signin')
} 
const lognForm =(req, res) => {
    res.render('login')
} 
const login =async (req, res) => {

    console.log(req.body)
    try{
        const user= await userModel.findOne({email: req.body.email})
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        const vertify = await bcrypt.compare(req.body.password, user.password)
        if(!vertify){
            return res.status(400).json({message: "Invalid password"})
        }
        else{
            const payload ={
                firstName:user.firstName,
                lastName: user.LastName,
                email:user.email

            }
             const token =await jwt.sign({payload}, process.env.jwt_secret, {expiresIn: "6min"})
           return res.status(200).json({message: "nice to be back", token})
        }
        res.send("Login successful")
    }
    catch(err){
        console.log(err)
    }
   
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
    // const hashedPassword = await bcrypt.hash(req.body.password, 10)
    // const {password, ...rest}= req.body
    // this can't work without the middleware express.urlencoded({ extended: true }) and express.json() which is used to parse the incoming request body and make it available in the req.body object.
    try{
        // const newUser = new userModel({password: hashedPassword, ...rest});
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
        console.log (savedUser)
    }
    catch(err){
        console.log(err)
    }
}
module.exports ={signin,login,lognForm,register, signup,allUser, dbuser}