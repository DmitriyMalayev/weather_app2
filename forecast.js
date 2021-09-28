const key = "yOF1xv9D2kjHH9AUQwrakvQ9lQASYt4A"; //forecast.js

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apiKey=${key}`;

  const response = await fetch(base + query, {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json", "API-Key": key },
  });
  const data = await response.json();

  return data[0];
};

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query, {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json", "API-Key": key },
  });
  const data = await response.json(); //line 26  expected end of input

  return data[0];
};

/*
 getCity("New York")
   .then((data) => {
     return getWeather(data.Key);
   })
   .then((data) => console.log(data))
   .catch((err) => console.error(err));

 When we use ? it represents a query parameter, When we use & we are specifying more than one query parameter.
 We use await because we want to wait until the Promise is resolved.
 In getWeather, id is not a query parameter.
*/
