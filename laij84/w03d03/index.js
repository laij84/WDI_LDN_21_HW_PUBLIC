// Require the stuff we need
var express = require('express');
var morgan = require('morgan');
// var expressLayouts = require('express-ejs-layouts');

// Build the app
var app = express();


// Set up the directory which will store the view files
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// Set EJS as the app's templating engine
app.set('view engine', 'ejs');
// app.set('layout', 'myLayout'); // defaults to 'layout' 

// Logging middleware
app.use(morgan());

// app.use(expressLayouts);
// app.use(app.router);

//request handler
app.get('/', function(req, res) {
  res.render('index', { message: randomSentence()});
});

app.get('/about', function(req, res) {
  res.render('index', { message: 'About this site'});
});

// app.get('/', function(req, res){
//   res.render('aView', { layout: 'someSpecificLayout' });
// });

app.get('*', function(req,res) {
  res.status(404).end("Error: Page Not Found");
});

//listen for incoming traffic.
app.listen(8000,function(){
  console.log("Express is listening on port 8000");
});
 
//random sentence generator:

var sentenceArray = [
"I may be drunk, Miss, but in the morning I will be sober and you will still be ugly. - Winston Churchill",
"An intelligent man is sometimes forced to be drunk to spend time with his fools. - Ernest Hemmingway",
"Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut. - Ernest Hemmingway",
"You're not drunk if you can lie on the floor without holding on. - Dean Martin",
"I drink too much. The last time I gave a urine sample it had an olive in it. - Rodney Dangerfield",
"Here’s to alcohol, the cause of, and solution to, all life’s problems. - The Simpsons",
 "Time is never wasted when you’re wasted all the time. - Catherine Zandonella",
];

function randomSentence() {
  var randomIndex = Math.floor(Math.random()*sentenceArray.length);
  return sentenceArray[randomIndex];
}





