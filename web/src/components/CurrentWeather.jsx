import React from "react";
import { getCurrentWeather } from "../api";

const CurrentWeather = () => {
  const data = getCurrentWeather();
  console.log(data);

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
  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-[1px] border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl p-4 w-64 h-auto">
        <div>
          {/* Icons are stored in the public folder, so they can be accessed directly via root-relative paths. */}
          <img
            src={`/dist/weather_icons/${icon_num}.png`}
            alt={summary}
            draggable={false}
          />
        </div>
        <div>
          <div className="text-5xl">{temperature} C</div>
          <div className="text-lg">feels like {feels_like} C</div>
        </div>
        <div className="text-2xl mt-4">{summary}</div>
      </div>
      <div className="border-[1px] border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-2xl p-4 flex-1 h-auto ms-4"></div>
    </div>
  );
};

export default CurrentWeather;
