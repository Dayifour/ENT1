"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const userRole = "admin";
const page = () => {
  const router = useRouter();

  useEffect(() => {
    // Vérifie si le rôle est admin
    if (userRole === "admin") {
      router.push("/admin"); // Redirige vers la page admin
    } else if (userRole === "proffesseur") {
      router.push("/professeur");
    } else if (userRole === "etudiant") {
      router.push("/etudiant");
    } else {
      router.push("/login");
    }
  }, [router]);

  return <div>page</div>;
};

export default page;
