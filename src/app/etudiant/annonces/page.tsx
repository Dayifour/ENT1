"use client";

import Annonce from "@/component/annonceCard/Annonce";
import Calendar from "@/component/calendar/Calendar";

export default function LesAnnonces() {
  const annonces = [
    {
      title: "Avis examen",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur",
      actions: ["Réagir", "Supprimer"],
    },
    {
      title: "Annonce payement",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur",
      actions: ["Réagir", "Supprimer"],
    },
    {
      title: "Avis session",
      description:
        "A dialog is a type of modal window that appears in front of app content to provide critical information.",
      actions: ["Action 2", "Action 1"],
    },
    {
      title: "Title",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur",
      actions: ["Réagir", "Supprimer"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" float-right m-10 bg-white shadow-md rounded p-6 w-72">
        <Calendar />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6 m-5">Les Annonces</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {annonces.map((annonce, index) => (
          // <Card
          //   key={index}
          //   title={annonce.title}
          //   description={annonce.description}
          //   actions={annonce.actions}
          // />
          <Annonce
            key={index}
            title={annonce.title}
            description={annonce.description}
            actions={annonce.actions}
          />
        ))}
      </div>
    </div>
  );
}
