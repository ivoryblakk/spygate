var view ={
    res: {},
    render_all(item){
        this.res.send(item);
    }
}

module.exports = view;