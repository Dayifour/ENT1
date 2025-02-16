"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  const [isFocused, setIsFocused] = useState(false);

  // const [dateTime, setDateTime] = useState(new Date());
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDateTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <header className="my-2 rounded-sm flex justify-between items-center text-center fixed z-10">
        <div className="relative  h-8 search partie1">
          {/* <div className="date-time">
            {dateTime.toLocaleString("fr-FR", {
              timeZone: "Africa/Bamako",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </div> */}
          {/* Conteneur de l'input et de l'icône */}
          <div className="relative">
            {/* Input */}
            <input
              type="text"
              placeholder={!isFocused ? "Search..." : ""}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="InputSEARCH pr-10 p-2 rounded-lg outline-none"
            />
            {/* Icon */}
            {!isFocused ? (
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 partie2">
          <div>
            <Icon icon="tabler:bell" />
          </div>
          <div className="flex flex-col mr-1">
            <div className="text-base">Mamadou Ba</div>
            <div className="text-xs">Etudiant</div>
          </div>
          <div className=" bg-black w-10 h-10 rounded-2xl "></div>
        </div>
      </header>
    </>
  );
}
