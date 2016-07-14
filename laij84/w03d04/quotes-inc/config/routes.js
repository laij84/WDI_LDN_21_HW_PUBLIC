var router = require('express').Router();

var quotes = [
  {
    id:0,
    author: "Winston Churchill",
    quote: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly."
  },

  {
    id:1,
    author: "Ernest Hemmingway",
    quote:  "An intelligent man is sometimes forced to be drunk to spend time with his fools." 
  },

  {
    id:2,
    author: "Ernest Hemmingway",
    quote: "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut."
  },

  {
    id:3,
    author: "Dean Martin", 
    quote: "You're not drunk if you can lie on the floor without holding on." 
  },
  {
    id:4,
    author: "Rodney Dangerfield", 
    quote: "I drink too much. The last time I gave a urine sample it had an olive in it."
  },
  {
    id:5,
    author: "Homer Simpson", 
    quote: "Here’s to alcohol, the cause of, and solution to, all life’s problems."
  },
  {
    id:6,
    author: "Catherine Zandonella", 
    quote: "Time is never wasted when you’re wasted all the time."
  },
  {
    id:7,
    author: "Benjamin Franklin", 
    quote: "In wine there is wisdom, in beer there is freedom, in water there is bacteria."
  }
];

router.get("/", function(req, res) {
  res.redirect("/quotes");
});

router.get("/quotes", function(req, res) {
  res.render("quotes/index");
});

router.get("/quotes", function(req, res) {
  res.render("quotes/index");
});

router.get("/quotes/new", function(req, res) {
  res.render("quotes/new");
});

module.exports = router;



