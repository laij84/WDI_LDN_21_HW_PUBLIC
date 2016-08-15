// require mongoose
var mongoose = require("mongoose");
// require the Client model
var Client = require("./client");

// create the animalSchema
var animalSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  type: String,
  breed: String,
  status: { type: String, enum: ['adopted', 'orphaned']},
  owner: { type: mongoose.Schema.ObjectId, ref: "Client" }
  });
// export the model
module.exports = mongoose.model("Animal", animalSchema);

