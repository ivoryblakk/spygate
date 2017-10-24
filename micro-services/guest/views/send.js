var view = {
	res: {},
	render_one: function(item) {
		this.res.send(item);
	},
	render_all: function(items) {
		this.res.send(items);
	}
};

module.exports = view;