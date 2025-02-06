"use client";
import Calendrier from "@/component/calendrier/Calendrier";
import Emploie from "@/component/emploieTemps/Emploie";
import MiniSmallIconCard from "@/component/miniSmallIconCard/MiniSmallIconCard";
import UserCard from "@/component/userCard/UserCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  const userData = {
    image: "/img/man4.jpg",
    nom: "Siby Souleymane",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad, exercitationem consectetur a beatae nobis culpa tenetur incidunt",
    email: "Soule1716@gmail.com",
    adresse: "Missabougou",
    date: "Janvier 2025",
    tel: "73-04-03-09",
  };
  return (
    <div className="w-full mt-16 gap-5 flex justify-center items-start">
      <div className="flex flex-col">
        <div className="w-full flex gap-5 h-full">
          <UserCard item={userData} />
          <div className="flex flex-col gap-5 h-full">
            <div className="flex flex-col gap-2 align-top">
              <MiniSmallIconCard
                photoName="/icons/Bookmark.png"
                stats="12"
                name="Module"
              />
              <MiniSmallIconCard
                photoName="/icons/Training.png"
                stats="AP"
                name="Classe"
              />
              <MiniSmallIconCard
                photoName="/icons/Close.png"
                stats="2"
                name="Module non valide"
              />
            </div>
          </div>
        </div>
        <div>
          <Emploie />
        </div>
      </div>
      <div className="min-h-screen w-[350px] bg-gray-50 flexjustify-center">
        <Calendrier />
      </div>
    </div>
  );
}
