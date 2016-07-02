console.log("JS Loaded");
var square = document.getElementsByTagName("td");
var player = "X";
var gameInPlay = true;

// Squares in Grid
var squareA = document.getElementById("squareA");
var squareB = document.getElementById("squareB");
var squareC = document.getElementById("squareC");
var squareD = document.getElementById("squareD");
var squareE = document.getElementById("squareE");
var squareF = document.getElementById("squareF");
var squareG = document.getElementById("squareG");
var squareH = document.getElementById("squareH");
var squareI = document.getElementById("squareI");

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function(event){
        
      if (player === "X") {
        this.innerHTML = "X";
        this.className = "xClass"
        checkForWin(player);
        player = "O";
      }

      else if (player === "O") {
        this.innerHTML = "O";
        this.className = "oClass"
        checkForWin(player);
        player = "X";
      }

    });
};

function checkForWin(player) {
  switch(true) {
    
    //Check Rows for Win
    case squareA.innerHTML === player && squareB.innerHTML === player && squareC.innerHTML === player :
      alert(player + " is the winner!"); 
      break;
    case squareD.innerHTML === player && squareE.innerHTML === player && squareF.innerHTML === player :
      alert(player + " is the winner!"); 
      break;
    case squareG.innerHTML === player && squareH.innerHTML === player && squareI.innerHTML === player :
      alert(player + " is the winner!"); 
      break;   

    //Check Columns for Win
    case squareA.innerHTML === player && squareD.innerHTML === player && squareG.innerHTML === player :
      alert(player + " is the winner!"); 
      break;
    case squareB.innerHTML === player && squareE.innerHTML === player && squareH.innerHTML === player :
      alert(player + " is the winner!"); 
      break;
    case squareC.innerHTML === player && squareF.innerHTML === player && squareI.innerHTML === player :
      alert(player + " is the winner!"); 
      break;   

      //Check Diagonals for Win

    case squareA.innerHTML === player && squareE.innerHTML === player && squareI.innerHTML === player :
      alert(player + " is the winner!"); 
      break;
    case squareC.innerHTML === player && squareE.innerHTML === player && squareG.innerHTML === player :
      alert(player + " is the winner!"); 
      break;

    // Check for Draw  
    case
      squareA.innerHTML !== "" &&
      squareB.innerHTML !== "" && 
      squareC.innerHTML !== "" &&
      squareD.innerHTML !== "" &&
      squareE.innerHTML !== "" &&
      squareF.innerHTML !== "" &&
      squareG.innerHTML !== "" &&
      squareH.innerHTML !== "" &&
      squareI.innerHTML !== ""
      :
      alert("Draw");
  }  
};

