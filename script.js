var APIkey = "fe57efed754a6bd09a995c8f11d88d46";
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)