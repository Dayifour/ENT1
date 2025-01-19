"use client";
import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
// import UserCard from "@/component/userCard/UserCard";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Calendar from "@/component/calendar/Calendar";
import Emploie from "@/component/emploieTemps/Emploie";
import TablauD from "@/component/tableau/TableauD";
import React from "react";
import TableauD from "@/component/tableau/TableauD";

const Classepage = () => {
  return (
    <div >
      <div className="flex justify-center p-10 space-x-4">
        <SmallIconCard
          photoName="/icons/Bookmark.png"
          stats="12"
          name="Module"
        />
        <SmallIconCard
          photoName="/icons/Training.png"
          stats="AP"
          name="Classe"
        />
        <SmallIconCard
          photoName="/icons/Close.png"
          stats="2"
          name="Module non valide"
        />
      </div>

      <div justify-center items-center>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Ap(Analyse Programmeur)</h1>
          <TableauD />
        </div>
      </div>
      <div className="flex gap-5 min-h-[clac(100vh-100px)] items-start">

      </div>
      <div className="relative h-screen bg-gray-100">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded p-6 w-72">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Classepage;
