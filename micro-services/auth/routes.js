const express = require('express');
const router = express.Router();
const controller = require('./controller.js');
const view = require("./views/send.js")
// Finally add a route /clean to remove all user's records from the collection. This will be called at each time we start the test to reset the initial conditions.

router.use(function(req, res, next) {
	view.res = res;
	controller.view = view;
	next();
})

router.get("/signUp",(req,res)=>{
    console.log(controller.model)
    controller.showForm();
       //res.render("signUp", {err:false});
})

router.post("/signUp",(req,res)=>{
    var email = req.body.username;
    var username = req.body.username;
    var password = req.body.password;
    var newObject = {username:username , email: email, password: password}
    console.log(newObject)
 
    controller.create(newObject);
    
    //res.render('home',{username:email, password: password, err: false});
})

// router.get("/",(req,res)=>{
    
//     })

// router.get("/clean",(req,res)=>{

// })
module.exports = router;