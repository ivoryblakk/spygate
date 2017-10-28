const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', routes);

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

