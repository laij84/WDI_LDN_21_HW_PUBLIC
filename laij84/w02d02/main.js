console.log("js loaded");

var daftPunk = {

  getSquares: document.querySelectorAll(".square"),
  
  clickListener: function() {
    for (var i = 0; i < daftPunk.getSquares.length; i++) {
      daftPunk.getSquares[i].addEventListener("click", function(){
        var playWav = new Audio("sounds/"+event.target.id+".wav");
        playWav.play();
      });
    }
  },
};

daftPunk.clickListener();
