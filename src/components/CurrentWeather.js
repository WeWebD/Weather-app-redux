import React from "react";
//import useWeatherContext from "../hooks/useWeatherContext";
import { getCurrentTime, temperatureUnitDisplay } from "../helpers/utils";
import { useSelector } from "react-redux";
import { wmoCodes } from "../helpers/helperCodes";

const CurrentWeather = () => {
  const { weather, units } = useSelector((state) => state.weatherState);
  //const { weather, units, wmoCodes } = useWeatherContext();

  if (!weather) {
    return null; // Return early if weather data is not available
  }

  const indexToExtractWeather = getCurrentTime(weather.hourly.time, weather);

  const getHourlyTemperature = Math.round(
    weather.hourly.temperature_2m[indexToExtractWeather]
  );
  const maxTemperature = Math.round(weather.daily.temperature_2m_max[0]);
  const minTemperature = Math.round(weather.daily.temperature_2m_min[0]);
  const currentWeatherCode = weather.hourly.weathercode[indexToExtractWeather];
  const dayOrNightIcon = weather.hourly.is_day[indexToExtractWeather]
    ? "iconD"
    : "iconN";

  const weatherDescription = wmoCodes(currentWeatherCode)?.description;
  const weatherIcon = wmoCodes(currentWeatherCode, 3)?.[dayOrNightIcon];

  return (
    <header className="flex sticky justify-center mt-5">
      <div className="flex flex-col text-center">
        <h1 className="text-7xl font-thin">
          {isNaN(getHourlyTemperature)
            ? "--"
            : `${getHourlyTemperature}${temperatureUnitDisplay(units)}`}
        </h1>
        <p className="font-thin">{`Max ${maxTemperature}${temperatureUnitDisplay(
          units
        )} - Min ${minTemperature}${temperatureUnitDisplay(units)}`}</p>
      </div>
      <div className="flex flex-col justify-center ml-5">
        <div className="">{weatherIcon}</div>
        <p className="flex justify-center font-regular mt-2">
          {weatherDescription}
        </p>
      </div>
    </header>
  );
};

export default CurrentWeather;
