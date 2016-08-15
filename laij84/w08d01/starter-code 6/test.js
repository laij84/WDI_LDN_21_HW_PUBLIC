var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal-shelter');

function AnimalShelterTest() {
  this.Shelter = require('./models/shelter');
  this.Client = require('./models/client');
  this.Animal = require('./models/animal');

  this.Shelter.collection.drop();
  this.Animal.collection.drop();
  this.Client.collection.drop();
  
  this.params = {
    animal: ['name', 'dob', 'type', 'breed', 'status', 'owner','_id', '__v'],
    client: ['name', 'dob', 'gender','_id', '__v'],
    shelter: ['name', 'clients', 'animals','_id', '__v']
  }
};

AnimalShelterTest.prototype.initialize = function() {
  this.checkForSchemas();
}

AnimalShelterTest.prototype.checkForSchemas = function() {
  if (this.Animal.modelName !== 'Animal') {
    this.leave("Your animal schema is not correctly defined!");
  }
  if (this.Client.modelName !== 'Client') {
    this.leave("Your client schema is not correctly defined!");
  }
  if (this.Shelter.modelName !== 'Shelter') {
    this.leave("Your shelter schema is not correctly defined!");
  }
  this.checkForParameters();
};

AnimalShelterTest.prototype.checkForParameters = function() { 
  var animalKeys = Object.keys(this.Animal.schema.paths);
  var animalParams = this.params.animal;
  var clientKeys = Object.keys(this.Client.schema.paths);
  var clientParams = this.params.client;
  var shelterKeys = Object.keys(this.Shelter.schema.paths);
  var shelterParams = this.params.shelter;
  if(animalKeys.sort().join(',') !== animalParams.sort().join(',')){
    return this.leave("Your animal does not contain the correct information! It should contain " + animalParams.splice(2).join(", "));
  }
  if(clientKeys.sort().join(',') !== clientParams.sort().join(',')){
    return this.leave("Your client does not contain the correct information! It should contain " + clientParams.splice(2).join(", "));
  }
  if(shelterKeys.sort().join(',') !== shelterParams.sort().join(',')){
    return this.leave("Your client does not contain the correct information! It should contain " + shelterParams.splice(2).join(", "));
  }
  this.checkForRelationships();
}

AnimalShelterTest.prototype.checkForRelationships = function() {
  var animalOwner = this.Animal.schema.paths.owner.options;
  var shelterClients = this.Shelter.schema.paths.clients.instance;
  var shelterAnimals = this.Shelter.schema.paths.animals.instance;
  var conditions = [(!animalOwner), (animalOwner.ref !== "Client"),(!shelterClients),(shelterClients !== "Array"),(!shelterAnimals),(shelterAnimals !== "Array")]

  for (var i = 0; i < conditions.length; i++) {
    if (conditions[i]) return this.leave("Your animal owner referenced relationship is not correctly set up!");
  }
  this.checkStatuses();
}

AnimalShelterTest.prototype.checkStatuses = function() {
  var animalEnum = this.Animal.schema.paths.status.validators[0].enumValues;
  var clientEnum = this.Client.schema.paths.gender.validators[0].enumValues;
  if (!animalEnum || animalEnum.toString() !== ("adopted,orphaned" || "orphaned,adopted")) {
    return this.leave("Your animal status options are not correctly validated! Google for the 'enum' value in mongoose schemas.");
  }
  if (!clientEnum || clientEnum.toString() !== ("male,female" || "female,male")) {
    return this.leave("Your client status options are not correctly validated! Google for the 'enum' value in mongoose schemas.");
  }
  return this.leave("Your schemas are correctly set up! Now go answer some questions.");
};

AnimalShelterTest.prototype.leave = function(message) {
  console.log(message);
  return process.exit();
}

var test = new AnimalShelterTest();
test.initialize();
