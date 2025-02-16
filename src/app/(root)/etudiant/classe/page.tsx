"use client";
import SmallIconCard from "@/components/smallIconCard/SmallIconCard";
// import UserCard from "@/components/userCard/UserCard";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Calendrier from "@/components/calendrier/Calendrier";
import TableauD from "@/components/tableau/TableauD";

const Classepage = () => {
  return (
    <div className="w-full pt-16 gap-10 flex justify-center">
      <div className="flex flex-col gap-10 justify-center">
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

        <div>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ap(Analyse Programmeur)</h1>
            <TableauD />
          </div>
        </div>
        <div className="flex gap-5 min-h-[clac(100vh-100px)] items-start"></div>
      </div>

      <div className="flex justify-center gap-4 bg-white rounded border-[1px] border-gray-300">
        <Calendrier />
      </div>
    </div>
  );
};

export default Classepage;
