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
    }
  }, [router]);

  return <div>page</div>;
};

export default page;
