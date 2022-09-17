const mongoose = require('mongoose');

// Schema for defining field for collection

const taskSchema = new mongoose.Schema({

    task : {
        type: String,
        require: true
    },
    category:{
        type:String,
        require:true
    }, 
    date:{
        type:String,
        require:true
    }
})

const Task = mongoose.model('Task', taskSchema);


// Exporting Modules
module.exports = Task;