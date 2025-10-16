import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { getDailyForecast, getHourlyForecast } from "../api";

const Main = () => {
  return (
    <div className="mx-8 md:mx-28 py-5 overflow-y-auto overflow-x-hidden h-[calc(100vh-4rem)]">
      <CurrentWeather />
      <Forecast
        type="hourly"
        title="HOURLY FORECAST"
        data={getHourlyForecast()}
      />
      <Forecast
        type="daily"
        title="21 DAYS FORECAST"
        data={getDailyForecast()}
      />
    </div>
  );
};

export default Main;
