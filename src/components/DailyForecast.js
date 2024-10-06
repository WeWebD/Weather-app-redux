import React from "react";
import Wind from "../imgs/wind.svg";

import { temperatureUnitDisplay} from "../helpers/utils";
import { wmoCodes } from "../helpers/helperCodes";
import { useSelector } from "react-redux";

function DailyForecast({ data }) {
  const { units } = useSelector((state) => state.weatherState);


  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const getToday = new Date().getUTCDay();
  const getUTCDay = new Date(data.time).getUTCDay();

  const getWeatherIcon = (height, weatherCode) => {
    return wmoCodes(weatherCode) && wmoCodes(weatherCode, height).iconD;
  };

  return (
    <li>
      <div className='grid grid-cols-6 gap-2 py-2 items-center justify-center'>
        <div className='items-center '>
          {getToday === getUTCDay ? `Today` : daysOfTheWeek[getUTCDay]}
        </div>
        <div className=' text-center '>
          {getWeatherIcon(1.3, data.weathercode)}
        </div>
        <div className='flex space-x-4 mx-1  col-span-2'>
          <p className='font-light'>
            {Math.round(data.tempMin)}
            {temperatureUnitDisplay(units)}
          </p>
          <p className='font-semibold'>
            {Math.round(data.tempMax)}
            {temperatureUnitDisplay(units)}
          </p>
        </div>
        <div className='flex items-center col-span-2'>
          <img className='h-3 mr-2' src={Wind} alt='Wind Icon' />
          <p className='font-light text-sm justify-right'>
            {data.windSpeed} mp/h
          </p>
        </div>
      </div>
      <hr className='opacity-50 mt-2'></hr>
    </li>
  );
}

export default DailyForecast;
