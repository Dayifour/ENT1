import Image from "next/image";
import Links from "./links/Links";

const links = [
  {
    image: "/icons/home.png",
    path: "/admin",
    title: "Acceuil",
  },
  {
    image: "/icons/presentation.png",
    path: "/admin/classes",
    title: "Classes",
  },
  {
    image: "/icons/friends.png",
    path: "/admin/enseignants",
    title: "Enseignants",
  },
  {
    image: "/icons/graduation-cap.png",
    path: "/admin/etudiants",
    title: "Etudiant",
  },
  {
    image: "/icons/promotion.png",
    path: "/admin/annonces",
    title: "Annonces",
  },
  {
    image: "/icons/grades.png",
    path: "/admin/result",
    title: "Résulat",
  },
  {
    image: "/icons/email.png",
    path: "/admin/messages",
    title: "Messages",
  },
  {
    image: "/icons/assessment.png",
    path: "/admin/sujets",
    title: "Sujets",
  },
];

const AdminNavbar = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-start">
      <div className="">
        <div className="flex flex-col  my-4 list">
          {links.map((link) => (
            <Links
              image={link.image}
              path={link.path}
              title={link.title}
              key={link.path}
            />
          ))}
        </div>
      </div>
      <div className="">
        <div className="flex flex-col  my-4 list">
          <li className="mx-6 hover:bg-green-100 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/user.png" width={20} height={20} alt="" />
            <p>Profil</p>
          </li>
          <li className="mx-6 hover:bg-green-100 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/settings.png" width={20} height={20} alt="" />
            <p>Paramètre</p>
          </li>
          <li className="mx-6 hover:bg-green-100 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/out.png" width={20} height={20} alt="" />
            <p>Déconnexion</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
