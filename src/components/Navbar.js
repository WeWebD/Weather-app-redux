import React from "react";
import Picker from "../imgs/Picker.svg";
import Refresh from "../imgs/Refresh.svg";
import Home from "../imgs/Home.svg";
import Units from "../imgs/Units.svg";
import Save from "../imgs/Save.svg";
import NavButton from "../helpers/NavButton";
//import useWeatherContext from "../hooks/useWeatherContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { saveLocation } from "../helpers/utils";
import { setSearchBar, setLoading } from "./weatherSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { isLoading, units, geoData } = useSelector(
    (state) => state.weatherState
  );

  const handleSaveClick = () => {
    dispatch(setSearchBar(false));
    dispatch(setLoading({ loading: true, navLoading: "save" }));
    saveLocation(geoData, units);
    dispatch({ type: "weather/loadWeather" });
    dispatch(setLoading({ loading: false, navLoading: "" }));
  };

  const handleHomeClick = () => {
    setSearchBar(false);
    dispatch({ type: "weather/loadWeather" });
  };

  const handleLocationClick = () => {
    dispatch(setSearchBar(false));
    dispatch({ type: "weather/getGeoWeather" });
  };

  const handleUnitClick = () => {
    let unitsToPass;
    units === "imperial"
      ? (unitsToPass = "metric")
      : (unitsToPass = "imperial");
    dispatch({ type: "weather/toggleUnit", payload: unitsToPass });
  };

  const handleRefreshClick = () => {
    dispatch(setSearchBar(false));
    dispatch(setLoading({ loading: true, navLoading: "refresh" }));
    setTimeout(() => {
      dispatch({ type: "weather/loadWeather" });
      setLoading({
        loading: false,
        navLoading: "",
      });
    }, 2000);
  };

  console.log(isLoading);

  return (
    <nav className='grid gap-4 grid-cols-5 w-full grid-rows-1 px-5 h-20 bg-white/60 fixed bottom-0 max-w-md rounded-t-[16px] backdrop-blur text-gray-600 text-sm items-center'>
      <NavButton
        icon={Picker}
        text='Current'
        loading={isLoading.navLoading === "current"}
        buttonTitle='Get Location'
        onClick={handleLocationClick}
        aria-label='Get the current weather conditions for your current location'
      />
      <NavButton
        icon={Home}
        text='Home'
        loading={isLoading.navLoading === "home"}
        buttonTitle='Home Location'
        onClick={handleHomeClick}
        alabel='Get the current weather conditions for your saved Home location'
      />
      <NavButton
        icon={Save}
        text='Save'
        loading={isLoading.navLoading === "save"}
        buttonTitle='Save Location'
        onClick={handleSaveClick}
        aLabel='Save the current locagtion as your home location'
      />
      <NavButton
        icon={Units}
        text='Units'
        loading={isLoading.navLoading === "units"}
        onClick={handleUnitClick}
        buttonTitle='Change units'
        aLabel='Toggle units between imperial and metric.'
      />
      <NavButton
        icon={Refresh}
        loading={isLoading.navLoading === "refresh"}
        text='Refresh'
        onClick={handleRefreshClick}
        buttonTitle='Refresh the app'
        aLabel='Refresh the application'
      />
    </nav>
  );
}

export default Navbar;
