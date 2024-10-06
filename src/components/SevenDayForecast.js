import React from "react";
import DailyForecast from "./DailyForecast";

import { useSelector } from "react-redux";

function SevenDayForecast() {
  const { weather } = useSelector((state) => state.weatherState);

  if (!weather) {
    return null; // Return early if weather data is not available
  }

  const selectedDailyDataToDisplay = weather.daily.time.map((time, index) => ({
    time,
    weathercode: weather.daily.weathercode[index],
    tempMin: weather.daily.temperature_2m_min[index],
    tempMax: weather.daily.temperature_2m_max[index],
    windSpeed: weather.daily.windspeed_10m_max[index],
  }));

  return (
    <div className='w-full bg-gray-300/40 mt-5 rounded-xl px-3 py-3 backdrop-blur'>
      <h2 className='font-thin'>7 Day Forecast</h2>
      <hr className='opacity-50 mt-1'></hr>
      <ul>
        {selectedDailyDataToDisplay.map((data, index) => (
          <DailyForecast data={data} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default SevenDayForecast;
