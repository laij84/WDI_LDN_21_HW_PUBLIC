dbURIs = {
  test: "mongodb://localhost/pokeapi-test",
  development: "mongodb://localhost/pokeapi",
  production: process.env.MONGOLAB_URI || "mongodb://localhost/pokeapi"
}

module.exports = function(env) {
  return dbURIs[env];
}