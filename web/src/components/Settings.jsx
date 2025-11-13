import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { useThemeContext } from "../context/theme.context";

const Setting = () => {
  const { dark, setDark, saveThemeToLocalStorage } = useThemeContext();

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
      <div className="ms-4 cursor-pointer">
        <BsGear />
      </div>
    </div>
  );
};
export default Setting;
