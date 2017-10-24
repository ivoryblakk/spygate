var model = require('../model/index');

var controller ={
    view:{},
    model: model,
    remove(id){
        this.model.remove(id);
        var viewAll =this.model.getAll();
        this.view.render_all(viewAll);
    }

}

module.exports = controller;