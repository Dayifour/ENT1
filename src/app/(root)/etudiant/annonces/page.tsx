"use client";

import Annonce from "@/components/annonceCard/Annonce";
import Calendrier from "@/components/calendrier/Calendrier";

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
    <div className=" p-6 flex h-full justify-center gap-4 mt-16">
      <div className="gap-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 m-5">
          Les Annonces
        </h1>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
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
      <div className="">
        <Calendrier />
      </div>
    </div>
  );
}
