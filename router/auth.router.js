const express = require ("express");
const { signin, signup, allUser,  register, dbuser, lognForm, login } = require("../controllers/autentication.controller");
const { records, deletebyid, editForm, edit, results } = require("../controllers/dashboard.controller");
const router = express.Router();

router.get('/signin',signin )  
router.post('/login', login)
router.get('/lognform', lognForm)
router.get('/signup', signup) 
router.get("/allUser", allUser) 
router.post("/dbuser", dbuser) 
router.get("/records",records) 
router.post("/delete/:id",deletebyid) 
router.get("/editForm",editForm )
router.post('/edit',edit)
router.post('/results',results)
router.post('/register', register)
module.exports = router