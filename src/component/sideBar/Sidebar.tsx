import AdminNavbar from "../adminNavbar/AdminNavbar";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full shadow-lg w-1/6  bg-white fixed">
        <div className=" flex ml-2 mt-2 sideHead">
          <img src="logo.ico" width={30} height={30} alt="Logo" />
          <h1 className="ml-4 text-opacity-100 ">TECHNOLAB ISTA</h1>
        </div>
        <div>
          <AdminNavbar />
        </div>
      </div>
    </>
  );
}
