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

  this.addUser = addUser;
  this.newUser = {};

  function addUser() {

    $http
      .post(API_URL, self.newUser)
      .then(function(response){
        console.log(response);
        self.all.push(response.data);
        self.newUser = {};
        self.newForm = false;
      });
  }

  this.toggleNewForm = toggleNewForm;
  this.newForm = false;

  function toggleNewForm() {
    self.newForm = !self.newForm;
    console.log("Clicked new form");
  }


  this.selectUser = selectUser;
  self.selectedUser = null;

  function selectUser(user){
    self.selectedUser = angular.copy(user);
    self._selectedUser = user;
  }

  this.resetUser = resetUser;
  function resetUser(){
    self.selectedUser = null;
  }

  this.toggleEditForm = toggleEditForm;
  this.editForm = false;

  function toggleEditForm() {
    self.editForm = !self.editForm;
    console.log("CLICKED");
  }

  this.updateUser = updateUser;

  function updateUser(){
    $http
      .put(API_URL+"/"+self.selectedUser._id, self.selectedUser)
      .then(function(response){
        for(key in response.data){
         self._selectedUser[key] = response.data[key];
        }
        self.editForm = false;
      });
  }

  this.deleteUser = deleteUser;

  function deleteUser(user) {
    $http
      .delete(API_URL+"/"+user._id)
      .then(function(response){
        console.log("delete!")
        var index = self.all.indexOf(user);
        self.all.splice(index,1);
        self.selectedUser = null;
      });
  }

}