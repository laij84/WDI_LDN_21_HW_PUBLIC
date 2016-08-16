var mongoose    = require('mongoose');

var databaseUrl = 'mongodb://localhost/yearbook-api';
mongoose.connect(databaseUrl);

// Require models
var User = require('../models/user');

//drop to prevent duplicates
User.collection.drop();

var users = User.create([
  {
    name: "Jason Lai",
    twitter: "https://twitter.com/laijase",
    github: "https://github.com/laij84",
    image: "none",
    bio: "I'm unemployed.",
    portfolio: "My portfolio is in progress."
  },{
    name: "Jeremy Smith",
    twitter: "https://twitter.com/jmsmith53",
    github: "https://github.com/tankjem",
    image: "https://avatars3.githubusercontent.com/u/17545643?v=3&s=460",
    bio: "This is me",
    portfolio: "I did some stuff"
  },{
    name: "Cameron Perrin",
    twitter: "https://twitter.com/tacobell",
    github: "https://github.com/cameronperrin/",
    image: "http://imgur.com/a/DXF1D",
    bio: "Idk make one up",
    portfolio: "http://www.sanger.dk/"
  },{
    name: "Antonio Rossi",
    twitter: "https://twitter.com/tonio155",
    github: "https://github.com/tonio155/",
    image: "https://avatars3.githubusercontent.com/u/13243812?v=3&s=460",
    bio: "Ciao!",
    portfolio: "www.antoniorossi.net" 
  },{
    name: "Axel Berdugo",
    twitter: "https://twitter.com/axoss",
    github: "https://github.com/axosss/",
    image: "none",
    bio: "Baguette Fromage",
    portfolio: "je ne sais quois"
  }]);