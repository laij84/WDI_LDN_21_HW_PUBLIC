angular
  .module('HomeworkApp')
  .factory('Country', Country)
  .factory('CountryShow', CountryShow);

Country.$inject = ["$resource", "COUNTRIES_URL"];
function Country($resource, COUNTRIES_URL) {
  return $resource(COUNTRIES_URL , { id: '@alpha3Code' });
}

function CountryShow($resource, COUNTRIES_URL) {
  return $resource(COUNTRIES_URL +"/alpha/:id", { id: '@alpha3Code' });
}