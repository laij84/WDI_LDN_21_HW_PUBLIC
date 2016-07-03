console.log("JS Loaded");
var square = document.getElementsByTagName("td");
var player = "X";
var playerTurn = document.getElementById("playerTurn");
var xScore =  0;
var oScore =  0;
var drawScore = 0;
var getXScore = document.getElementById("xScore");
var getOScore = document.getElementById("oScore");
var getDrawScore = document.getElementById("drawScore");
var resetGameButton = document.getElementById("resetGame"); 

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

playerTurn.innerHTML = "Click on a square to start the game." + " It's player " + player +"'s turn."

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function(event){
      
      if (this.innerHTML === "") { 

        if (player === "X") {
          this.innerHTML = "X";
          this.className = "xClass";
          playerTurn.innerHTML = "It's player O's turn.";
          checkForWin(player);
          player = "O";
        }

        else if (player === "O") {
          this.innerHTML = "O";
          this.className = "oClass";
          playerTurn.innerHTML = "It's player X's turn.";
          checkForWin(player);
          player = "X";
        }
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
      alert("It's a draw!");
      drawScore += 1;
      getDrawScore.innerHTML = "Draw = "+drawScore;
      clearBoard(); 
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
    getXScore.innerHTML = "X = " + xScore;
  }
    else if (player === "O") {
    oScore = oScore+1;
    getOScore.innerHTML = "O = " + oScore;
  }
};

resetGameButton.addEventListener("click", function() {
  clearBoard();
  xScore = 0;
  getXScore.innerHTML = "X = 0";
  oScore = 0;
  getOScore.innerHTML = "O = 0";
  drawScore = 0;
  getDrawScore.innerHTML = "Draw = 0";
  playerTurn.innerHTML = "Click on a square to start the game." + " It's player " + player +"'s turn."
});




