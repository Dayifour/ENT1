import { FaHollyBerry, FaHome, FaKey } from "react-icons/fa";
import IconLien from "../IconLien/IconLien";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full shadow-lg w-1/6  bg-white fixed">
        <div className=" flex ml-2 mt-2 sideHead">
          <img src="logo.ico" width={30} height={30} alt="Logo" />
          <h1 className="ml-4 text-opacity-100 ">TECHNOLAB ISTA</h1>
        </div>
        <div>
          <ul className="flex flex-col  my-4 list">
            <IconLien text="home">
              <FaHome className="mr-2 w-7 h-7" />
            </IconLien>
            <IconLien text="Etudiants">
              <FaHollyBerry className="mr-2 w-7 h-7" />
            </IconLien>
            <IconLien text="Proffesseurs">
              <FaKey className="mr-2 w-7 h-7" />
            </IconLien>
          </ul>
        </div>
      </div>
    </>
  );
}
