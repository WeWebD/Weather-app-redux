import { store } from "../store/store";
import axios from "axios";

export const getHomeLocation = () => {
  return localStorage.getItem("defaultWeatherLocation");
};

export const twoDigitTimeConversion = (timeUTC) => {
  return timeUTC.toString().slice(-5).split(":")[0] + ":00";
};

export const getCurrentTime = (arr, weather) => {
  const currentTimeAtTown = weather.current_weather.time.split(":")[0] + ":00";

  return arr.findIndex((currTime) => currTime === currentTimeAtTown);
};

export const temperatureUnitDisplay = (units) => {
  return units === "imperial" ? "°F" : "°C";
};

export const fetchTimeZone = async (term) => {
  store.dispatch({ type: "weather/setError", payload: "" });

  const response = await axios
    .get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${term}&count=10&language=en&format=json`
    )
    .catch((error) => {
      store.dispatch({
        type: "weather/setError",
        payload: error.toJSON().message,
      });

      if (!response.data.results)
        return store.dispatch({
          type: "weather/setError",
          payload: "Town or City Not Found! Please try again.",
        });
    });

  const responseValid =
    response && response.status === 200 && response.data.results[0];

  if (responseValid) {
    store.dispatch({
      type: "weather/setGeoData",
      paylod: {
        name: response.data.results[0].name,
        longitude: response.data.results[0].longitude,
        latitude: response.data.results[0].latitude,
        timezone: response.data.results[0].timezone,
      },
    });
  } else {
    store.dispatch({
      type: "weather/setError",
      payload: "Something went wrong",
    });
  }

  const returnData = () => {
    try {
      if (responseValid) return response.data;
    } catch (error) {
      store.dispatch({
        type: "weather/setError",
        payload: `${error} Something went wrong.`,
      });
    }
  };
  return returnData();
};

export const fetchAirQuality = async (geoLocation) => {
  const lat = geoLocation.latitude;
  const long = geoLocation.longitude;
  const timezone = geoLocation.timezone;

  const response = await axios
    .get(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${long}&hourly=pm2_5,us_aqi_pm2_5,european_aqi_pm2_5&timezone=${timezone}`
    )
    .catch((error) => {
      store.dispatch({
        type: "weather/setError",
        payload: error.toJSON().message,
      });
    });
  if (response && response.status === 200) {
    return response.data;
  }
};

export const fetchCurrentWeather = async (geoLocation, units) => {
  const lat = geoLocation.latitude;
  const long = geoLocation.longitude;
  const timezone = geoLocation.timezone;
  store.dispatch({
    type: "weather/setError",
    payload: "",
  });

  const response = await axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode,apparent_temperature,dewpoint_2m,visibility,,surface_pressure,windspeed_80m,winddirection_80m,uv_index,is_day,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=${timezone}&forecast_days=7&current_weather=true&temperature_unit=${
        units === "imperial" ? "fahrenheit" : "celsius"
      }&windspeed_unit=mph`,
      { cache: false }
    )
    .catch((error) => {
      store.dispatch({
        type: "weather/setError",
        payload: error.toJSON().message,
      });
    });

  if (response && response.status === 200) {
    return response.data;
  }
};

export const saveLocation = (geoData, units) => {

  if (geoData.longitude && geoData.latitude) {
    const location = {
      name: geoData.name,
      latitude: geoData.latitude,
      longitude: geoData.longitude,
      timezone: geoData.timezone,
      unit: units,
    };
    localStorage.setItem("defaultWeatherLocation", JSON.stringify(location));
  }
};

