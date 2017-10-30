const express = require('express');
const router = express.Router();
const controller = require('./controller.js');
const view = require("./views/send.js")
// Finally add a route /clean to remove all user's records from the collection. This will be called at each time we start the test to reset the initial conditions.

router.use(function (req, res, next) {
    view.res = res;
    controller.view = view;
    next();
})

router.get("/login", (req, res) => {
    controller.showLoginForm();
});

router.post("/login", (req, res) => {
    controller.login(req.body.email, req.body.password, function (err, username) {
        if (err) {
            controller.showLoginForm(err);
        } else {
            if (username == "admin") {
                router.use(require("../admin"));
            }
            router.use(require("../user"));
        }
    });
});

router.get("/signup", (req, res) => {
    controller.showSignupForm();
})

router.post("/signup", (req, res) => {
    var email = req.body.username;
    var username = req.body.username;
    var password = req.body.password;
    var newObject = { username: username, email: email, password: password }

    controller.create(newObject);
})

module.exports = router;