"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { UserContext } from "@/hooks/useUser";
import { AdminLinks, EtudiantLinks, ProfesseurLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const MobileNav = () => {
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
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-white"
          aria-describedby="menu-description"
        >
          <SheetTitle>Menu</SheetTitle>
          <Link
            href="/"
            className=" cursor-pointer flex items-center gap-1 px-4"
          >
            <Image src="/logo.ico" alt="logo" width={34} height={34} />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Technolab ISTA
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16">
                {links.map((items) => {
                  const isActive =
                    pathname === items.path ||
                    (pathname &&
                      pathname.startsWith(`${user.userRole}/${items.path}/`));
                  return (
                    <SheetClose asChild key={items.path}>
                      <Link
                        href={items.path}
                        key={items.title}
                        className={cn(
                          "mobilenav-sheet_close ",
                          {
                            "bg-bank-gradient": isActive,
                          },
                          items.title === "Profil" ? "mt-8" : ""
                        )}
                      >
                        <Image
                          src={items.image}
                          alt={items.title}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        ></Image>
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {items.title}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
export default MobileNav;
