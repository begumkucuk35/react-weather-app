import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { searchPlaces } from "../api";
import { useWeatherContext } from "../context/weather.context";

const SearchBar = () => {
  const {setPlace} = useWeatherContext();
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function onSearch(e) {
    setText(e.target.value);
    const cities = await searchPlaces(text);
    setSearchResults(cities);
  }

  const changePlace = (result) =>{
    setPlace(result);
    setText("");
    setSearchResults([]);
  }
  return (
    <div className="flex border border-solid border-[#65676b] dark:border-[#b0b3b8] rounded-[20px] px-4">
      <div className="h-10 flex items-center justify-center text-xl pe-4">
        <BsSearch />
      </div>
      <div>
        <input
          className="h-10 border-0 outline-0 text-[#050505] dark:text-[#e4e6eb] bg-transparent"
          type="text"
          name="search-city"
          placeholder="Search city..."
          value={text}
          onChange={(e) => onSearch(e)}
        />
      </div>
      <div className="rounded-lg bg-white dark:bg-[#242526] absolute z-1 top-16 w-1/2 max-h-[50vh] overflow-hidden">
        <div>
          {searchResults.map((result) => (
            <div key={result.place_id} onClick={() => changePlace(result)} className="p-4 text-[1.1rem] cursor-pointer border border-transparent hover:border-[#ced0d4] dark:hover:border-[#393a3b]" >
              {result.name}, {result.adm_area1}, {result.country}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
