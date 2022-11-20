var APIkey = "fe57efed754a6bd09a995c8f11d88d46";
var city = "London";

var geoCodeUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&appid=" + APIkey;

var queryURL = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + APIkey;


fetch(geoCodeUrl).then (data => console.log(data)) 