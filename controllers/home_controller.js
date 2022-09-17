
const { query } = require('express');

// included task file in models folder
const Task = require('../models/task');


// Setting up for home View
module.exports.home = function(req, res){

    Task.find({}, function(err, tasks){
        if(err){
            console.log("Error in Fetching tasks from Db");
            return;
        }
        res.render('home', {
        title : "Home",
        task_lists : tasks
        });

    });
}


//code for updating the task list
module.exports.update = function (req, res) {
    Task.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function (err, newContact) {
        if (err) {
            console.log('error in creating a contact!');
            return;
        }
        console.log('********', newContact);
        res.redirect('back');
    });
}


//code for deleting the tasklist
module.exports.del = function (req, res) {
    let id = req.query.id;
    // console.log(id);
    Task.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('err in delete the task from database');
            return;
        }
        return res.redirect('back');
    });
}
