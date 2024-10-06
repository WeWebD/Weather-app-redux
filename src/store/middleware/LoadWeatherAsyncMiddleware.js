import { fetchCurrentWeather, fetchAirQuality } from "../../helpers/utils";
import {
  LOAD_WEATHER,
  SET_LOADING,
  SET_AIR_QUALITY,
  LOAD_WEATHER_ASYNC,
  SET_WEATHER,
} from "./MiddleWareActionCreators";

export const LoadWeatherAsyncMiddleware =
  (store) => (next) => async (action) => {
    if (action.type === LOAD_WEATHER_ASYNC) {
      store.dispatch({
        type: SET_LOADING,
        payload: { loading: true, navLoading: "home" },
      });

      let weatherForSearchedPlace, airQualityForSearchedPlace;
      const searchData = action.payload;

      if (searchData) {
        weatherForSearchedPlace = await fetchCurrentWeather(searchData);

        airQualityForSearchedPlace = await fetchAirQuality(searchData);
      } else {
        return setTimeout(() => {
          store.dispatch({ type: LOAD_WEATHER });
        }, 1000);
      }

      console.log(weatherForSearchedPlace);
      store.dispatch({
        type: SET_AIR_QUALITY,
        payload: airQualityForSearchedPlace,
      });
      store.dispatch({
        type: SET_WEATHER,
        payload: weatherForSearchedPlace,
      });

      store.dispatch({
        type: SET_LOADING,
        payload: { loading: false, navLoading: "" },
      });
    }
    const result = next(action);
    return result;
  };

/*
const searchAndLoadWeatherAsync = async (searchData) => {
  setIsLoading({
    loading: true,
    navLoading: "",
  });

  let weatherForSearchedPlace, airQualityForSearchedPlace;

  if (searchData) {
    weatherForSearchedPlace = await fetchCurrentWeather(searchData);

    airQualityForSearchedPlace = await fetchAirQuality(searchData);
  } else {
    return setTimeout(() => {
      loadWeather();
    }, 1000);
  }

  setWeather(weatherForSearchedPlace);
  setAirQuality(airQualityForSearchedPlace);

  setIsLoading({
    loading: false,
    navLoading: "",
  });
};

*/
