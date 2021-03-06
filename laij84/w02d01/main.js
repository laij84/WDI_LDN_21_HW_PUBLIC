console.log("js loaded!");

var computerScoreDisplay = document.getElementById("computerScore");
var playerScoreDisplay =  document.getElementById("playerScore");
var drawScoreDisplay = document.getElementById("drawScore");


var computerScore = 0;
var playerScore = 0;
var drawScore = 0;

var globalComputerHand = "";
var globalPlayerHand = "";

function ComputerChoice() {
  this.value = 1;
  this.domElement = document.createElement("DIV");
  document.getElementById("computerChoice").appendChild(this.domElement);
  this.domElement.className = "hand" + this.value;  
}

ComputerChoice.prototype.roll = function() {
  this.value = Math.ceil(Math.random()*3);
  this.domElement.className = "hand" + this.value;
  var computerHand = "hand"+this.value;
  console.log(computerHand);
  globalComputerHand = computerHand;
  checkForWin();
  this.domElement.remove();
}

function PlayerChoice() {
  this.value = 1;

  for (var i = 0; i < 3; i++) {

  this.domElement = document.createElement("DIV");
  document.getElementById("choices").appendChild(this.domElement);
 
  this.domElement.className = "hand" + this.value;
  console.log (this.value)
  this.value +=1;

  this.domElement.addEventListener("click", function(){
    var playerHand = this.className;
    globalPlayerHand = playerHand;
    console.log(playerHand);
    var computer = new ComputerChoice();
    computer.roll();

  });
  
  }
}

var player =  new PlayerChoice();

//hand1 = rock, hand2 = paper, hand3 = scissors

function checkForWin() {
  switch(true) {

    // cases if player selects rock (hand1)    
    case globalPlayerHand === "hand1" && globalComputerHand === "hand1"
    :
    alert("It's a draw!");
    drawScore += 1;
    break;
    case globalPlayerHand === "hand1" && globalComputerHand === "hand2"
    :
    alert("You lose! Paper beats rock!");
    computerScore += 1;
    break;
    case globalPlayerHand === "hand1" && globalComputerHand === "hand3"
    :
    alert("You win! Rock beats scissors!");
    playerScore += 1;
    break;

    //cases if player selects paper (hand2)
    case globalPlayerHand === "hand2" && globalComputerHand === "hand2"
    :
    alert("It's a draw!");
    drawScore += 1;
    break;
    case globalPlayerHand === "hand2" && globalComputerHand === "hand3"
    :
    alert("You lose! Scissors beats paper!");
    computerScore += 1;
    break;
    case globalPlayerHand === "hand2" && globalComputerHand === "hand1"
    :
    alert("You win! Paper beats rock!");
    playerScore += 1;
    break;

    //cases if player selects scissors (hand3)
    case globalPlayerHand === "hand3" && globalComputerHand === "hand3"
    :
    alert("It's a draw!");
    drawScore += 1;
    break;
    case globalPlayerHand === "hand3" && globalComputerHand === "hand1"
    :
    alert("You lose! Rock beats paper!");
    computerScore += 1;
    break;
    case globalPlayerHand === "hand3" && globalComputerHand === "hand2"
    :
    alert("You win! Scissors beats paper!");
    playerScore += 1;
    break;

  }

  playerScoreDisplay.innerHTML = "Player = " + playerScore;
  computerScoreDisplay.innerHTML = "Computer = " + computerScore;
  drawScoreDisplay.innerHTML = "Draw = " + drawScore;

}




