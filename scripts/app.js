const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector("icon img");

const updateUI = (data) => {
  // Retrieving information from the return of updateCity
  // const cityDetails = data.cityDetails;
  // const weatherDetails = data.weatherDetails;

  // Destructure Properties
  const { cityDetails, weatherDetails } = data;

  details.innerHTML = `
          <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weatherDetails.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
  `;
};
//Night Day Image and Icon
let timeSrc = weatherDetails.isDayTime ? "../img/day.svg" : "../img/night"

time.setAttribute("src", timeSrc);

const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute("src", iconSrc);

// Remove the d-none class if present
if (card.classList.contains("d-none")) {
  card.classList.remove("d-none");
}

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weatherDetails = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weatherDetails,
  };
};

cityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //Update the UI with the new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.error(err));
});
