import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { useWeatherContext } from "../context/weather.context";
import Loader from "./Loader";

const Main = () => {
  const {loading, currentWeather, dailyForecast, hourlyForecast } = useWeatherContext();
  return (
    <div className="mx-8 md:mx-28 py-5 overflow-y-auto overflow-x-hidden h-[calc(100vh-4rem)]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather}/>
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyForecast}
          />
          <Forecast
            type="daily"
            title="21 DAYS FORECAST"
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
};

export default Main;
