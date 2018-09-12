export const fetchLocationId = async city => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`,
  );
  const locations = await response.json();
  return locations[0].woeid;
};

export const fetchWeather = async woeid => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[0];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};

// https://openweathermap.org/appid#get https://openweathermap.org/current
/* Temperature is available in Fahrenheit, Celsius and Kelvin units.
For temperature in Fahrenheit use units=imperial
For temperature in Celsius use units=metric
Temperature in Kelvin is used by default, no need to use units parameter in API call */
const WEATHER_API_KEY = "789af9673b393eb97f2acdea022f2005";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";

function cityUrl(city) {
  return `${API_URL}q=${city}&units=metric&APPID=${WEATHER_API_KEY}`;
}

export const fetchWeatherByCity = async city => {
  const response = await fetch(cityUrl(city));
  const {name, weather, main} = await response.json();
  const {main : weather_group} = weather[0];
  const {temp} = main;

  return {location: name, weather: weather_group, temperature: temp};
};
