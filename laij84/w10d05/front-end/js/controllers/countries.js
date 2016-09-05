angular
  .module("HomeworkApp")
  .controller("CountriesController", CountriesController);

CountriesController.$inject = ["Country", "CountryShow"];

function CountriesController(Country, CountryShow) {
  var self = this;
  
  this.all = Country.query();

  this.selectedCountry = null;

  this.selectCountry = function selectCountry(country) {
    this.selectedCountry = CountryShow.get({ id: country.alpha3Code });
    console.log(this.selectedCountry);
  }
}

