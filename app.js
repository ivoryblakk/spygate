var express = require('express');
var app = express();
var allRoutes = require('./routes');
var path = require('path');
app.use(allRoutes);


var admin = require('')
var user
var guest

app.use(function(req, res) {
	res.send('404');
})

app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('3000');
	};
});