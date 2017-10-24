var express = require('express');
var app = express();

var guest = require('./routes');

app.use(guest);

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

