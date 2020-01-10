const express = require("express")
const router = express.Router();
const User = require('../models/Users/Login.js');
const Registration = require('../models/Users/SignUp.js');
const verifyToken = require('../middlewares/verifyToken');

// router.post('/login', async (req, res) =>{
//     const userInfo = req.body;
//     // check email
//     const user = await  User.findOne({email: userInfo.email})
//     if(!user){
//         res.send({message: "Invalid email or password"})
//     }
//     // check password
//     const matchPassword = user.comparePassword(userInfo.password)
//     console.log(matchPassword)
//     if(!user){
//         res.send({message: "Invalid email or password"})
//     }
//     // genrateTonken
//     await user.generateToken()

//     res.send({email: user.email, frnds: user.friendIds, token: user.token, name: user.name});
// })



module.exports = router;