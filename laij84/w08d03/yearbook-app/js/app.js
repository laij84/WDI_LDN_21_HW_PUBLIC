console.log("FRONT END JS LOADED");

var YearbookApp = YearbookApp || {};

YearbookApp.getTemplate = function(template, data) {
  var templateUrl = "/templates/" + template +".html";
  $.ajax({
    url: templateUrl,
    method: "GET",
    dataType: "html"
  }).done(function(templateHtml){

    var parsedTemplate = _.template(templateHtml);
    var compiledTemplate = parsedTemplate(data);

    $("main").empty().append(compiledTemplate);

  });
}

//INDEX
YearbookApp.getUsers = function(){

  if(event) {
    event.preventDefault();
  }

  return $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/users"
  }).done(function(data){
    YearbookApp.getTemplate("index", { users: data } )
  });
}

//SHOW

YearbookApp.getUser = function(){
  event.preventDefault();
  var id = $(this).data("id");

  return $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/users/"+ id,
  }).done(function(data){
    YearbookApp.getTemplate("show", { user: data });
  });
}

//Event Handler

YearbookApp.initEventHandlers = function(){
  $("main").on("click", "a.show-user", this.getUser);
  $("a.navbar-brand").on("click", this.getUsers); //navbar back to index page
  $(".navbar-nav a").on("click", function(){
    event.preventDefault();
    YearbookApp.getTemplate("new");
  });
}


$(function() {
  // YearbookApp.initEventHandlers();
  YearbookApp.getUsers();
  YearbookApp.initEventHandlers();
});