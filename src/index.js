let now = new Date();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let dayOfMonth = now.getDate();
let year = now.getFullYear();

let days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
];
let dayOfWeek = days[now.getDay()];
let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
let month = months[now.getMonth()];
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${dayOfWeek}, ${dayOfMonth}/${month}/${year}`;

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let newCity = document.querySelector("#city-name");
  newCity.innerHTML = `${searchInput.value}`;

  let apiKey = "5354b60afda2b7800186c06153932396";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=${unit}&appid=${apiKey}`;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#current-temperature");
    temperatureElement.innerHTML = `${temperature}°C`;
  }
  axios.get(apiUrl).then(showTemperature);
}

let button = document.querySelector("#submit-button");
button.addEventListener("click", search);
