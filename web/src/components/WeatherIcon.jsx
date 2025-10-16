import React from "react";

const WeatherIcon = ({ iconNumber, alt, className }) => {
  // Icons are stored in the public folder, so they can be accessed directly via root-relative paths.
  return (
    <img
      src={`/dist/weather_icons/${iconNumber}.png`}
      alt={alt}
      className={className}
      draggable={false}
    />
  );
};

export default WeatherIcon;
