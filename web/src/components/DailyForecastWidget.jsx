import WeatherIcon from "./WeatherIcon";

const DailyForecastWidget = ({ data }) => {
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  // date format
  const locale = navigator.language;
  const now_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };
  const weather_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  // If the date match the current one, label as "Today";
  weather_date.day =
    weather_date.day === now_date.day ? "Today" : weather_date.day;

  return (
    <div className="relative cursor-pointer flex flex-col items-center p-3 me-3 min-w-28 border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl">
      <div className="absolute top-[-1.5rem]">{weather_date.day}</div>
      <div className="flex flex-col items-center my-3">
        <div>
          <WeatherIcon iconNumber={icon} alt={summary} className="w-10 me-1" />
        </div>
        <div>{Math.round(temperature_max)} C</div>
        <div>{Math.round(temperature_min)} C</div>
      </div>
      <div>{Math.round(precipitation.total)} mm/h</div>
    </div>
  );
};

export default DailyForecastWidget;
