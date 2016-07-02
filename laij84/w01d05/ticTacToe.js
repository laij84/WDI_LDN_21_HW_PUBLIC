console.log("JS Loaded");
var square = document.getElementsByTagName("td");
var player = "X";
var xScore =  0;
var oScore =  0;
var getXScore = document.getElementById("xScore");
var get0Score = document.getElementById("oScore"); 

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
      scoreTracker();
      clearBoard(); 
      break;
    case squareD.innerHTML === player && squareE.innerHTML === player && squareF.innerHTML === player :
      alert(player + " is the winner!");
      scoreTracker();
      clearBoard();  
      break;
    case squareG.innerHTML === player && squareH.innerHTML === player && squareI.innerHTML === player :
      alert(player + " is the winner!");
      scoreTracker();
      clearBoard(); 
      break;   

    //Check Columns for Win
    case squareA.innerHTML === player && squareD.innerHTML === player && squareG.innerHTML === player :
      alert(player + " is the winner!");
      scoreTracker();
      clearBoard();  
      break;
    case squareB.innerHTML === player && squareE.innerHTML === player && squareH.innerHTML === player :
      alert(player + " is the winner!");
      scoreTracker();
      clearBoard();  
      break;
    case squareC.innerHTML === player && squareF.innerHTML === player && squareI.innerHTML === player :
      alert(player + " is the winner!");
      scoreTracker();
      clearBoard();  
      break;   

      //Check Diagonals for Win

    case squareA.innerHTML === player && squareE.innerHTML === player && squareI.innerHTML === player :
      alert(player + " is the winner!");
      scoreTracker();
      clearBoard(); 
      break;
    case squareC.innerHTML === player && squareE.innerHTML === player && squareG.innerHTML === player :
      alert(player + " is the winner!");
      scoreTracker();
      clearBoard();  
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

function clearBoard() {
  for (var i = 0; i < square.length; i++) {
    square[i].innerHTML = "";
    square[i].className = "";
  }
};


function scoreTracker() {
    
  if (player === "X") {
    xScore = xScore+1;
  }
    else if (player === "O") {
    oScore = oScore+1;
  }
};

