import React from "react";
import HourForecast from "./HourForecast";

import { getCurrentTime } from "../helpers/utils";
import { useSelector } from "react-redux";

function HourlyWeatherForecast() {
  const { weather } = useSelector(state => state.weatherState)


  if (!weather) {
    return null; // Return early if weather data is not available
  }

  const indexToStart24HourWeather = getCurrentTime(weather.hourly.time, weather);

  const hourlyCombinedData = weather.hourly.time
    .slice(indexToStart24HourWeather, indexToStart24HourWeather + 24)
    .map((time, index) => ({
      temperature:
        weather.hourly.temperature_2m[index + indexToStart24HourWeather],
      time,
      weather_code:
        weather.hourly.weathercode[index + indexToStart24HourWeather],
    }));

  return (
    <div className=" w-full bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur">
      <div className="">
        <h2 className="font-thin">Hourly Forecast</h2>
        <hr className="opacity-50 mt-1"></hr>
      </div>
      <ul className="flex overflow-x-scroll no-scrollbar">
        {hourlyCombinedData.map((hourlyData, index) => (
          <HourForecast data={hourlyData} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default HourlyWeatherForecast;
