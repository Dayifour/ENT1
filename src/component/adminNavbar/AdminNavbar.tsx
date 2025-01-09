import Image from "next/image";

const AdminNavbar = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-start">
      <div className="">
        <ul className="flex flex-col  my-4 list">
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/home.png" width={20} height={20} alt="" />
            <p>Acceuil</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image
              src="/icons/presentation.png"
              width={20}
              height={20}
              alt=""
            />
            <p>Classes</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/friends.png" width={20} height={20} alt="" />
            <p>Enseignants</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image
              src="/icons/graduation-cap.png"
              width={20}
              height={20}
              alt=""
            />
            <p>Etudiants</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/promotion.png" width={20} height={20} alt="" />
            <p>Annonces</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/grades.png" width={20} height={20} alt="" />
            <p>Résulat</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/email.png" width={20} height={20} alt="" />
            <p>Messages</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/assessment.png" width={20} height={20} alt="" />
            <p>Sujets</p>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex flex-col  my-4 list">
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/user.png" width={20} height={20} alt="" />
            <p>Profil</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/settings.png" width={20} height={20} alt="" />
            <p>Paramètre</p>
          </li>
          <li className="mx-6 hover:bg-green-300 rounded-lg w-4/5 gap-2 items-center py-3 pl-1 flex">
            <Image src="/icons/out.png" width={20} height={20} alt="" />
            <p>Déconnexion</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
