// require npm modules
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require('cors');
//process.env.PORT for when deployed on heroku - will obtain that port number. If not available then on 3000(locally);
var port = process.env.PORT || 3000; 
//database url for when deployed to heroku. 
var databaseUrl = process.env.MONGOLAB_URI || (process.env.NODE_ENV === 'test' ? 'mongodb://localhost/yearbook-api-test' : 'mongodb://localhost/yearbook-api');

//require our router
var routes = require("./config/routes");

// create my express app
var app = express();

//connect to the database
mongoose.connect("mongodb://localhost/yearbook-api");

if(process.env.NODE_ENV !== 'test') {
  //set morgan to be our logger
  app.use(morgan('dev'));
}

//setup Cors 
app.use(cors());
//setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//set up express to use routes AFTER middleware and BEFORE app.listen.
//prefix with /api.
app.use("/api", routes)


//listen for incoming HTTP requests
app.listen(3000, function(){
  console.log("Express is listening to port " + port);
});

module.exports = app;
