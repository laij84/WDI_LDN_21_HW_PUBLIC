var router = require('express').Router();
var homeworkController = require('../controller/homeworkController');

//root path
  router.get("/", function(req, res) {
   res.redirect("/home");
  });


//Index
router.route("/home")
  .get(homeworkController.index)
  .post(homeworkController.create);

//New
  router.get("/home/new", homeworkController.new );

//About
  router.get("/home/about", homeworkController.about );

//SHOW
router.route("/home/:id")
  .get(homeworkController.show)
  .put(homeworkController.update)
  .delete(homeworkController.delete);

//EDIT
router.get('/home/:id/edit', homeworkController.edit);

module.exports = router;

