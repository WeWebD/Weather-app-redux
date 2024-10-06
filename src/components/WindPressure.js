import React from "react";
import PressureChart from "../helpers/PressureChart";
import WindComposs from "../helpers/WindCompass";
import { getCurrentTime } from "../helpers/utils";
import { useSelector } from "react-redux";

function WindPressure() {
  const { weather } = useSelector((state) => state.weatherState);

  if (!weather) {
    return null; // Return early if weather data is not available
  }

  const indexToExtractWindSpeed = getCurrentTime(weather.hourly.time, weather);

  const surface_pressure =
    weather.hourly.surface_pressure[indexToExtractWindSpeed];

  const pressurePercntageforChart = (surface_pressure * 100) / 1650;

  const dataForPressureChart = {
    data1: (pressurePercntageforChart * 3147) / 100,
    data2: 3147 - (pressurePercntageforChart * 3147) / 100,
  };

  const windDirection =
    weather.hourly.winddirection_80m[indexToExtractWindSpeed];
  const windSpeed = weather.hourly.windspeed_80m[indexToExtractWindSpeed];

  return (
    <section className='grid grid-cols-2 gap-5'>
      <div className='aspect-square bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur pb-4'>
        <div>
          <h2 className='font-thin'>Wind</h2>
          <hr className='opacity-50 mt-1'></hr>
        </div>
        <div className='flex flex-col text-center'>
          <WindComposs direction={windDirection} />
          <p className='text-xs '>{`${windSpeed} MPH `}</p>
        </div>
      </div>
      <div className='aspect-square bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur pb-4'>
        <div>
          <h2 className='font-thin'>Pressure</h2>
          <hr className='opacity-50 mt-1'></hr>
        </div>
        <div className='flex flex-col text-center'>
          <PressureChart chartData={dataForPressureChart} />
          <p className='text-xs '>{surface_pressure} hPA</p>
        </div>
      </div>
    </section>
  );
}

export default WindPressure;
