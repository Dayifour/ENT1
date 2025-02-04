import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
import UserCard from "@/component/userCard/UserCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

const userData = {
  image: "/img/man2.jpg",
  nom: "ALY ABDULLAH",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad, exercitationem consectetur a beatae nobis culpa tenetur incidunt",
  email: "alyabdullah@gmail.com",
  adresse: "SIRAKORO MEUGEUTANA",
  date: "Fevrier 2025",
  tel: "70 58 83 31",
};

const annonces = [
  {
    id: 1,
    titre: "Titre de l'annonce",
    desc: "Le lorem ipsum est, en imprimerie, une suite de mots.",
  },
  {
    id: 2,
    titre: "Titre de l'annonce",
    desc: "Le lorem ipsum est, en imprimerie, une suite de mots.",
  },
  {
    id: 3,
    titre: "Titre de l'annonce",
    desc: "Le lorem ipsum est, en imprimerie, une suite de mots.",
  },
];

export default function HomePage() {
  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-center items-center">
      <div className="flex gap-5 min-h-[clac(100vh-100px)] items-start">
        <div className="flex flex-col gap-5 w-[600px] h-full">
          <UserCard item={userData} />
          {/* <div className="bg-userCard h-[500px] rounded-lg"> */}
          <div className="bg-white shadow-md rounded-lg p-5">
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
          {/* </div> */}
        </div>
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col gap-5 h-[250px]">
            <div className="flex gap-5">
              <SmallIconCard
                photoName="/icons/calendarColor.png"
                stats="90%"
                name="Présence"
              />
              <SmallIconCard
                photoName="/icons/book.png"
                stats="3"
                name="Filière"
              />
            </div>
            <div className="flex h-full gap-5">
              <SmallIconCard
                photoName="/icons/text-books.png"
                stats="10"
                name="Matière"
              />
              <SmallIconCard
                photoName="/icons/teach.png"
                stats="9"
                name="classes"
              />
            </div>
          </div>
          {/* <div className="bg-userCard h-[500px] rounded-lg"> */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold text-lg">Raccourci</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                les classes du prof
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                les classes du prof
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                les classes du prof
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                les classes du prof
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold text-lg">Performance</h3>
            <div className="mt-3">
              <p>Graphique des performances</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-5">
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
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col gap-10"></div>
    </div>
  );
}
