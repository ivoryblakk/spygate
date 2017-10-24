var express = require('express');
var app = express();

var guest = require("./guest"); // this accesses the guest folder in micro services *by deafult it access the index.js file*
var user = require("./user"); // this accesses the user folder in micro services *by deafult it access the index.js file*
var admin = require("./admin");// this accesses the admin folder in micro services *by deafult it access the index.js file*
//var auth = require("./authentification");

//app.use(auth);
app.use("/admin", admin, user, guest);// the first part is the developler made route name and the second part is the three access folders
app.use("/user", user, guest); // the first part is the developler made route name and the second part is two access folders
app.use("/guest", guest); // the first part is the developler made route name and the second part is where to access the folder


app.use(function(req, res) {
	res.send('404');
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 3000");
    }
});