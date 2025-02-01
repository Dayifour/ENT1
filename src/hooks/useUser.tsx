"use client";
import { createContext } from "react";
//TODO: Travaillez avec ça SVP!!!
//TODO: A Modifier selon le besoin --> Valeur possible "admin", "professeur", "etudiant"
export const UserContext = createContext({
  userRole: "admin",
});
