"use strict";

// const api =
//   "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=1baca795998c21082287897ee8bdd25b";

// const latlong =
//   "https://api.openweathermap.org/data/2.5/weather?lat=27.2046&lon=77.4977&units=metric&appid=1baca795998c21082287897ee8bdd25b";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const city = document.querySelector("#city");
const temp1 = document.querySelector("#temp");
const minMax = document.querySelector("#min-max");
const wind = document.querySelector("#wind-speed");
const type = document.querySelector("#type");
const date = document.querySelector("#date");
const body = document.querySelector("body");
let lat = 180;
let long = 230;

function updateUI(data) {
  const weatherType = data.weather[0].main;
  const temp = data.main.temp;
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  const windSpeed = data.wind.speed;
  let currentCity = data.name;
  let today = new Date();
  console.log(today.getDate());
  console.log(today.getFullYear());
  let currentDate = `${today.getDate()}-${getMonthName(
    today.getMonth()
  )}-${today.getFullYear()}`;
  // console.log(currentDate);
  if (currentCity === "") currentCity = "India";
  // console.log(currentCity);
  // console.log(weatherType, temp, minTemp, maxTemp, windSpeed);
  city.textContent = currentCity;
  date.textContent = currentDate;
  // temp1.textContent = toString(temp) + "\xB0" + C;
  let s1 = temp + "\xB0" + "C";
  temp1.textContent = s1;
  minMax.textContent = `${
    minTemp - 2
  }${"\xB0"}C(MIN) ${maxTemp}${"\xB0"}C(MAX)`;
  wind.textContent = windSpeed + "Kmh";
  type.textContent = weatherType;
  setBackgroundPic(weatherType);
}

function getMonthName(m) {
  if (m === 0) return "Jan";
  else if (m === 1) return "Feb";
  else if (m === 2) return "March";
  else if (m === 3) return "April";
  else if (m === 4) return "May";
  else if (m === 5) return "June";
  else if (m === 6) return "July";
  else if (m === 7) return "August";
  else if (m === 8) return "Sept";
  else if (m === 9) return "Oct";
  else if (m === 10) return "Nov";
  else return "Dec";
}

function setBackgroundPic(weatherType) {
  if (weatherType === "Mist") {
    body.style.backgroundImage = "url('./images/mist.jpg')";
  } else if (weatherType === "Thunderstorm") {
    body.style.backgroundImage = "url('./images/thunderstorm.jpg')";
  } else if (weatherType === "Drizzle") {
    body.style.backgroundImage = "url('./images/drizzle.jpg')";
  } else if (weatherType === "Rain") {
    body.style.backgroundImage = "url('./images/rain.jpg')";
  } else if (weatherType === "Snow") {
    body.style.backgroundImage = "url('./images/snow.jpg')";
  } else if (weatherType === "Smoke") {
    body.style.backgroundImage = "url('./images/smoke.jpg')";
  } else if (weatherType === "Haze") {
    body.style.backgroundImage = "url('./images/haze.jpg')";
  } else if (weatherType === "Dust") {
    body.style.backgroundImage = "url('./images/dust.jpg')";
  } else if (weatherType === "Fog") {
    body.style.backgroundImage = "url('./images/fog.jpg')";
  } else if (weatherType === "Sand") {
    body.style.backgroundImage = "url('./images/sand.jpg')";
  } else if (weatherType === "Clear") {
    body.style.backgroundImage = "url('./images/clear.jpg')";
  } else if (weatherType === "Clouds") {
    body.style.backgroundImage = "url('./images/clouds.jpg')";
  } else {
    body.style.backgroundImage = "url('./images/clouds.jpg')";
  }
}
// updating using latitude and longitude;
function updateDataUsingLatLong(lat, long) {
  // console.log(lat, long, "2");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${long}&lon=${lat}&units=metric&appid=1baca795998c21082287897ee8bdd25b`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
      console.log("something went wrong");
    });
}

function initGeolocation() {
  if (navigator.geolocation) {
    // Call getCurrentPosition with success and failure callbacks
    navigator.geolocation.getCurrentPosition(success, fail);
  } else {
    alert("Sorry, your browser does not support geolocation services.");
  }
}

function success(position) {
  lat = position.coords.longitude;
  long = position.coords.latitude;
  // console.log(lat, long, "1");
  updateDataUsingLatLong(lat, long);
}

function fail() {
  // Could not obtain location
  alert("Please enable Location");
}
initGeolocation();

btn.addEventListener("click", (e) => {
  const cityName = input.value;
  if (cityName === "") {
    alert("Please enter city name");
    return;
  } else {
    input.value = "";
    doNetworkingUsingCityName(cityName);
  }
});

function doNetworkingUsingCityName(cityName) {
  console.log(cityName);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1baca795998c21082287897ee8bdd25b`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
      console.log("something went wrong");
    });
}
