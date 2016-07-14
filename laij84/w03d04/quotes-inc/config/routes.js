var router = require('express').Router();

var quotesArray = [
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
  }];

  router.get("/", function(req, res) {
   res.redirect("/quotes");
  });

  router.get("/quotes", function(req, res) {
   res.render("quotes/index", {quotesArray: quotesArray});
  });

  router.get("/quotes", function(req, res) {
   var id = req.params.id;
   res.render("quotes/index",{quoteId: quotesArray[id] });
  });

  router.get("/quotes/new", function(req, res) {
   res.render("quotes/new");
  });

//SHOW
  router.get("/quotes/:id", function(req, res) {
   var id = req.params.id;
   res.render("quotes/show", {quoteId: quotesArray[id] });
  });

//EDIT
  router.get('/quotes/:id/edit', function(req, res) {
    var id = req.params.id;
    res.render("quotes/edit", { quoteId: quotesArray[id] });
  });

//CREATE NEW QUOTE
  router.post("/quotes", function (req, res){
    console.log(req.body);

    var quote = req.body.quote;
    quote.id = quotesArray.length;
    quotesArray.push(quote);

    res.redirect("/quotes");

  });

//UPDATE QUOTES
  router.put("/quotes/:id", function(req, res) {
    
    var id = req.params.id;
    var quote = req.body.quote;
    quote.id = id;

    quotesArray[id] = quote;

    res.redirect("/quotes");
  });

//DELETE QUOTES
  router.delete('/quotes/:id', function(req, res) {
    var id = req.params.id;
    quotesArray.splice(id , 1);

    quotesArray = quotesArray.map(function(quote) {
      if(quote.id>=id) quote.id--;
        return quote;
    });
    res.redirect("/quotes");
  });

  module.exports = router;





