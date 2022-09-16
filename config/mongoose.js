// library is installed and required
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/TODO_LIST_development');

// acquire the connection
const db = mongoose.connection;

// Handling the error while connecting
db.on('err', console.error.bind('Error in connecting the DataBase :: MongoDB'));

// If database Connected 
db.once('open', function(){
    console.log("Connected to DataBase :: MongoDB");
});


// Exporting the DataBase
module.exports = db;
