"use client";
import { UserContext } from "@/hooks/useUser";
import Image from "next/image";
import { useContext } from "react";
import Links from "./links/Links";
import { AdminLinks, EtudiantLinks, ProfesseurLinks } from "./UsersLinks";

const AdminNavbar = () => {
  const user = useContext(UserContext);
  let links: any[] = [];
  user.userRole === "admin"
    ? (links = AdminLinks)
    : user.userRole === "professeur"
    ? (links = ProfesseurLinks)
    : user.userRole === "etudiant"
    ? (links = EtudiantLinks)
    : (links = []);
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
          <Links
            path="/admin/parametre"
            image="/icons/settings.png"
            title="parametre"
          />
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
