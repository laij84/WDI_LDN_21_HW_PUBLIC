angular.module("PokemonApp", ['ui.router', 'ngResource', 'angular-jwt', "ngMessages"])
  .constant("API_URL", "http://localhost:3000/api")
  .config(Router)
  .config(setupInteceptor);

  setupInteceptor.$inject = ["$httpProvider"];

  function setupInteceptor($httpProvider) {
    return $httpProvider.interceptors.push("AuthInterceptor");
  }

Router.$inject = ["$stateProvider", "$urlRouterProvider"];

function Router($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("home",{
      url: "/",
      templateUrl: "js/templates/home.html"
    })
    .state("pokemon", {
      url: "/pokemon",
      templateUrl: "js/templates/pokemon.html",
      controller:"PokemonController as pokemon"
    })
    .state("register", {
      url: "/register",
      templateUrl: "js/templates/register.html",
      controller:"RegisterController as register"
    })
    .state("login", {
      url: "/login",
      templateUrl: "js/templates/login.html",
      controller:"LoginController as login"
    });

    $urlRouterProvider.otherwise("/");
}

