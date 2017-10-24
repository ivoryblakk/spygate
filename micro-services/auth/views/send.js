var view = {
	res: {},
	render_signUp: function(err) {
		this.res.render("signUp", {err: err});
	},
	redirect: function(url) {
		this.res.redirect( url);
	}
};