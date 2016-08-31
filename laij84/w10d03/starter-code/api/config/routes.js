var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var charactersController = require('../controllers/characters');
var episodesController = require('../controllers/episodes');

router.route('/characters')
  .get(charactersController.getAll)
  .post(charactersController.createCharacter);


router.route('/characters/:id')
  .get(charactersController.getCharacter)
  .put(charactersController.updateCharacter)
  .delete(charactersController.removeCharacter);

router.route('/episodes')
  .get(episodesController.getAll)
  .post(episodesController.createEpisode);

router.route('/episodes/:id')
  .get(episodesController.getEpisode)
  .put(episodesController.updateEpisode)
  .delete(episodesController.removeEpisode);

module.exports = router;