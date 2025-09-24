import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const SearchBar = () => {
  // const [city, setCity] = useState("");
  // const [suggestions, setSuggestions] = useState([]);
  // const navigate = useNavigate();

  // const handleChange = async (e) => {
  //   const value = e.target.value;
  //   setCity(value);

  //   if (value.length > 1) {
  //     try {
  //       const res = await fetch(
  //         `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
  //       );
  //       const data = await res.json();

  //       setSuggestions(
  //         data.map((item) => ({
  //           name: item.name,
  //           country: item.country,
  //           lat: item.lat,
  //           lon: item.lon,
  //         }))
  //       );
  //     } catch (err) {
  //       console.error("Could not get the suggestions", err);
  //     }
  //   } else {
  //     setSuggestions([]);
  //   }
  // };

  // const handleSelect = (selectedCity) => {
  //   setCity(selectedCity);
  //   setSuggestions([]);
  //   console.log(selectedCity);
  //   navigate(`/city/${selectedCity.lat}/${selectedCity.lon}`);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!city) return;
  //   navigate(`/city/${city}`);
  // };

  return (
    // <div className="relative w-72">
    //   <form onSubmit={handleSubmit} className="flex gap-0">
    //     <input
    //       type="text"
    //       placeholder="Search city"
    //       value={city}
    //       onChange={handleChange}
    //       className="px-4 py-2 rounded-lg text-black w-full"
    //     />
    //     <button
    //       type="submit"
    //       className="bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-800 text-white"
    //     >
    //       Search
    //     </button>
    //   </form>

    //   {/* Suggestions List */}
    //   {suggestions.length > 0 && (
    //     <ul className="absolute top-full mt-2 left-0 w-full bg-white text-black rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
    //       {suggestions.map((s, i) => (
    //         <li
    //           key={i}
    //           onClick={() => handleSelect(s)}
    //           className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
    //         >
    //           {s.name}, {s.country}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <>
      <div className="flex border-[1px] border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-[20px] px-4">
        <div className="h-10 flex items-center justify-center text-xl pe-4">
          <BsSearch />
        </div>
        <div>
          <input className="h-10 border-0 outline-0 text-[#050505] dark:text-[#e4e6eb] bg-transparent" type="text" name="search-city" placeholder="Search city..." />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
