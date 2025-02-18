"use client";
<<<<<<<< HEAD:src/app/etudiant/messages/page.tsx
import Calendrier from "@/component/calendrier/Calendrier";
import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
// import UserCard from "@/component/userCard/UserCard";
========
import Calendrier from "@/components/calendrier/Calendrier";
import SmallIconCard from "@/components/smallIconCard/SmallIconCard";
// import UserCard from "@/components/userCard/UserCard";
>>>>>>>> fa997886c0af125324b7f3364140b1f43803b458:src/app/(root)/etudiant/messages/page.tsx
// import "@fortawesome/fontawesome-free/css/all.min.css";

const ClasseMessage = () => {
  return (
    <div className="w-full mt-16 flex gap-10 justify-center items-start">
      <div className="flex justify-center space-x-4">
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
      <div className="bg-white shadow-md border-[1px] border-gray-300">
        <Calendrier />
      </div>
    </div>
  );
};

export default ClasseMessage;
