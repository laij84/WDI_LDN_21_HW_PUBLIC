angular
  .module("lightsaberApp")
  .controller("MainController", MainController);


MainController.$inject = ["Character", "Episode"];

function MainController(Character, Episode){
  var self = this;

//Page Controls
  this.charIndex = true;
  this.showCharIndex = function(){
    this.charIndex = true;
    this.episodeIndex = false;
    this.newCharForm = false;
    this.newEpisodeForm = false;
  }

  this.episodeIndex = false;
  this.showEpisodeIndex = function(){
    this.episodeIndex = true;
    this.charIndex = false;
    this.newCharForm = false;
    this.newEpisodeForm = false;
  }

  this.newCharForm = false;
  this.showNewCharForm = function(){
    this.newCharForm = true;
    this.charIndex = false;
    this.episodeIndex = false;
    this.newEpisodeForm = false;
  }

  this.newEpisodeForm = false;
  this.showNewEpisodeForm = function(){
    this.newEpisodeForm = true;
    this.newCharForm = false;
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
    this.selectedCharacter.$delete(function() {
      var index = self.characterAll.findIndex(function(character) {
        return self.selectedCharacter._id === character._id;
      });

      self.characterAll.splice(index, 1);
      self.selectedCharacter = null;
    });
  }


//SHOW Episodes
  this.episodeAll = Episode.query();

  this.selectedEpisode = null;

  this.selectEpisode = function selectEpisode(episode) {
    console.log(episode);
    this.selectedEpisode = Episode.get({ id: episode._id });
  }

  this.deselectEpisode = function deselectEpisode() {
    this.selectedEpisode = null;
  }

// UPDATE EPISODE
  this.updateEpisode = function updateEpisode() {
    self.selectedEpisode.$update(function(updatedEpisode) {
      console.log(updatedEpisode);
      var index = self.episodeAll.findIndex(function(episode) {
        console.log(episode)
        return episode._id === updatedEpisode._id;
      });

      self.episodeAll.splice(index, 1, updatedEpisode);
      self.selectedEpisode = null;
    });
  }

//DELETE Episode
  this.deleteEpisode = function deleteEpisode() {
    this.selectedEpisode.$delete(function() {
      var index = self.episodeAll.findIndex(function(episode) {
        console.log(episode)
        return self.selectedEpisode._id === episode._id;
      });

      self.episodeAll.splice(index, 1);
      self.selectedEpisode = null;
    });
  }

// CREATE Episode 
  this.newEpisode = {};
  this.addEpisode = function addEpisode() {
    Episode
      .save(self.newEpisode, function(episode) {
        self.episodeAll.push(episode);
        self.newEpisode = {};
        self.showEpisodeIndex();
      });
  }

}