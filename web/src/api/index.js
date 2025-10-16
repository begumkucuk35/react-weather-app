import currentWeather from "./current-weather.json";
import hourlyForecast from "./hourly-forecast.json";
import dailyForecast from "./daily-forecast.json";

function getCurrentWeather() {
  return currentWeather.current;
}
function getHourlyForecast(){
  return hourlyForecast.hourly.data;
}
function getDailyForecast(){
  return dailyForecast.daily.data;
}
export { getCurrentWeather, getHourlyForecast, getDailyForecast };
