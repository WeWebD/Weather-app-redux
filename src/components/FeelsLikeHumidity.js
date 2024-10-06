import React from "react";
//import useWeatherContext from "../hooks/useWeatherContext";
import { getCurrentTime, temperatureUnitDisplay } from "../helpers/utils";
import { useSelector } from "react-redux";

function FeelsLikeHumidity() {
  const { weather, units } = useSelector((state) => state.weatherState);
  //const { weather, units } = useWeatherContext();

  if (!weather) {
    return null; // Return early if weather data is not available
  }

  const indexToExtractTemperature = getCurrentTime(weather.hourly.time, weather);

  const tempFeelsLike = Math.round(
    weather.hourly.apparent_temperature[indexToExtractTemperature]
  );

  const humidity = Math.round(
    weather.hourly.relativehumidity_2m[indexToExtractTemperature]
  );

  const dewpoint = Math.round(
    weather.hourly.dewpoint_2m[indexToExtractTemperature]
  );

  const humidtyAffectingTemperature = humidity > 60 ? 'Humidity making it feel warmer.' : humidity === 60 ? 'Humidity not affecting apparent temperrature' : "Low humidty makeing it feel colder.";

  //const feelsLike = weather.hourly

  return (
    <section className="grid grid-cols-2 gap-5">
      <div className="aspect-square max-w-max bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur pb-4">
        <div>
          <h2 className="font-thin">Feels Like</h2>
          <hr className="opacity-50 mt-1"></hr>
        </div>
        <div className="mt-2">
          <p className="text-xl">{tempFeelsLike + temperatureUnitDisplay(units)}</p>
          <p className="text-xs mt-2">{humidtyAffectingTemperature}</p>
        </div>
      </div>
      <div className="aspect-square bg-gray-300/40 mt-5 rounded-xl px-3 py-2 backdrop-blur pb-4">
        <div>
          <h2 className="font-thin">Humidty</h2>
          <hr className="opacity-50 mt-1"></hr>
        </div>
        <div className="mt-2">
          <p className="text-xl">{humidity}%</p>
          <p className="text-xs mt-2">
            {`The dew point is ${dewpoint}${temperatureUnitDisplay(units)} right now.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeelsLikeHumidity;
