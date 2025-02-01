"use client";
import { createContext } from "react";
//TODO: Travaillez avec ça SVP!!! ok? ok?
//TODO: A Modifier selon le besoin --> Valeur possible "admin", "professeur", "etudiant"
export const UserContext = createContext({
  userRole: "etudiant",
});
