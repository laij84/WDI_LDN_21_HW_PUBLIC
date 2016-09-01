angular
  .module('PokemonApp')
  .factory('Pokemon', Pokemon);

Pokemon.$inject = ["$resource", "API_URL"];
function Pokemon($resource, API_URL) {
  return $resource(API_URL + "/pokemon", { id: '@_id' }, {
    update: { method: "PUT" },
  });
}