// get your own 'API_KEY' from 'https://home.openweathermap.org/'
const WEATHER_API_KEY = "5eedfea57abcb50264a373e71cd7b178";
const inputEl = document.querySelector("#input");
const searchBtn = document.querySelector("#search-btn");
const weatherDataEl = document.querySelector(".weather-data-container");
const weatherError = document.querySelector(".text-error");

// fetch for the weather data and render it
const fetchData = () => {
    const input = inputEl.value;
    const Weather_Url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${WEATHER_API_KEY}&units=metric`
    fetch(Weather_Url) 
    .then((response) => response.json())
    .then((data) => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const weather_information_data = document.createElement("div");
      weather_information_data.innerHTML = `
        <div class="city-data">
        <h2 class="city-name"">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <div>
          <img class="city-icon" src="${icon}" alt="${ weather[0]["description"]}">
        </div>
        ${ weather[0]["description"]}
        </div>
        </div>
      `;
      weatherDataEl.appendChild(weather_information_data);
      setTimeout(() => {
        weatherDataEl.removeChild(weather_information_data);
      }, 2000)
    })
    .catch(() => {
        weatherError.textContent = "Please enter a valid Country / City name"
    })
}
searchBtn.addEventListener("click", () => { 
    fetchData();

    // after the data has been shown, we clear the input field
    inputEl.value = ""
});