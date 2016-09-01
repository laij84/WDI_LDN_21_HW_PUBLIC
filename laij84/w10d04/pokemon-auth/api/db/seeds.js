var mongoose = require('mongoose');
var User = require('../models/user');
var Pokemon = require('../models/pokemon');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Pokemon.collection.drop();

User.create([
  {
    username: "mickyginger",
    email: "mike.hayden@ga.co",
    password: "password",
    passwordConfirmation: "password"
  },{
    username: "roro",
    email: "rosanna.rossington@ga.co",
    password: "password",
    passwordConfirmation: "password"
  },{
    username: "chansec",
    email: "chanse.campbell@ga.co",
    password: "password",
    passwordConfirmation: "password"
  }
], function(err, users) {
  Pokemon.create([
    {
      name: "Bulbasaur",
      image: "http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
      types: ["Poison", "Grass"],
      pokedex: 1
    },
    {
      name: "Charmander",
      image: "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
      types: ["Fire"],
      pokedex: 4
    },
    {
      name: "Squirtle",
      image: "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
      types: ["Water"],
      pokedex: 7
    },
    {
      name: "Pikachu",
      image: "http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
      types: ["Electric"],
      pokedex: 25
    },
    {
      name: "Gengar",
      image: "http://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png",
      types: ["Ghost", "Poison"],
      pokedex: 94
    },
    {
      name: "Slowbro",
      image: "http://cdn.bulbagarden.net/upload/thumb/8/80/080Slowbro.png/250px-080Slowbro.png",
      types: ["Water", "Psychic"],
      pokedex: 80
    },
    {
      name: "Chansey",
      image: "http://cdn.bulbagarden.net/upload/thumb/c/cd/113Chansey.png/250px-113Chansey.png",
      types: ["Normal", "Northern"],
      pokedex: 113
    },
    {
      name: "Gyarados",
      image: "http://cdn.bulbagarden.net/upload/thumb/4/41/130Gyarados.png/250px-130Gyarados.png",
      types: ["Water", "Flying"],
      pokedex: 130
    }
  ], function(err, pokemon) {
    console.log(users.length + " users created!");
    console.log(pokemon.length + " pokemon created!");

    mongoose.connection.close();
  });
})