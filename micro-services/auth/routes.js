const express = require('express');
const router = express.Router();
// Finally add a route /clean to remove all user's records from the collection. This will be called at each time we start the test to reset the initial conditions.
router.get("/signUp",(req,res)=>{
    res.render("signUp")
})

router.post("/signUp",(req,res)=>{
    var email = req.body.username;
    var password = req.body.password;
    res.render('home',{username:email, password: password })
})

// router.get("/",(req,res)=>{
    
//     })

// router.get("/clean",(req,res)=>{

// })
module.exports = router;