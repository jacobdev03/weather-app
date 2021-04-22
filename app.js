const form = document.querySelector(".search");
const input = document.querySelector(".input");
let cityName = document.querySelector(".city-name");
let country = document.querySelector(".country");
let temp = document.querySelector(".temp");
let feels = document.querySelector(".feels");
let pressure = document.querySelector(".pressure");
let wind = document.querySelector(".wind");
let sunrise = document.querySelector(".sunrise");
let sunset = document.querySelector(".sunset");
let city = "Lomza";

getWeather();

form.addEventListener("submit", e => {
  city = input.value;
  console.log(city);
  getWeather();
  form.reset();
  e.preventDefault();
});

async function getWeather() {
  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=398ec10b90a9b21f54be1e90fcf719fa`
    );
    const respData = await resp.json();
    console.log(respData);
    cityName.textContent = respData.name + `, ${respData.sys.country}`;
    temp.textContent = `Temperature ${Math.floor(
      respData.main.temp - 273.15
    )} ℃`;
    feels.textContent = `Feels like ${Math.floor(
      respData.main.feels_like - 273.15
    )} ℃`;
    pressure.textContent = `Pressure: ${respData.main.pressure}hPa`;
    wind.textContent = `Wind speed: ${Math.floor(
      respData.wind.speed * 3.6
    )} km/h`;
    sunrise.textContent = `Sunrise: ${new Date(
      respData.sys.sunrise * 1000
    ).toLocaleTimeString()}`;
    sunset.textContent = `Sunset: ${new Date(
      respData.sys.sunset * 1000
    ).toLocaleTimeString()}`;
  } catch (error) {
    console.log(error);
  }
}
