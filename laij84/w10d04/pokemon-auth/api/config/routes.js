var router = require('express').Router();
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;

var pokemonController = require('../controllers/pokemon');
var authController = require('../controllers/authentications');

// middleware to check for token
function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized" });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, payload) {
    if(err || !payload) return res.status(401).json({ message: "Unauthorized" });

    req.user = payload;
    next();
  });
}

router.route('/pokemon')
  .all(secureRoute)
  .get(pokemonController.index)
  .post(pokemonController.create);

router.route('/pokemon/:id')
  .all(secureRoute)
  .get(pokemonController.show)
  .put(pokemonController.update)
  .patch(pokemonController.update)
  .delete(pokemonController.delete);

router.post('/register', authController.register);
router.post('/login', authController.login);

// export the router
module.exports = router;