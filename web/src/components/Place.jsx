import { BsFillGeoAltFill } from "react-icons/bs";
import { useWeatherContext } from "../context/weather.context";

const Place = () => {
  const {place} = useWeatherContext();
  
  return (
    <div className='text-xl flex items-center gap-0.5'>
        <BsFillGeoAltFill/>
        <b>{place.name}</b>, {place.country}
    </div>
  )
}

export default Place