import {
  getHomeLocation,
  fetchCurrentWeather,
  fetchAirQuality,
} from "../../helpers/utils";
import {
  LOAD_WEATHER,
  SET_LOADING,
  SET_ERROR,
  SET_GEODATA,
  SET_WEATHER,
  SET_UNITS,
  SET_AIR_QUALITY,
} from "./MiddleWareActionCreators";

export const WeatherMiddleware = (store) => (next) => async (action) => {
  if (action.type === LOAD_WEATHER) {
    let location;

    store.dispatch({
      type: SET_LOADING,
      payload: { loading: true, navLoading: "home" },
    });

    const savedLocation = JSON.parse(getHomeLocation());

    if (savedLocation) {
      location = {
        name: savedLocation.name,
        longitude: savedLocation.longitude,
        latitude: savedLocation.latitude,
        timezone: savedLocation.timezone,
      };

      store.dispatch({ type: SET_GEODATA, payload: location });
      store.dispatch({ type: SET_UNITS, payload: savedLocation.unit });

      const currWeather = await fetchCurrentWeather(location);
      const currAirIndex = await fetchAirQuality(location);

      store.dispatch({ type: SET_WEATHER, payload: currWeather });
      store.dispatch({ type: SET_AIR_QUALITY, payload: currAirIndex });
    }

    if (!savedLocation)
      return store.dispatch({
        type: SET_ERROR,
        payload: "Home Location not set.",
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
  const fetchCurrentWeather = useCallback(async (geoLocation, units) => {
    const lat = geoLocation.latitude;
    const long = geoLocation.longitude;
    const timezone = geoLocation.timezone;

    setError("");

    const response = await axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode,apparent_temperature,dewpoint_2m,visibility,,surface_pressure,windspeed_80m,winddirection_80m,uv_index,is_day,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=${timezone}&forecast_days=7&current_weather=true&temperature_unit=${
          units === "imperial" ? "fahrenheit" : "celsius"
        }&windspeed_unit=mph`,
        { cache: false }
      )
      .catch((error) => {
        setError(error.toJSON().message);
      });

    if (response && response.status === 200) {
      return response.data;
    }
  }, []);


*/
