import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
import UserCard from "@/component/userCard/UserCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

const userData = {
  image: "/img/man2.jpg",
  nom: "BOCOUM ALY ABDULLAH",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad, exercitationem consectetur a beatae nobis culpa tenetur incidunt",
  email: "bocoumaly@gmail.com",
  adresse: "SIRAKORO-MEGEUTANA",
  date: "Janvier 2024",
  tel: "70 58 83 31",
};

const annonces = [
  { id: 1, titre: "Titre de l'annonce", desc: "Description de l'annonce 1." },
  { id: 2, titre: "Titre de l'annonce", desc: "Description de l'annonce 2." },
  { id: 3, titre: "Titre de l'annonce", desc: "Description de l'annonce 3." },
];

export default function HomePage() {
  return (
    <div className="w-full mt-16 p-5 gap-10 flex flex-col items-center bg-gray-100">
      {/* Section supérieure */}
      <div className="flex gap-5 w-full max-w-7xl">
        {/* Colonne gauche */}
        <div className="flex flex-col gap-5 w-1/3">
          <UserCard item={userData} />
          <div className="bg-white shadow-md h-[300px] rounded-lg p-5">
            <h3 className="font-bold text-lg">Raccourcis</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Classes du Prof</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Autre Raccourci</button>
            </div>
          </div>
        </div>

        {/* Colonne centrale */}
        <div className="flex flex-col gap-5 w-2/3">
          <div className="grid grid-cols-2 gap-5">
            <SmallIconCard photoName="/icons/calendarColor.png" stats="90%" name="Présence" />
            <SmallIconCard photoName="/icons/book.png" stats="3" name="Filière" />
            <SmallIconCard photoName="/icons/text-books.png" stats="10" name="Matière" />
            <SmallIconCard photoName="/icons/teach.png" stats="9" name="Classes" />
          </div>
          <div className="bg-white shadow-md h-[400px] rounded-lg p-5">
            <h3 className="font-bold text-lg">Calendrier</h3>
            <div className="grid grid-cols-5 gap-2 mt-3">
              {Array.from({ length: 25 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-center py-2 rounded border border-gray-200"
                >
                  8:00 AM - 8:45 <br /> Math
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section inférieure */}
      <div className="flex gap-5 w-full max-w-7xl">
        <div className="bg-white shadow-md w-1/2 rounded-lg p-5">
          <h3 className="font-bold text-lg">Performance</h3>
          <div className="mt-3">
            {/* Ajouter un graphique ici */}
            <p>Graphique des performances (intégrer chart.js)</p>
          </div>
        </div>
        <div className="bg-white shadow-md w-1/2 rounded-lg p-5">
          <h3 className="font-bold text-lg">Annonces</h3>
          <ul className="mt-3">
            {annonces.map((annonce) => (
              <li key={annonce.id} className="border-b border-gray-200 py-2">
                <h4 className="font-semibold">{annonce.titre}</h4>
                <p className="text-sm text-gray-600">{annonce.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
