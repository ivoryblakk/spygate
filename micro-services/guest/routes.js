var express = require('express');
var router = express.Router();

var controller = require('./controller');
var view = require('./views/send');

router.use(function(req, res, next) {
	view.res = res;
	controller.view = view;
	next();
})

router.get('/get_one/:id', (req, res) => {
	var id = Number(req.params.id);
	controller.get_one(id);
});
router.get('/get_all', (req, res) => {
	controller.get_all();
});

module.exports = router;
