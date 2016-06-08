$(document).ready(function(){
  $('#weather-form').submit(addWeather);
});

function addWeather(target) {
  target.preventDefault();
  var searchQuery = $('#searchbox').val();
  getWeather(searchQuery);
  $('#searchbox').val('');
}

function getWeather(searchQuery) {
  console.log(searchQuery);
  // var URL = "https://www.metaweather.com/api/location/search/?query=" + searchQuery;
  var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  var appid = "9c8ceef1b9aaa6c65334ad7114b85c53";
  var fullURL = baseURL + searchQuery + "&appid=" + appid
  $.ajax({
    url: fullURL,
    success: function(data){
      placeResult(data);
    }
  });
}
var results;
function placeResult(data) {
  results = data;
  cityName = data.name;
  temp = toFahrenheit(data.main.temp);
  displayTemp = Math.floor(temp * 100) / 100
  $('#weather-here').html("<h2>" + cityName + "</h2><h3>" + displayTemp +
   " Degrees Fahrenheit</h3>");
}

function toFahrenheit(temp) {
  return ((temp - 273)*1.8000 + 32.00);
}
