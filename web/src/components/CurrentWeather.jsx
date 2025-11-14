import {
  BsDroplet,
  BsWind,
  BsMoisture,
  BsSunglasses,
  BsCloudsFill,
  BsEye,
} from "react-icons/bs";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import { useWeatherContext } from "../context/weather.context";

const CurrentWeather = ({ data }) => {
  // object destructuring
  const {
    cloud_cover,
    feels_like,
    humidity,
    icon_num,
    precipitation,
    summary,
    temperature,
    uv_index,
    visibility,
    wind,
  } = data;

  const { units } = useWeatherContext();

  const otherInfoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipitation",
      value: Math.round(precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: "wind",
      name: "Wind",
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: "moisture",
      name: "Humidity",
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: "cloudsFill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: "eye",
      name: "Visibility",
      value: Math.round(visibility),
      unit: units.visibility,
    },
  ];

  const iconMap = {
    droplet: BsDroplet,
    wind: BsWind,
    moisture: BsMoisture,
    sunglasses: BsSunglasses,
    cloudsFill: BsCloudsFill,
    eye: BsEye,
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl p-4 w-64 h-auto">
        <div>
          <WeatherIcon iconNumber={icon_num} alt={summary} />
        </div>
        <div>
          <div className="text-5xl">{temperature} {units.temperature}</div>
          <div className="text-lg">feels like {feels_like} {units.temperature}</div>
        </div>
        <div className="text-2xl mt-4">{summary}</div>
      </div>
      <div className="border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl p-4 flex-1 h-auto md:ms-4 mt-4 md:mt-0 flex items-center justify-center flex-wrap">
        {otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
          <div className="w-44" key={id}>
            <div className="p-2 m-2 flex items-center flex-col">
              <div className="flex text-xl mb-2 items-center">
                <div className="me-2">{React.createElement(iconMap[icon])}</div>
                <div>
                  {value} {unit}
                </div>
              </div>
              <div>{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeather;
