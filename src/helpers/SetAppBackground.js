import GetHour from "./GetHour";
//import useWeatherContext from "../hooks/useWeatherContext";
import { useSelector } from "react-redux";

const SerAppBackground = () => {
  const { geoData} = useSelector((state) => state.weatherState);
  //const { geoData } = useWeatherContext();
  let hour;
  geoData ? (hour = GetHour(geoData.timezone)) : (hour = null);

  const getAppBackground = (hour) => {
    if (hour >= "04" && hour <= "06") return "early-morning-theme";
    if (hour >= "07" && hour <= "17") return "morning-theme";
    if (hour >= "18" && hour <= "20") return "evening-theme";
    if (hour >= "21" && hour <= "23") return "night-theme";
    if (hour >= "00" && hour <= "03") return "night-theme";
  };

  const theme = getAppBackground(hour);

  return theme;
};

export default SerAppBackground;
