import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const NewSearch = ({ searchData }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (searchQuery) => {
    if (!searchQuery || searchQuery.length < 3)
      return {
        options: [],
      };

    return await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&language=en&format=json`
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.results) return { options: [] };
        const dataArr = response.results.map((city) => {
          return {
            value: `${city.longitude},${city.latitude},${city.timezone},${city.name}`,
            label: `${city.name}, ${city.country}`,
          };
        });

        return {
          options: dataArr,
        };
      });
  };

  const handleSearchChange = (searchInfo) => {
    setSearch(searchInfo);
    searchData(searchInfo);
  };

  const customStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255 / .4)",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255)",
    }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255)",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255)",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255)",
    }),
    loadingIndicator: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255)",
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "10px",
      color: "rgb(255 255 255)",
      border: "2px solid #ccc",
      boxShadow: state.isFocused ? "0 0 0 2px #3699FF" : null,
      background: "rgb(255 255 255 / .4)",
      backdropFilter: "blur(10px)",
      width: "18rem",
    }),
    option: (provided, state) => ({
      ...provided,
      borderColor: "rgb(255 255 255 / .4)",
      borderRadius: "10px",
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: state.isFocused ? "blue" : null,
      color: "rgb(255 255 255)",
      maxWidth: "17rem",
      marginTop: "2px",
      marginBottom: "2px",
    }),
    menu: (provided, state) => ({
      background: "rgb(255 255 255 / .4)",
      marginTop: "10px",
      borderRadius: "10px",
      width: "18rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }),
  };

  return (
    <AsyncPaginate
      value={search}
      loadOptions={loadOptions}
      onChange={handleSearchChange}
      placeholder='Search for city or town'
      debounceTimeout={1000}
      styles={customStyles}
      autoload={false}
    />
  );
};

export default NewSearch;
