import { createContext, useState, useContext, useEffect } from "react";
import { DEFAULT_PLACE } from "../utils";
import { getWeatherData } from "../api";

const WeatherContext = createContext();
export const useWeatherContext = () => useContext(WeatherContext);

export function WeatherProvider({ children }) {
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);

            const cw = await getWeatherData('current', place.place_id, 'auto');
            setCurrentWeather(cw.current);

            const hw = await getWeatherData('hourly', place.place_id, 'auto');
            setHourlyForecast(hw.hourly.data)

            const dw = await getWeatherData('daily', place.place_id, 'auto');
            setDailyForecast(dw.daily.data)

            setLoading(false);
        }
        _getWeatherData();
    },[place]);

    return (
    <WeatherContext.Provider
      value={{ place, loading, currentWeather, hourlyForecast, dailyForecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
}