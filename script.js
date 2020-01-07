$(document).ready(function () {


    $('button').on('click', function (event) {
        event.preventDefault();
        var cityInput = $('#cityInput').val().trim();
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + ',us&appid=a82307c33eaf83976520ebe58ff69ff3';
        $('.list-group').text(cityInput);

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            var cityName = response.name;
            var cityTemp = response.main.temp;
            var cityHumidity = response.main.humidity;
            var cityWind = response.wind.speed;
            $('#tempInput').text(cityName + cityTemp + cityHumidity + cityWind);


        });


    });














});