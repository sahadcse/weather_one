
const apiKey = "04041c87406c0facc582db84baee1831";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const weatherIcon = document.querySelector(".weather-icon");
const weatherType = document.querySelector(".weather-type");

async function getWeatherData(city = "Magura") {
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);

  if (!response.ok) {
    document.querySelector(".error-message").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }
  // remove error message if city found
  document.querySelector(".error-message").style.display = "none";

  const data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "&deg;C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".weather-type").innerHTML = data.weather[0].main;

  const icon = data.weather[0].icon;
  weatherIcon.src = "http://openweathermap.org/img/wn/" + icon + ".png";

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", function () {
  getWeatherData(searchBar.value);
});
