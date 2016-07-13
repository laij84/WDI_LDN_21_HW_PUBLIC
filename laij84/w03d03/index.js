//named the file index.js instead of app.js in nodemon, don't know how to change it so renamed this file index.js so it would work. 

// Require the stuff we need
var express = require('express');
var morgan = require('morgan');
var expressLayouts = require('express-ejs-layouts');

// Build the app
var app = express();


// Set up the directory which will store the view files
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// Set EJS as the app's templating engine
app.set('view engine', 'ejs');
app.set('layout', 'myLayout'); //sets the default layout to myLayout.ejs

// Logging middleware
app.use(morgan());

app.use(expressLayouts);
// app.use(app.router); //removed this as it crashes nodemon

//request handler

app.get('/about', function(req, res) {
  res.render('index', { 
    title: 'About This Website',
    message: 'This website features random quotes from famous drunkards.',
  });
});

app.get('/', function(req, res) {
  res.render('index', { 
    title: 'Inebriated Quotes',
    message: randomSentence(),
  });
});



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
"In wine there is wisdom, in beer there is freedom, in water there is bacteria. - Benjamin Franklin"
];

function randomSentence() {
  var randomIndex = Math.floor(Math.random()*sentenceArray.length);
  return sentenceArray[randomIndex];
}











