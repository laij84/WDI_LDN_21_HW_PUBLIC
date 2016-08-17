// create an express router
var router = require('express').Router();

//require our controllers

var usersController = require('../controllers/users');

//hook up our controller methods to URLs/Paths
router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .patch(usersController.update)
  .delete(usersController.delete);


//export the router
module.exports = router;
