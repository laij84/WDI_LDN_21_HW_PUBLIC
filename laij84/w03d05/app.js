var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var routes         = require('./config/routes');
var methodOverride = require("method-override");
var app            = express();

// app setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

// views setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.use(methodOverride(function(req, res) {
  if(req.body && typeof req.body === "object" && "_method" in req.body){
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(routes);

app.listen(3000, function() {
  console.log("Express is up and running, on port 3000");
});
