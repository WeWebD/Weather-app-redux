import React, { useState } from "react";
import SearchGlass from "../imgs/spyglass.svg";
import { FaTimes} from "react-icons/fa";

import LoadingSpinner from "./LoadingSpinner";
import NewSearch from "./NewSearch";
import { useSelector, useDispatch } from "react-redux";
import { setGeoData, setSearchBar } from "./weatherSlice";

function NameSearchbar() {
  const dispatch = useDispatch();
  const {geoData, searchBar, isLoading} = useSelector(state => state.weatherState)


  const [placeSearch, setPlaceSearch] = useState("");

  const onSearchClick = () => {

    dispatch(setSearchBar(!searchBar));

  };

  const handleChange = (e) => {
    setPlaceSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPlaceSearch("");
    dispatch(setSearchBar(false));
 
  };

  const handleSearch = (data) => {
    const [longitude, latitude, timezone, name] = data.value.split(",");
    const searchData = {
      longitude: Number(longitude),
      latitude: Number(latitude),
      timezone,
      name,
    };

    dispatch({ type: "weather/loadWeatherAsync", payload: searchData });
    //searchAndLoadWeatherAsync(searchData);
    dispatch(setGeoData({
      name,
      longitude,
      latitude,
      timezone,
    }));
    dispatch(setSearchBar(false));
  };

  /*
  const searchForm = (
    <form
      className="relatve flex sticky top-0 px-8 pt-12 justify-center w-full flex items-center rounded-xl h-28"
      onSubmit={handleSubmit}
    >
      <input
        className={`border focus:outline-none bg-white/20 border-solid border-width-1 border-gray-200 rounded-xl p-1 pl-4 w-8/12`}
        placeholder="Search City"
        onChange={handleChange}
        value={placeSearch}
      ></input>
      <button
        className="ml-3 cursor-pointer "
        onClick={onSearchClick}
        type="button"
      >
        <FaTimes className="" alt="close search icon" />
      </button>
      <button className="ml-3 cursor-pointer" type="submit">
        <FaCheck className="" alt="search icon" />
      </button>
    </form>
  );
  */

  const asyncSearchForm = (
    <div className="flex justify-center">
      <div className="rounded-xl h-30">
        <NewSearch searchData={handleSearch} />
      </div>
      <button
        className="mt-0 ml-5 cursor-pointer"
        style={{ height: "40px" }}
        onClick={onSearchClick}
        type="button"
      >
        <FaTimes className="" alt="close search icon" />
      </button>
    </div>
  );

  const placeName = (
    <div className="relative font-medium sticky top-0 flex items-center justify-center px-10">
      <h2 className="text-xl">
        {geoData && !isLoading.loading ? geoData.name : <LoadingSpinner />}
      </h2>
      <button
        className="w-4 ml-10 "
        title="Get Location"
        aria-label="Get the current weather conditions for your current location"
        onClick={onSearchClick}
      >
        <img src={SearchGlass} alt="search icon spyglass" />
      </button>
    </div>
  );

  return <>{searchBar ? asyncSearchForm : placeName}</>;
}

export default NameSearchbar;
