angular
  .module('oAuthApp', ['satellizer'])
  .config(oAuthConfig)
  .controller("MainController", MainController);

oAuthConfig.$inject = ["$authProvider"];
function oAuthConfig($authProvider) {
  
  $authProvider.github({
    url: '/oauth/github',
    clientId: "d51a9a748156932e4956"
  })

  $authProvider.facebook({
    url: '/oauth/facebook',
    clientId: "190791784674782"
  })
}

MainController.$inject = ["$auth"];
function MainController($auth) {

  var self = this;

  this.currentUser = $auth.getPayload();

  this.authenticate = function(provider) {
    $auth.authenticate(provider);
  }
}
