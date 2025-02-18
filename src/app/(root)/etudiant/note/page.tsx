"use client";
import Semesters from "@/components/semestre/TabSemestre";
import SmallIconCard from "@/components/smallIconCard/SmallIconCard";

export default function page() {
  return (
    <div>
      <div className="flex float-right">
        <div className="m-2">
          <SmallIconCard
            photoName="/icons/Close.png"
            stats="0"
            name="Matier non valide"
          />
        </div>
        <div className="">
          <SmallIconCard
            photoName="/icons/Bookmark.png"
            stats="2"
            name="Nombre d'abscences"
          />
        </div>

        <p className="text-2xl font-bold text-gray-800 mt-40">Imprimer</p>
      </div>

      <div className="mt-40">
        <Semesters />
      </div>
    </div>
  );
}
