//Variables that select from the DOM
var form = document.querySelector('form')
var input = document.getElementById('search-input')
var ul = document.querySelector('.list-group')

console.log(form, input, ul)
var apiKey = 'fe57efed754a6bd09a995c8f11d88d46'

function renderCity(city) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=' + apiKey)
    .then(function(response) {
        return response.json()
    })
    .then(function(name){
        console.log(name)
    })
}



function renderWeather(city) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',{state code},{country code}&limit={limit}&appid=' + apiKey)
}



function handleSubmit(event) {
    event.preventDefault()

    var city = input.value
    renderCity(city)
    renderWeather(city)
}

form.addEventListener('submit', handleSubmit)