var model = require('./model');

var controller ={
    view:{},
    model: model,
    login(email, password){
        this.model.login(email, password, function(err, username){
       if(err){
           // change the name of redirect
           this.view.redirect("/")
       } else{
           // change the name of redirect
           this.view.redirect("/user")
       } 
    })
    },
    create(newObject){
        
        this.model.create(newObject,(err)=>{
            if(err){          
                this.view.render_signUp(err);
            } else{
                err = null;
                console.log(newObject)
                this.view.render_home(err, newObject);     
            } 
        })

    },
    showForm(){
      this.view.render_signUp();

    }


}



module.exports = controller;