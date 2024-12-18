import { FaHome } from "react-icons/fa";

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
            <li className="my-2 ml-2 hover:bg-green-300 rounded-lg w-4/5 py-2 pl-1 flex">
              <FaHome className="mr-2 w-7 h-7" />
              <a href="">ajout</a>
            </li>
            <li className="my-2 ml-2 hover:bg-green-300 rounded-lg w-4/5 py-2 pl-1 flex">
              <FaHome className="mr-2 w-7 h-7" />
              <a href="">ajout</a>
            </li>
            <li className="my-2 ml-2 hover:bg-green-300 rounded-lg w-4/5 py-2 pl-1 flex">
              <FaHome className="mr-2 w-7 h-7" />
              <a href="">supp</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
