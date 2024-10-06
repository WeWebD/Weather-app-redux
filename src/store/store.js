import { configureStore } from "@reduxjs/toolkit";
import {
  setLoading,
  setUnits,
  setWeather,
  setError,
  setAirQuality,
  setGeoData,
  setSearchBar,
  weatherReducer,
} from "../components/weatherSlice";
import { ToggleUnitsMiddleware } from "./middleware/ToggleUnitsMiddleware";
import { GeolocationMiddleware } from "./middleware/GeoLocationMiddleware";
import { WeatherMiddleware } from "./middleware/WeatherMiddleware";
import { LoadWeatherAsyncMiddleware } from "./middleware/LoadWeatherAsyncMiddleware";

export const store = configureStore({
  reducer: {
    weatherState: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      WeatherMiddleware,
      ToggleUnitsMiddleware,
      GeolocationMiddleware,
      LoadWeatherAsyncMiddleware
    ),
});

export {
  setLoading,
  setUnits,
  setWeather,
  setSearchBar,
  setAirQuality,
  setGeoData,
  setError,
};
