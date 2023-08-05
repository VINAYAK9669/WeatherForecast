//* Now will fecth the data from openWeather API

const apiKey = "10e3f06df2d448d1c9b9ded492291c94";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search__container input");
const searchBtn = document.querySelector(".search__container button");
const weatherIcon = document.querySelector(".weather__image");

const hiddenElement = document.querySelectorAll(".hide");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";

    hiddenElement.forEach((currentHidedElement) => {
      currentHidedElement.classList.add("hide");
      console.log(currentHidedElement);
    });
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city__name").innerHTML = data.name;
    document.querySelector(".temp__value").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity__value").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".WindSpeed__value").innerHTML =
      data.wind.speed + "km/hr";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main === "clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main === "drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main === "snow") {
      weatherIcon.src = "./images/snow.png";
    } else if (data.weather[0].main === "rain") {
      weatherIcon.src = "./images/rain.png";
    }

    console.log(hiddenElement);

    hiddenElement.forEach((currentHidedElement) => {
      currentHidedElement.classList.remove("hide");
      console.log(currentHidedElement);
    });
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
