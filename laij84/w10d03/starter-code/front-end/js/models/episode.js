angular
  .module("lightsaberApp")
  .factory("Episode", Episode); //singleton for model

Episode.$inject = ["$resource"];

function Episode($resource) {

  var Episode = $resource("http://localhost:3000/api/episodes/:id", { id: '@_id' }, {
    update: { method: "PUT" }
  });

  return Episode;
}