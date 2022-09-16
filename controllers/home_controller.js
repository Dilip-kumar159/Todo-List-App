
const { query } = require('express');


module.exports.home = function(req, res){

    res.render('home', {
        title : "Home",
        task_lists : tasks
    });
}