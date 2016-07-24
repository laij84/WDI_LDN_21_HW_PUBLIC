console.log("JS Loaded");

$("ul.nav li").on("click", function() {
  $(this).toggleClass("active");
});