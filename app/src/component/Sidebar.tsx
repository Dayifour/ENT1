import Image from "next/image";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full shadow-lg md:w-10 lg:w-60 bg-white fixed">
        <div className=" flex ">
          <h1 className="text-center ml-16 text-opacity-100">TECHNOLAB ISTA</h1>
        </div>
        <div>
          <ul className="flex flex-col  my-4">
            <li className="my-2 ml-2 hover:bg-green-300 rounded-lg w-56 py-2 text-center">
              acceuil
            </li>
            <li className="my-2 ml-2 hover:bg-green-300 rounded-lg w-56 py-2 text-center">
              ajout
            </li>
            <li className="my-2 ml-2 hover:bg-green-300 rounded-lg w-56 py-2  text-center">
              supp
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
