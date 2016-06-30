console.log("JS loaded!");

//loop to assign eventlisteners
var buttons = document.querySelectorAll(".number");
var evaluate = document.querySelector(".evaluate");
var clear = document.querySelector(".clear");
var display = document.getElementById("display"); 
var calc = "" 
  
  for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
      calc = calc + this.innerHTML;
      display.innerHTML = calc;
    }
  )};

evaluate.addEventListener("click", function(event){
  if (calc==="") {
    display.innerHTML = "no number";
  }
  else {
  calc = eval(calc);
  display.innerHTML = calc;
  }
});

clear.addEventListener("click", function(event){
  calc = ""
  display.innerHTML = calc;
});



