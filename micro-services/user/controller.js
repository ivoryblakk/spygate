var model = require('../model/index');


var controller = {
    view: {},
    model: model,
    create(newObject){
        this.model.create(newObject);
        var viewAll =this.model.getAll();
        this.view.render_all(viewAll);
    },
    update(id, newValue, key){
        this.model.update(id, newValue, key);
        var viewAll =this.model.getAll();
        this.view.render_all(viewAll);
    }
}

module.exports = controller;