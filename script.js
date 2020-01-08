$(document).ready(function () {
    var APIkey = "a82307c33eaf83976520ebe58ff69ff3";
    var currentWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
    // var iconURl = iconAPI + weatherIcon + '.png';
    
    
    
    $('button').on('click', function (event) {
        event.preventDefault();
        var cityInput = $('#cityInput').val().trim();
        var currentWeatherURL = currentWeatherAPI + cityInput + '&appid=' + APIkey;
        var newLi =$('<li>').addClass('list-group-item');
        $('.list-group').prepend(newLi);
        newLi.text(cityInput);
        console.log(currentWeatherAPI);
        
        
        
        $.ajax({
            url: currentWeatherURL,
            method: 'GET'
        }).then(function (response) {
            var cityName = response.name;
            var cityTemp = response.main.temp;
            var cityHumidity = response.main.humidity;
            var cityWind = response.wind.speed;
            var weatherIcon = response.weather[0].icon;

        });
        
    });

    











});