"use client";
import Calendrier from "@/components/calendrier/Calendrier";
import EmploieStudent from "@/components/emploieStudent/EmploieStudent";
import MiniSmallIconCard from "@/components/miniSmallIconCard/MiniSmallIconCard";
import UserCard from "@/components/userCard/UserCard";

const userData = {
  image: "/img/man4.jpg",
  nom: "Siby Souleymane",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad, exercitationem consectetur a beatae nobis culpa tenetur incidunt",
  email: "Soule1716@gmail.com",
  adresse: "Missabougou",
  date: "Janvier 2025",
  tel: "73-04-03-09",
};
const Home = () => {
  return (
    <div className="w-full mt-16 gap-2 flex justify-center items-start">
      <div className="flex flex-col gap-2 w-[900px] justify-center items-start">
        <div className="w-full flex gap-16 h-full">
          <div className="w-[600px]">
            <UserCard item={userData} />
          </div>
          <div className="flex flex-col gap-2 h-full">
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
          <EmploieStudent />
        </div>
      </div>
      <div className="min-h-screen w-[300px] bg-gray-50 flexjustify-center">
        <Calendrier />
      </div>
    </div>
  );
};
export default Home;
