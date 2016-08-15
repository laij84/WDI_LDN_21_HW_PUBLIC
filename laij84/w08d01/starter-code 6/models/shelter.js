// require mongoose
var mongoose = require("mongoose");

// require the Animal and Client models
var Animal = require("./animal");
var Client = require("./client");

// create the shelterSchema
var shelterSchema = new mongoose.Schema({
  name: String,
  animals: [Animal.schema],
  clients: [Client.schema]
});

// export the model
module.exports = mongoose.model("Shelter", shelterSchema);






