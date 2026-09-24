const express = require('express');
const app = express();
const mongoose=require('mongoose')
require("dotenv").config();

const port = process.env.port;
const DBURI = process.env.mongoDB_URI;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const schoolUser =[
  {firstName: "Samuel",
    age: 50,
    lastName:"Ajao"
    }, 
    {
        firstName: "uyu",
        age: 50,
        lastName:"Ajao"
    },
     {
        firstName: "Sam",
        age: 50,
        lastName:"Ajao"
    }
]
app.get('/schoolusers', (req, res) => {
    res.json(schoolUser)
})

mongoose.connect(DBURI).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});