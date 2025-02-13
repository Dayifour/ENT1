"use client";
import { useState } from 'react';
import React from "react";
import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
// import UserCard from "@/component/userCard/UserCard";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Calendar from "@/component/calendar/Calendar";
import Message from '@/component/etudiantMessage/Message';


const ClasseMessage = () => {
  return (
    <div>
      <div className=" float-right m-10 bg-white shadow-md rounded p-6 w-72">
        <Calendar />
      </div>
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
      <Message/>
    </div>
  );
};

export default ClasseMessage;
