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
    bio: "Extreme web junkie. Passionate music scholar. Amateur coffee nerd. Creator. Foodaholic. Incurable pop culture enthusiast.",
    portfolio: "http://www.jasonlai.co.uk"
  },{
    name: "Jeremy Smith",
    twitter: "https://twitter.com/jmsmith53",
    github: "https://github.com/tankjem",
    image: "https://avatars3.githubusercontent.com/u/17545643?v=3&s=460",
    bio: "This is me.",
    portfolio: "http://www.jeremysmith.co.uk"
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
    portfolio: "http://www.axelberdugo.fr"
  },{
    name: "Bex Bolton",
    twitter: "https://uk.linkedin.com/in/becky-bolton-859618114",
    github: "https://github.com/bexB1/",
    image: "none",
    bio: "Unapologetic writer. Internet specialist. Hipster-friendly twitter aficionado. Wannabe travel expert. Avid beer lover.",
    portfolio: "http://www.bexbolton.co.uk"
  },{
    name: "Ben Blowers",
    twitter: "https://uk.linkedin.com/in/bblowers",
    github: "https://github.com/ezarai/",
    image: "none",
    bio: "Amateur food fan. Tvaholic. Typical beer nerd. Prone to fits of apathy. Thinker. Music junkie. Unable to type with boxing gloves on.",
    portfolio: "http://www.benblowers.co.uk"
  },{
    name: "Shu-yang Chia",
    twitter: "https://uk.linkedin.com/in/shu-yang-chia-1a6638",
    github: "https://github.com/syangc/",
    image: "none",
    bio: "Total music ninja. Zombie guru. Friendly social media geek. Professional thinker.",
    portfolio: "http://www.shuyangchia.co.uk"
  },{
    name: "Kaitlyn Tierney",
    twitter: "https://www.linkedin.com/in/krtierney",
    github: "https://github.com/krtierney/",
    image: "none",
    bio: "Beer trailblazer. Devoted internet nerd. Typical web junkie. Unapologetic travel aficionado. Coffee scholar. Future teen idol.",
    portfolio: "http://www.krtierney.co.uk"
  }, {
    name: "Xianghua Liu",
    twitter: "https://twitter.com/andyxhliu",
    github: "https://github.com/andyxhliu/",
    image: "https://avatars1.githubusercontent.com/u/23e234242",
    bio: "I am Xianghua Liu.",
    portfolio: "http://andyxhliu.com/"
  }, {
    name: "Will Cook",
    twitter: "https://www.linkedin.com/in/will-cook-1234",
    github: "https://github.com/willcook4/",
    image: "none",
    bio: "Creator. Pop culture ninja. Certified analyst. Friendly problem solver. Typical baconaholic.",
    portfolio: "http://www.willcook.nz"
  }, {
    name: "Edward Kemp",
    twitter: "https://www.linkedin.com/in/edward-kemp-3a220397?trk=hp-identity-photo",
    github: "https://github.com/steadyx/",
    image: "none",
    bio: "Amateur beer guru. Bacon scholar. Web lover. Hardcore twitter fanatic. Wannabe social media fanatic. Student. Entrepreneur. Alcohol expert.",
    portfolio: "http://www.edwardkemp.co.uk"
  }
]);




