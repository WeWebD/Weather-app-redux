import { fetchCurrentWeather } from "../../helpers/utils";
import {
  SET_LOADING,
  SET_WEATHER,
  TOGGLE_UNIT,
  SET_UNITS,
} from "./MiddleWareActionCreators";

export const ToggleUnitsMiddleware = (store) => (next) => async (action) => {
  if (action.type === TOGGLE_UNIT) {
    store.dispatch({
      type: SET_LOADING,
      payload: { loading: true, navLoading: "units" },
    });

    const { geoData } = store.getState().weatherState;
    const unit = action.payload;

    const location = {
      name: geoData.name,
      longitude: geoData.longitude,
      latitude: geoData.latitude,
      timezone: geoData.timezone,
    };
    store.dispatch({ type: SET_UNITS, payload: unit });

    const weatherUpdatedUnits = await fetchCurrentWeather(location, unit);
    console.log(weatherUpdatedUnits);
    store.dispatch({
      type: SET_WEATHER,
      payload: weatherUpdatedUnits,
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
const toggleUnit = async (unit) => {
  setIsLoading({
    loading: true,
    navLoading: "units",
  });

  const location = {
    name: geoData.name,
    longitude: geoData.longitude,
    latitude: geoData.latitude,
    timezone: geoData.timezone,
  };

  setUnits(unit);

  const weatherUpdatedUnits = await fetchCurrentWeather(location, unit);

  setWeather(weatherUpdatedUnits);

  setIsLoading({
    loading: false,
    navLoading: "",
  });
};
*/
