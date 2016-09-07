var User = require('../models/user');
var request = require('request-promise');
var jwt = require('jsonwebtoken');
var secret = "ldfjdsfjefdlsfjdslfhsljv lguhg;4uclq4au gl4eaulruh";

function github(req, res) {
  request.post({
    url: "https://github.com/login/oauth/access_token",
    qs: {
      client_id: process.env.GITHUB_API_KEY,
      client_secret: process.env.GITHUB_API_SECRET,
      code: req.body.code
    },
    json: true
  })
  .then(function(response) {
    return request.get({
      url: "https://api.github.com/user",
      qs: { access_token: response.access_token },
      headers: { 'User-Agent': 'Request-Promise' }
    })
  })
  .then(function(profile) {
    var parsedprofile = JSON.parse(profile);
    console.log(parsedprofile.login);
    return User.findOne({ username: parsedprofile.login })
      .then(function(user) {
        console.log("match", user);
        if(user) {
          user.githubId = parsedprofile.id;
          user.avatar = parsedprofile.avatar_url;
        }
        else {
          console.log("no match", user);
          user = new User({
            username: parsedprofile.login,
            email: parsedprofile.email,
            githubId: parsedprofile.id,
            avatar: parsedprofile.avatar_url
          });
        }
        return user.save();
      })
  })
  .then(function(user) {
    var payload = {
      _id: user._id,
      avatar: user.avatar,
      username: user.username
    }

    var token = jwt.sign(payload, secret, { expiresIn: '24h' });

    res.status(200).json({ token: token });

  })
  .catch(function(err) {
    console.log(err);
  })
}

function facebook(req, res) {

    request.post({
      url: "https://graph.facebook.com/v2.5/oauth/access_token",
      qs: {
        client_id: process.env.FACEBOOK_API_KEY,
        client_secret: process.env.FACEBOOK_API_SECRET,
        code: req.body.code,
        redirect_uri: "http://localhost:8000/"
      },
      json: true
    })
    .then(function(access_token) {
      return request.get({
        url: "https://graph.facebook.com/v2.5/me?fields=id,email,name,picture",
        qs: access_token,
        json: true
      })
    })
    .then(function(profile) {
      return User.findOne({ email: profile.email })
        .then(function(user) {
          if(user) {
            user.facebookId = profile.id;
            user.avatar = profile.picture.data.url;
          }
          else {
            user = new User({
              username: profile.name,
              email: profile.email,
              facebookId: profile.id,
              avatar: profile.picture.data.url
            });
          }

          return user.save();
        })
    })
    .then(function(user) {
      var payload = {
        _id: user._id,
        avatar: user.avatar,
        username: user.username
      }

      var token = jwt.sign(payload, secret, { expiresIn: '24h' });

      res.status(200).json({ token: token });

    })
  }

module.exports = {
  github: github,
  facebook: facebook
}











