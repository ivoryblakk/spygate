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

router.get('/remove/:id/', (req, res) => {
    var id = Number(req.params.id);
    controller.remove(id);
});

module.exports = router;