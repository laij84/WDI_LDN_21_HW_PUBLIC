console.log("js loaded");

$("ul.nav li").on("click", function() {
  $(this).toggleClass('active');
});