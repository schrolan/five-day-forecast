var weatherData = function () {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=fe57efed754a6bd09a995c8f11d88d46')
.then(response => response.json())
.then(data =>
}