const teacherModel = require("../model/teacher.model");
const userModel = require("../model/user.model");

 const records =async (req,res)=>{
      try{
        const allUser = await userModel.find();
    res.render("records", { allUser });
         
    }
    catch(err){
        console.log(err)
    }
}
const deletebyid =  async (req,res)=>{
    try{
        console.log(req.params.id)
        const id= req.params.id;
        await userModel.findByIdAndDelete(id);
        res.redirect("/records")
    }
    catch(err){
 
        console.log(err)
    }
}
const deletebyone =  async (req,res)=>{
    try{
        console.log(req.params.id)
        const id= req.params.id;
        await userModel.findByOneAndDelete("alexander");
        res.redirect("/records")
    }
    catch(err){
 
        console.log(err)
    }
}
const editForm= async (req,res)=>
{
    try{
        const PrevRecord=await userModel.findOne({
            email: "alexander"
        })
        res.render("edit", {PrevRecord});
    }
    catch(err){
        console.log(err)
    }
}
const edit= async (req,res) => {
    console.log(req.body)
    try{ 
        await userModel.findOneAndUpdate({email: req.body.email}, req.body)
        res.redirect('/allUser');
    }
    catch(err){
        console.log(err)
    }
}
const results= async (req,res) =>{
    console.log(req.body)
    try{
        const newteacher = new teacherModel({...req.body, historyOfTeaching: {
                workedIn: req.body.workedIn,
                workedFor: req.body.workedFor,
                yearsOfExperience: req.body.yearsOfExperience,
                qualifications: req.body.qualifications
            } } );;
        const savedteacher = await newteacher.save();
        
    }
    catch(err){
        console.log(err)
    }
}
module.exports={records,deletebyid,editForm,edit,results }