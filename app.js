const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  // Retrieving information from the return of updateCity
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  // Destructure Properties
  const { cityDets, weather } = data;

  details.innerHTML = `
          <h5 class="my-3">${cityDets.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
  `;

  const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "../img/day.svg";
  } else {
    timeSrc = "../img/night.svg";
  }

  time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};
// Night Day Image and Icon
// let timeSrc = weather.isDayTime ? "../img/day.svg" : "../img/night.svg";
// Remove the d-none class if present
const updateCity = async (city) => {
  const cityDets = await getCity(city);  //line 44
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets,
    weather,
  };
};

cityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //Update the UI with the new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
