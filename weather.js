const weather = document.querySelector(".js-weather");

const COORD_LS = "coord";
const API_KEY = "60d755273a9f61f1ba75b0f15443e4a5";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const place = json.name;

      weather.innerText = `temperature: ${temp}℃, in ${place}`;
    });
}

function handleGeoSuccess(position) {
  console.log(position);
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;

  const coordsObj = {
    longitude,
    latitude,
  };

  localStorage.setItem(COORD_LS, JSON.stringify(coordsObj));
  getWeather(latitude, longitude);
}

function handleGeoError() {
  alert("Can't access geolocation.");
}

function askForCoord() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoord() {
  const loadedCoord = localStorage.getItem(COORD_LS);

  if (loadedCoord === null) {
    askForCoord();
  } else {
    const parsedCoord = JSON.parse(loadedCoord);
    getWeather(parsedCoord.latitude, parsedCoord.longitude);
  }
}

function init() {
  loadCoord();
}

init();
