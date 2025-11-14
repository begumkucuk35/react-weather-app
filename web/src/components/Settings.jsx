import { BsGear, BsGearFill, BsMoon, BsSun } from "react-icons/bs";
import { useThemeContext } from "../context/theme.context";
import { useState } from "react";
import { MEASUREMENT_SYSTEMS } from "../constants";
import { useWeatherContext } from "../context/weather.context";

const Setting = () => {
  const { dark, setDark, saveThemeToLocalStorage } = useThemeContext();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { measurementSystem, setMeasurementSystem } = useWeatherContext();

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveThemeToLocalStorage(!dark);
  };

  return (
    <div className="flex text-xl">
      <div>
        <div
          className="cursor-pointer flex relative h-6 w-6 overflow-hidden"
          onClick={toggleTheme}
        >
          <div
            className={`absolute transition-all duration-500 ease-in-out ${
              dark ? "top-6" : "top-0"
            }`}
          >
            <BsSun />
          </div>
          <div
            className={`absolute transition-all duration-500 ease-in-out ${
              dark ? "top-0" : "top-6"
            }`}
          >
            <BsMoon />
          </div>
        </div>
      </div>
      <div
        className="ms-4 cursor-pointer"
        onClick={() => setIsSettingsOpen((prev) => !prev)}
      >
        {isSettingsOpen ? <BsGearFill /> : <BsGear />}
      </div>
      <div
        className={`absolute z-2 top-16 right-8 rounded-lg bg-white dark:bg-[#242526] w-64 p-2 select-none transition-all duration-200 ease-in-out ${
          isSettingsOpen ? "scale-100 visible" : "scale-[0.1] invisible"
        }`}
      >
        <div className="p-2">
          <h4>Measurement Systems:</h4>
          <div className="flex flex-wrap mt-2">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`flex items-center justify-center w-16 h-8 my-1 ms-1 me-0 border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-lg cursor-pointer ${
                  system === measurementSystem
                    ? "bg-[#050505] dark:bg-[#e4e6eb] text-[#f0f2f5] dark:text-[#18191a]"
                    : ""
                }`}
                key={system}
                onClick={() => {
                  setMeasurementSystem(system);
                  setIsSettingsOpen(false);
                }}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
