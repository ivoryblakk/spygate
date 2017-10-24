var express = require('express');
var router = express.Router();
/// this setups up the routes

var controller = require('./controller');
// this setups the controller
var view = require('./views/send');
// this setups the views
router.use(function(req, res, next) {
	view.res = res;
	controller.view = view;
	next();
})
// create and updates
router.get('/create/:data', (req, res) => {
    var data = req.params.data;
    var obj = { name: data}
	controller.create(obj);
});
router.get('/update/:id/:newValue/:key', (req, res) => {
    var id = Number(req.params.id);
    var newValue = req.params.newValue;
    var key = req.params.key;
    controller.update(id, newValue, key);
});

module.exports = router;