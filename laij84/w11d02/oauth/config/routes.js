var router = require('express').Router();
var oauthController = require('../controllers/oauth');

router.post('/oauth/github', oauthController.github);
router.post('/oauth/facebook', oauthController.facebook);


module.exports = router;