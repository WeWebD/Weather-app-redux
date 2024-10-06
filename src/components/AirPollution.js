import React from "react";
//import useWeatherContext from "../hooks/useWeatherContext";
import { getCurrentTime } from "../helpers/utils";
import { useSelector } from "react-redux";
import AirPolutionTable from "../helpers/AirPolutionTable";


function AirPollution() {
  const {airQuality, weather} = useSelector(state => state.weatherState)
  //const {airQuality, AirPolutionTable, weather} = useWeatherContext();

  if ( !airQuality) {
    return null; // Return early if weather data is not available
  }

  const indexToExtractWeather = getCurrentTime(airQuality.hourly.time, weather);

  const getHourlyAQI =
    airQuality.hourly.european_aqi_pm2_5[indexToExtractWeather];


  return (
    <section className="w-full">
      <div className="bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur pb-4">
        <div>
          <h2 className="font-thin">Air Polution</h2>
          <hr className="opacity-50 mt-1"></hr>
        </div>
        <div className="mt-2">
          <p className="font-regular text-xl">
            {AirPolutionTable(getHourlyAQI)[0]}
          </p>
          <p className="text-xs mt-2">{AirPolutionTable(getHourlyAQI)[1]}</p>
        </div>
      </div>
    </section>
  );
}

export default AirPollution;
