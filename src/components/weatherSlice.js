import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  weather: null,
  units: "metric",
  geoData: null,
  airQuality: null,
  searchBar: false,
  error: "",
  isLoading: {
    loading: false,
    navLoading: "",
  },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setUnits: (state, action) => {
      state.units = action.payload;
    },
    setGeoData: (state, action) => {
      state.geoData = action.payload;
    },
    setAirQuality: (state, action) => {
      state.airQuality = action.payload;
    },
    setSearchBar: (state, action) => {
      state.searchBar = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
    
      state.isLoading = {
        loading: action.payload.loading,
        navLoading: action.payload.navLoading,
      };
    },
  },
});

export const {
  setUnits,
  setWeather,
  setLoading,
  setGeoData,
  setAirQuality,
  setSearchBar,
  setError,
} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
