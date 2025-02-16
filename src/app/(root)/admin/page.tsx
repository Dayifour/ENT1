"use client";
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import Statistique from "@/components/statistique/statistique";

export default function Home() {
  const user = {
    firstName: "Mamadou",
    lastName: "Ba",
    email: "ba6353158@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Bienvenue"
            subtext="Technolab ista le meilleure"
            user="Douba"
          />
        </header>
        <Statistique />
      </div>
      <RightSidebar user={user} />
    </section>
  );
}
