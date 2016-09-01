var mongoose = require('mongoose');

var pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  types: [{ type: String }],
  pokedex: { type: Number, required: true }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);