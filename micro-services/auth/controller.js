var model = require('./model');

var controller = {
    view: {},
    model: model,
    login(email, password, callback) {
        this.model.login(email, password, callback);
    },
    create(newObject) {

        this.model.create(newObject, (err) => {
            if (err) {
                this.view.render_signUp(err);
            } else {
                err = null;
                console.log(newObject)
                this.view.render_home(err, newObject);
            }
        })

    },
    showSignupForm(err) {
        this.view.render_signUp(err);
    },
    showLoginForm(err) {
        this.view.render_login(err);
    }


}



module.exports = controller;