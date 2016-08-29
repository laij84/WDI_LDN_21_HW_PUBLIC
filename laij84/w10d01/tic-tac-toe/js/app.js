angular.module("TicTacToe",[]).controller("GameController", GameController);

function GameController(){

  this.board = new Array(9);
  this.turn = false;
  this.winner = false;
  this.currentPlayer = null;
  this.winMessage;
  this.move = function(index) {
    
    if(this.board[index]===undefined && !this.winner){
      this.turn = !this.turn;

      if(this.turn===true){
        this.board[index] = "X";
        this.currentPlayer = "X";
      }
      else if(this.turn===false){
       this.board[index] = "O";
       this.currentPlayer = "O";
      }

        this.checkForWin(index);
    }
  }

  this.checkForWin = function(index){

    if(
        
        //Check Rows
        (this.board[0] === this.board[1] && this.board[0] === this.board[2] && this.board[0] !== undefined) ||
        (this.board[3] === this.board[4] && this.board[3] === this.board[5] && this.board[3] !== undefined) ||
        (this.board[6] === this.board[7] && this.board[6] === this.board[8] && this.board[6] != undefined) ||

        //Check Columns
        (this.board[0] === this.board[3] && this.board[0] === this.board[6] && this.board[0] !== undefined) ||
        (this.board[1] === this.board[4] && this.board[1] === this.board[7] && this.board[1] !== undefined) ||
        (this.board[2] === this.board[5] && this.board[2] === this.board[8] && this.board[2] != undefined) ||

        //Check Diagonals
        (this.board[0] === this.board[4] && this.board[0] === this.board[8] && this.board[0] !== undefined) ||
        (this.board[2] === this.board[4] && this.board[2] === this.board[6] && this.board[2] !== undefined)

      ){
        this.winner = true;
        this.winMessage = this.board[index] + " is the winner!";
    }

    else if (!this.board.includes(undefined)){
      this.winMessage = "It's a draw!";
    }

    else {
      this.winner = false;
    }
  }

  this.reset = function() {
    for (var i = 0; i < this.board.length; i++) {
      this.board[i] = undefined;
      this.winner = false;
      this.winMessage = null;
    }
  }
}