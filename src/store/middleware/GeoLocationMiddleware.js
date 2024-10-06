import axios from "axios";
import { fetchTimeZone, fetchCurrentWeather } from "../../helpers/utils";
import {
  GET_GEO_WEATHER,
  SET_LOADING,
  SET_ERROR,
  SET_GEODATA,
  SET_WEATHER,
} from "./MiddleWareActionCreators";

const API_KEY = process.env.REACT_APP_API_KEY;

export const GeolocationMiddleware = (store) => (next) => async (action) => {
  if (action.type === GET_GEO_WEATHER) {
    console.log("geoweather");
    store.dispatch({
      type: SET_LOADING,
      payload: { loading: true, navLoading: "current" },
    });

    console.log(store.getState().weatherState.isLoading);
    //Helper Function
    const geoError = (errObj) => {
      const errMsg = errObj ? errObj.message : "Geolocation not supported";
      store.dispatch({ type: SET_ERROR, payload: errMsg });
    };

    const geoSuccess = async (position) => {
      await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=5&appid=${API_KEY}
        `
        )
        .then((res) => {
          return fetchTimeZone(res.data[0].name);
        })
        .then(async (res) => {
          const latLongGeoData = {
            name: res.results[0].name,
            longitude: res.results[0].longitude,
            latitude: res.results[0].latitude,
            timezone: res.results[0].timezone,
          };

          if (
            latLongGeoData.name === store.getState().weatherState.geoData?.name
          )
            return;

          store.dispatch({
            type: SET_GEODATA,
            payload: latLongGeoData,
          });

          const geoWeather = await fetchCurrentWeather(latLongGeoData);
          store.dispatch({ type: SET_WEATHER, payload: geoWeather });
        });

      if (!navigator.geolocation) return geoError();

      store.dispatch({
        type: SET_LOADING,
        payload: { loading: false, navLoading: "" },
      });
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }
  const result = next(action);
  return result;
};
