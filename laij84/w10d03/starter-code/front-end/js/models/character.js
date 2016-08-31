angular
.module("lightsaberApp")
.factory("Character", Character); //singleton for model

Character.$inject = ["$resource"];

function Character($resource) {

  var Character = $resource("http://localhost:3000/api/characters/:id", { id: '@_id' }, {
    update: { method: "PUT" }
  });

  return Character;
}
