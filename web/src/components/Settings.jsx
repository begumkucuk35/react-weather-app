import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsGear } from "react-icons/bs";

const Setting = () => {
  return (
    <div className="flex text-xl">
      <div>
        <div className="cursor-pointer flex relative h-6 w-6 overflow-hidden">
          <div className="absolute top-6 transition-[top] duration-500 ease-in-out">
            <BsSun/>
          </div>
          <div className="absolute top-6 transition-[top] duration-500 ease-in-out">
            <BsMoon/>
          </div>
        </div>
      </div>
      <div className="ms-4 cursor-pointer">
        <BsGear/>
      </div>
    </div>
  )
}
export default Setting