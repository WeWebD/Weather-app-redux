import useWeatherContext from "../hooks/useWeatherContext";
import { twoDigitTimeConversion, temperatureUnitDisplay } from "../helpers/utils";

function HourForecast({ data}) {
  
  const { wmoCodes,  units} = useWeatherContext();
  
  const getWeatherIcon = (height, weatherCode) => {

    const getDayOrNightIcon =
      twoDigitTimeConversion(data.time).split(":")[0] >= 6 &&
      twoDigitTimeConversion(data.time).split(":")[0] <= 21
        ? "iconD"
        : "iconN";

    return wmoCodes(weatherCode) && wmoCodes(weatherCode, height)[getDayOrNightIcon];
  };

  return (
    <li  className="flex flex-col mt-2 items-center mx-2.5">
      <p className="font-regular">
        {twoDigitTimeConversion(data.time).split(":")[0]}
      </p>
      {getWeatherIcon(2, data.weather_code)}
      <p className="font-regular mt-2">{`${Math.round(data.temperature)}${temperatureUnitDisplay(units)}`}</p>
    </li>
  );
}

export default HourForecast;
