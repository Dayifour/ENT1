"use client";
import Calendar from "@/component/calendar/Calendar";
import Emploie from "@/component/emploieTemps/Emploie";
import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
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
    <div className="w-full mt-16 gap-10 flex flex-col justify-center items-center">
      <div className="flex gap-5 min-h-[clac(100vh-100px)] items-start">
        <div className="flex flex-col gap-5 w-[600px] h-full">
          <UserCard item={userData} />
          <div>
            <Emploie />
          </div>
        </div>
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col gap-5 h-[250px]">
            <div className="align-top space-y-4">
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
            </div>
            <div className="flex h-full gap-5">
              <SmallIconCard
                photoName="/icons/Close.png"
                stats="2"
                name="Module non valide"
              />
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
