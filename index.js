const express = require('express');

const app = express();

const port = 4000;

//parse for decoding the form-info
app.use(express.urlencoded());


// Accessing database
const db = require('./config/mongoose');

// Setting up the View Engine as ejs
app.set('view engine', 'ejs');
app.set('views','./views');


//setting up the route
app.use('/', require('./routes/index'));


// Starting the Server
app.listen(port, function(err){
    if(err){
        console.log("Error while running the server " + err);
        return;
    }
    console.log(`Server is up and running on the port : ${port}`);
});