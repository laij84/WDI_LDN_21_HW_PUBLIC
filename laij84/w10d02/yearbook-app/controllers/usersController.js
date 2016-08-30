angular.module('YearbookApp')
  .controller('usersController', usersController);

usersController.$inject = ["$http", "API_URL"];

function usersController($http, API_URL) {
  var self = this;
  this.all = [];

  (function getUsers() {
    $http
    .get(API_URL)
    .then(function(response){
    self.all = response.data;
    });
  })(); //self-invoking function

  this.selectUser = selectUser;
  this.selectedUser = null;

  function selectUser(user){
    self.selectedUser = user;
    console.log(self.selectedUser);
  }

  this.resetUser = resetUser;
  function resetUser(){
    self.selectedUser = null;
  }

}