import "./index.css";
import SetAppBackground from "./helpers/SetAppBackground";
import NameSearchbar from "./components/NameSearchbar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherForecast from "./components/HourlyWeatherForecast";
import SevenDayForecast from "./components/SevenDayForecast";
import Navbar from "./components/Navbar";
import AirPollution from "./components/AirPollution";
import UvIndexSunset from "./components/UvIndexSunset";
import WindPressure from "./components/WindPressure";
import FeelsLikeHumidity from "./components/FeelsLikeHumidity";
import PercipitationVisibility from "./components/PercipitationVisibility";
import ErrorReport from "./components/ErrorReport";

//import useWeatherContext from "./hooks/useWeatherContext";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const { error } = useSelector((state) => state.weatherState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "weather/loadWeather" });
  }, [dispatch]);

  const theme = SetAppBackground();

  return (
    <div className={`flex  ${theme} text-skin-textDefault justify-center `}>
      <div className='h-screen w-screen bg-gradient-to-b from-skin-gradientStart via-skin-gradientMid to-skin-gradientEnd fixed top-0 z-0 max-w-md'></div>
      <div className='fixed top-0 w-full text-center z-40 bg-gradient-to-b from-skin-gradientStart via-skin-gradientStart to-transperent max-w-md pt-16'>
        <NameSearchbar />
        {error ? <ErrorReport message={error} /> : ""}
      </div>

      <div className='w-screen font-roboto px-5 pb-32 pt-32 z-0 max-w-md'>
        <CurrentWeather />
        <HourlyWeatherForecast />
        <SevenDayForecast />
        <FeelsLikeHumidity />
        <AirPollution />
        <UvIndexSunset />
        <WindPressure />
        <PercipitationVisibility />
      </div>

      <Navbar />
    </div>
  );
}

export default App;
