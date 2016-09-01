var Pokemon = require('../models/pokemon');

function pokemonIndex(req, res) {
  Pokemon.find(function(err, pokemon) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(pokemon);
  });
}

function pokemonCreate(req, res) {
  Pokemon.create(req.body, function(err, pokemon) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(pokemon);
  });
}

function pokemonShow(req, res) {
  Pokemon.findById(req.params.id, function(err, pokemon) {
    if(err) return res.status(500).json(err);
    if(!pokemon) return res.status(404).json({ message: "Could not find a pokemon with that id" });
    return res.status(200).json(pokemon);
  });
}

function pokemonUpdate(req, res) {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function(err, pokemon) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(pokemon);
  });
}

function pokemonDelete(req, res) {
  Pokemon.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}

module.exports = {
  index: pokemonIndex,
  create: pokemonCreate,
  show: pokemonShow,
  update: pokemonUpdate,
  delete: pokemonDelete
}
