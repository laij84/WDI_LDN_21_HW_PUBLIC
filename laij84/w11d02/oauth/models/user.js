var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  avatar: String,
  email: String,
  githubId: Number,
  facebookId: Number
});

module.exports = mongoose.model('User', userSchema);