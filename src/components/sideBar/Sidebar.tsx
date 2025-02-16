import AdminNavbar from "../adminNavbar/AdminNavbar";
import { useSettings } from "@/context/SettingsContext";
export default function Sidebar() {
  const { theme } = useSettings();
  return (
    <>
      <div
        className={`${
          theme === "Sombre" ? "bg-gray-700  text-gray-200" : ""
        } flex flex-col h-full shadow-lg w-full `}
      >
        <div className="flex ml-2 mt-2 mb-7">
          <img src="/logo.ico" width={30} height={30} alt="Logo" />
          <h1 className="ml-4 text-opacity-100 ">TECHNOLAB ISTA</h1>
        </div>
        <div className="">
          <AdminNavbar />
        </div>
      </div>
    </>
  );
}
