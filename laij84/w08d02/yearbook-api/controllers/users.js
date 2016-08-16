var User = require('../models/user');

//INDEX
function usersIndex(req, res) {
  User.find(function(err, users){
    if(err) return res.status(500).json(err);
    return res.status(200).json(users);
  });
}

//CREATE
function usersCreate(req,res) {
  User.create(req.body, function(
    err, user) {
    if(err) return res.status(500).json(err);
    return res.status(201).json(user);
  });
}

//SHOW
function usersShow(req, res) {
  User.findById(req.params.id, function(err, user){
    if(err) return res.status(500).json(err);
    return res.status(200).json(user);
  });
}

//UPDATE
function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err,user){
    if(err) return res.status(500).json(err);
    return res.status(200).json(user);
  });
}

//DELETE
function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user){
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
}


