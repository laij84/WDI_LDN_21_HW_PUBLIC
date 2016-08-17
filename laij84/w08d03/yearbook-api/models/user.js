// require mongoose
var mongoose = require("mongoose");

// create a schema

var userSchema = new mongoose.Schema({
  name: String,
  twitter: String,
  github: String,
  image: String,
  bio: String,
  portfolio: String
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
