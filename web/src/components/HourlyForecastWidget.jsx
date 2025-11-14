import React from "react";
import WeatherIcon from "./WeatherIcon";
import { BsSendFill } from "react-icons/bs";
import { useWeatherContext } from "../context/weather.context";

const HourlyForecastWidget = ({ data }) => {
  const { date, icon, summary, temperature, precipitation, wind } = data;
  const { units } = useWeatherContext();

  // date format
  const locale = navigator.language;
  const now_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };
  const weather_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };

  // If the date and time match the current one, label as "Now";
  // if time is "00:00", show the day; otherwise, leave empty.
  weather_date.day =
    weather_date.day === now_date.day && weather_date.time === now_date.time
      ? "Now"
      : weather_date.time === "00:00"
      ? weather_date.day
      : "";

  return (
    <div className="relative cursor-pointer flex flex-col items-center p-3 me-3 min-w-28 border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl">
      <div className="absolute -top-6">{weather_date.day}</div>
      <div>{weather_date.time}</div>
      <div className="flex flex-col items-center my-3">
        <div>
          <WeatherIcon iconNumber={icon} alt={summary} className="w-10 me-1" />
        </div>
        <div>{Math.round(temperature)} {units.temperature}</div>
      </div>
      <div>{Math.round(precipitation.total)} {units.precipitation}</div>
      <div className="mt-1 flex">
        <div className="me-1">{Math.round(wind.speed)} {units.wind_speed}</div>
        <div
          className="text-sm ms-1 flex items-center"
          style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
        >
          <BsSendFill />
        </div>
      </div>
    </div>
  );
};

export default HourlyForecastWidget;
