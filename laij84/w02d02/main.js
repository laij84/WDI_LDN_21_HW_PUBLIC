console.log("js loaded");

var daftPunk = {

  getSquares: document.querySelectorAll(".square"),
  getBtn: document.getElementById("randomBtn"),
  
  clickListener: function() {
    for (var i = 0; i < daftPunk.getSquares.length; i++) {
      daftPunk.getSquares[i].addEventListener("click", function(){
        var playWav = new Audio("sounds/"+event.target.id+".wav");
        playWav.play();
      });
    }
  },

//Bonus feature to randomly play one of the 16 sounds.
  playRandom: function() {
    var randomIndex = Math.floor(Math.random() * daftPunk.getSquares.length);
    var randomId = daftPunk.getSquares[randomIndex].id;
    var playRandom = new Audio("sounds/"+randomId+".wav");
    playRandom.play();

    },
    
  };

daftPunk.clickListener();

daftPunk.getBtn.addEventListener("click", function(){
  daftPunk.playRandom(); 
  console.log("clicked");});

