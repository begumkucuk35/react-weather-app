import React from "react";
import WeatherIcon from "./WeatherIcon";

const HourlyForecastWidget = ({ data }) => {
  const { date, icon, summary, temperature, precipitation, wind } = data;
  return (
    <div className="relative cursor-pointer flex flex-col items-center p-3 me-3 min-w-28 border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl">
        <div className="absolute top-[-1.5rem]">{date}</div>
        <div>{date}</div>
        <div className="flex flex-col items-center my-3">
            <div>
                <WeatherIcon iconNumber={icon} alt={summary} className="w-10 me-1"/>
            </div>
            <div>
                {Math.round(temperature)} C
            </div>
        </div>
        <div>
            {Math.round(precipitation.total)} mm/h
        </div>
        <div className="mt-1 flex">
            <div className="me-1">{Math.round(wind.speed)} mph</div>
            {/* <div className="text-sm ms-1"></div> */}
        </div>
    </div>
  );
};

export default HourlyForecastWidget;
