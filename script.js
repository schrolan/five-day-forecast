//Variables that select from the DOM
var form = document.querySelector('form')
var input = document.getElementById('search-input')
var ul = document.querySelector('.list-group')

console.log(form, input, ul)
var apiKey = 'fe57efed754a6bd09a995c8f11d88d46'

function renderCity(city) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + apiKey)
    .then(function(response) {
        return response.json()
    })
    .then(function(city){
        for (var i = 0; i < city.length; i++){
        console.log(city[i].name)
        console.log(city[i].lon)
        console.log(city[i].lat)
        var lat = city[i].lat
        var lon = city[i].lon
        renderWeather()
    }
    function renderWeather() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial')
        .then(function(response) {
            return response.json()
        })
        .then(function(city){
            console.log(city.list[0].main.temp)
            var temp = city.list[0].main.temp
            
            
            
            for (var i = 0; i < 5; i++) {
                city.list[i].main.temp
                city.list[i].main.humidity
                city.list[i].wind.speed
                //console.log(city.list[i].main.temp)
                console.log(city.list[i].main.humidity)
                console.log(city.list[i].wind.speed)
                
                var temp = city.list[i].main.temp
                console.log(temp)
                var humidity = city.list[i].main.humidity
                var speed = city.list[i].wind.speed
                var todayTemp = city.list[0].main.temp
                var todayHumidity = city.list[0].main.humidity
                var todayWind = city.list[0].main.speed
                var cardDiv = document.createElement('div')
                var cardBody = document.createElement('div')
                var h2 = document.createElement('h2')
                var ol = document.createElement('ul')
                var li = document.createElement('li')
                var li2 = document.createElement('li')
                var li3 = document.createElement('li')

                li.innerHTML = temp
                li2.innerHTML = humidity
                li3.innerHTML = speed
                ol.append(li)
                ol.append(li2)
                ol.append(li3)
                

                cardDiv.classList.add('card')
                cardDiv.classList.add('mb-3')
                cardDiv.classList.add('col-md-4')
                cardBody.classList.add('card-body')
                h2.textContent = city.list[i].main.temp
                
                cardBody.append(ol)
                cardDiv.appendChild(cardBody)
                document.body.appendChild(cardDiv)

            }
            
        })
    }
})
}





function handleSubmit(event) {
    event.preventDefault()

    var city = input.value
    renderCity(city)
    //renderWeather(city)
}

form.addEventListener('submit', handleSubmit)