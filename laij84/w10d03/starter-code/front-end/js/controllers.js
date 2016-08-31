angular
  .module("lightsaberApp")
  .controller("MainController", MainController);


MainController.$inject = ["Character"];

function MainController(Character){
  var self = this;

  console.log(Character.query());
  this.characterAll = Character.query();


}