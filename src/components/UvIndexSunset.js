import React from "react";
import { ReactComponent as Sunset } from "../imgs/weather_icons/Sunset.svg";

import { getCurrentTime } from "../helpers/utils";
import { useSelector } from "react-redux";

function UvIndexSunset() {
  const { weather } = useSelector(state => state.weatherState);

  if (!weather) {
    return null; // Return early if weather data is not available
  }

  const indexToExtractUV = getCurrentTime(weather.hourly.time, weather);

  const uvIndex = Math.round(weather.hourly.uv_index[indexToExtractUV]);

  const getUVNotification = (uvIndex) => {
    if (uvIndex >= 0 && uvIndex <= 2)
      return `You can safely enjoy being outside!`;
    if (uvIndex > 2 && uvIndex <= 7)
      return `Seek shade during midday hours! Slip on a shirt, slop on sunscreen and slap on hat!`;
    if (uvIndex > 7)
      return `Avoid being outside during midday hours! Shirt, sunscreen and hat are a must!`;
  };

  const getHoursAndMinutes = (dateToConvert) => {
    const getDate = new Date(dateToConvert);

    let hour = getDate.getUTCHours();
    let minutes =
      getDate.getUTCMinutes() < 10
        ? "0" + getDate.getUTCMinutes()
        : getDate.getUTCMinutes();

    return `${hour}:${minutes}`;
  };

  return (
    <section className="grid grid-cols-2 gap-5">
      <div className="aspect-square bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur pb-4">
        <div>
          <h2 className="font-thin">UV Index</h2>
          <hr className="opacity-50 mt-1"></hr>
        </div>
        <div className="mt-2">
          <p className="text-xl">
            {uvIndex <= 2
              ? `${uvIndex} Low`
              : uvIndex > 2 && uvIndex <= 7
              ? `${uvIndex} Medium`
              : `${uvIndex} High`}
          </p>
          <p className="text-xs mt-2">{getUVNotification(uvIndex)}</p>
        </div>
      </div>
      <div className="aspect-square bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur pb-4">
        <div>
          <h2 className="font-thin">Sunset</h2>
          <hr className="opacity-50 mt-1"></hr>
        </div>
        <div className="flex flex-col mt-4 text-center">
          <p className="font-thin text-5xl">
            {getHoursAndMinutes(weather.daily.sunrise[0])}
          </p>
          <div className="flex mt-2 justify-center">
            <Sunset className="w-8" />
            <p className="font-thin font-xs ml-2">
              {getHoursAndMinutes(weather.daily.sunset[0])}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UvIndexSunset;
