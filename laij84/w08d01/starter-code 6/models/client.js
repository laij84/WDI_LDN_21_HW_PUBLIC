// require mongoose
var mongoose = require("mongoose");

// create the clientSchema
var clientSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  gender: { type: String, enum: ['male', 'female']}
  });

// export the model
module.exports = mongoose.model("Client", clientSchema);