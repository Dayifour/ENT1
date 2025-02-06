"use client";
import { UserContext } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const user = useContext(UserContext);
const page = () => {
  const router = useRouter();

  useEffect(() => {
    // Vérifie si le rôle est admin
    if (user.userRole === "admin") {
      router.push("/admin"); // Redirige vers la page admin
    } else if (user.userRole === "proffesseur") {
      router.push("/professeur");
    } else if (user.userRole === "etudiant") {
      router.push("/etudiant");
    } else {
      router.push("/login");
    }
  }, [router]);

  return <div>page</div>;
};

export default page;
