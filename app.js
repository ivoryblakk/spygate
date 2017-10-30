var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up the views directory
app.set("views", path.join(__dirname, "./views"));
// set up our view engine
app.set("view engine", "ejs");

var auth = require("./micro-services/auth");
app.use("/auth", auth);

var guest = require("./micro-services/guest");
app.use("/", (req, res) => {
	res.redirect("/auth/login");
})

app.use("/", guest);


app.use(function (req, res) {
	res.send('404');
});


app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('using port 3000');
	};
});