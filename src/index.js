function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "o79b0b278ad643abf38d0abtfa4f526c";
  let apiLink = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiLink).then(displayCity);
}

function displayCity(response) {
  console.log(response.data.temperature.current);
  let weather = Math.round(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;

  let weatherData = document.querySelector(`#weather`);
  weatherData.innerHTML = `${weather}°F`;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let humidityData = document.querySelector(`#humidity-data`);
  humidityData.innerHTML = `${humidity}%`;

  let windData = document.querySelector(`#wind-data`);
  windData.innerHTML = `${wind}km/h`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
