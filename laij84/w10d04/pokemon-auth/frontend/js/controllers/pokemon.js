angular
  .module("PokemonApp")
  .controller("PokemonController", PokemonController);

PokemonController.$inject = ["Pokemon"];

function PokemonController(Pokemon) {
  this.all = Pokemon.query();

}