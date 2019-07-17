// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var bodyParser = require ("body-parser")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing

app.use(express.urlencoded({extended:true}));
app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// Static files
app.use(express.static('public'));


// Router
require('./apiroutes.js')(app, path);
require('./htmlroutes.js')(app, path);


app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})