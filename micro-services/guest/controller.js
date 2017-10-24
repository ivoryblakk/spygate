var model = require('../model/index');


var controller = {
	view: {},
	model: model,
	get_one: function(id) {
		var item = this.model.read(id);
		this.view.render_one(item);
	},
	get_all: function() {
		var allItems = this.model.getAll();
		this.view.render_all(allItems);
	}
};



module.exports = controller;