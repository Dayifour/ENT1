"use client";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { UserContext } from "@/hooks/useUser";
import { AdminLinks, EtudiantLinks, ProfesseurLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
const Sidebar = () => {
  const user = useContext(UserContext);
  const links: any[] =
    user.userRole === "admin"
      ? AdminLinks
      : user.userRole === "professeur"
      ? ProfesseurLinks
      : user.userRole === "etudiant"
      ? EtudiantLinks
      : [];
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="mb-6 cursor-pointer items-center gap-2">
          <Image
            src="/logo.ico"
            alt="logo"
            width={36}
            height={36}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">TECHNOLAB ISTA </h1>
        </Link>
        {links.map((items) => {
          const isActive =
            pathname === items.path ||
            (pathname &&
              pathname.startsWith(`${user.userRole}/${items.path}/`));
          return (
            <Link
              href={items.path}
              key={items.title}
              className={cn(
                "sidebar-link",
                { "bg-bank-gradient": isActive },
                items.title === "Profil" ? "mt-10" : ""
              )}
            >
              <div className="relative size-4">
                <Image
                  src={items.image}
                  alt={items.title}
                  width={24}
                  height={24}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                ></Image>
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {items.title}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
    </section>
  );
};

export default Sidebar;
