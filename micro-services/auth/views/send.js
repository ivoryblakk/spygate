var view = {
  res: {},
  render_signUp: function(err) {
    if (err) {
      this.res.render('signUp', { err: err });
    } else {
      this.res.render('signUp', {err: err});
    }
  },
  render_home: function(err, userObj) {
    if (err) {
      this.res.render('home', { err: err });
    } else {
		
      this.res.render('home', {
        username: userObj.email,
		password: userObj.password,
		err: null
      });
    }
  }
};

module.exports =view;