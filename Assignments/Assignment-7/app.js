"use strict";

const api =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=1baca795998c21082287897ee8bdd25b";

const lat =
  "https://api.openweathermap.org/data/2.5/weather?lat=27.2046&lon=77.4977&appid=1baca795998c21082287897ee8bdd25b";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const minMax = document.querySelector("#min-max");
const wind = document.querySelector("#wind-speed");
const type = document.querySelector("#type");
const Date = document.querySelector("#date");
const lat = 180;
const long = 230;

