angular
  .module("lightsaberApp")
  .controller("MainController", MainController);


MainController.$inject = ["Character", "Episode"];

function MainController(Character, Episode){
  var self = this;

//Page Controls
  this.charIndex = false;
  this.showCharIndex = function(){

    this.charIndex = true;
    this.episodeIndex = false;
    this.newCharForm = false;
  }

  this.episodeIndex = false;
  this.showEpisodeIndex = function(){
    this.episodeIndex = true;
    this.charIndex = false;
    this.newCharForm = false;
    console.log(Episode.query());
  }

  this.newCharForm = false;
  this.showNewCharForm = function(){
    this.newCharForm = true;
    this.charIndex = false;
    this.episodeIndex = false;
  }

//SHOW CHARACTERS
  this.characterAll = Character.query();

  this.selectedCharacter = null;

  this.selectCharacter = function selectCharacter(character) {
    this.selectedCharacter = Character.get({ id: character._id });
  }

  this.deselectCharacter = function deselectCharacter() {
    this.selectedCharacter = null;
  }

// CREATE CHARACTER 
  this.newCharacter = {};
  this.addCharacter = function addCharacter() {
    Character
      .save(self.newCharacter, function(character) {
        self.characterAll.push(character);
        self.newCharacter = {};
        self.showCharIndex();
      });
  }

// UPDATE CHARACTER
  this.updateCharacter = function updateCharacter() {
    self.selectedCharacter.$update(function(updatedCharacter) {
      console.log(updatedCharacter);
      var index = self.characterAll.findIndex(function(character) {
        console.log(character)
        return character._id === updatedCharacter._id;
      });

      self.characterAll.splice(index, 1, updatedCharacter);
      self.selectedCharacter = null;
    });
  }

//DELETE CHARACTER
  this.deleteCharacter = function deleteCharacter(character) {
    character.$delete(function() {
      var index = self.characterAll.indexOf(character);

      self.characterAll.splice(index, 1);
      console.log(self.selectedCharacter);
      self.selectedCharacter = null;
    });
  }


//SHOW Episodes
  this.episodeAll = Episode.query();

  this.selectedEpisode = null;

  this.selectEpisode= function selectEpisode(episode) {
    this.selectedEpisode = Episode.get({ id: episode._id });
  }

  this.deselectEpisode = function deselectEpisode() {
    this.selectedEpisode = null;
  }

}