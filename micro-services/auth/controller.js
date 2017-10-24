var model = require('./model');

var controller ={
    view:{},
    model: model,
    login(email, password){
        this.model.login(email, password, function(err, username){
       if(err){
           this.view.redirect("/")
       } else{
           this.view.redirect("/" + username)
       } 
    })
    },
    create(newObject){
        this.model.create(newObject,(err)=>{
            if(err){
                this.view.render_signUp(err);
            } else{
                this.view.redirect("home");     
            } 
        })

    }


}



module.exports = controller;