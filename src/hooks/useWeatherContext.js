import { useContext } from 'react'
import WeatherContext from '../components/context/WeatherContext';

function useWeatherContext () {
    return useContext(WeatherContext);
}

export default useWeatherContext;