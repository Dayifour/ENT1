"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <header className=" my-2 rounded-sm flex justify-between w-11/12 text-center fixed">
        <div className="relative lg:ml-64 md:ml-52 sm:ml-40 h-8 search partie1">
          {/* Conteneur de l'input et de l'icône */}
          <div className="relative">
            {/* Input */}
            <input
              type="text"
              placeholder={!isFocused ? "Search..." : ""}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="InputSEARCH w-full pr-10"
            />
            {/* Icon */}
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
          </div>
        </div>

        <div className="flex justify-between partie2">
          <div>
            <Icon icon="tabler:bell" />
          </div>
          <div className="flex flex-col mr-2">
            <div className="text-base">Mamadou Ba</div>
            <div className="text-xs">Etudiant</div>
          </div>
          <div className=" bg-black w-10 h-10 rounded-2xl "></div>
        </div>
      </header>
    </>
  );
}
