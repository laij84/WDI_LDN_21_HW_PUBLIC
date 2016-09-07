var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bluebird = require('bluebird');
var routes = require('./config/routes');

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/oauth-example");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static('public'));

app.use('/', routes);

app.listen(8000, function() {
  console.log("Express is running... away!");
});