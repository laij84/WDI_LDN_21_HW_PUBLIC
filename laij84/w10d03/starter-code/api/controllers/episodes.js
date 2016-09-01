var Episode = require('../models/Episode');

// GET
function getAll(request, response) {
  Episode.find(function(error, episodes) {
    if(error) response.status(404).send(error);

    response.status(200).send(episodes);
  }).select('-__v');
}

// POST
function createEpisode(request, response) {
  var episode = new Episode(request.body);

  episode.save(function(error) {
    if(error) response.status(500).send(error);

    response.status(201).send(episode);
  });
}

// GET
function getEpisode(request, response) {
  var id = request.params.id;

  Episode.findById({_id: id}, function(error, episode) {
    if(error) response.status(404).send(error);

    response.status(200).send(episode);
  }).select('-__v');
}

function updateEpisode(request, response) {
  var id = request.params.id;

  Episode.findById({_id: id}, function(error, episode) {
    if(error) response.status(404).send(error);

    if(request.body.name) episode.name = request.body.name;
    if(request.body.release_date) episode.release_date = request.body.release_date;
    if(request.body.director) episode.director = request.body.director;
    if(request.body.studio) episode.studio = request.body.studio;

    episode.save(function(error) {
      if(error) response.status(500).send(error);

      response.status(200).send(episode);
    });
  }).select('-__v');
}

function removeEpisode(request, response) {
  var id = request.params.id;

  Episode.remove({_id: id}, function(error) {
    if(error) response.status(404).send(error);

    response.status(204).send();
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createEpisode: createEpisode,
  getEpisode: getEpisode,
  updateEpisode: updateEpisode,
  removeEpisode: removeEpisode
}
