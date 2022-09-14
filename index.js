const express = require('express');

const app = express();

const port = 4000;

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