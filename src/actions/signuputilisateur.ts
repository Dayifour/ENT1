"use server";

import prisma from "@/lib/prisma";

export async function registerUser(formData: FormData) {
  try {
    const nom = formData.get("nom") as string;
    const prenom = formData.get("prenom") as string;
    const email = formData.get("email") as string;
    const mot_de_passe = formData.get("mot_de_passe") as string;
    const id_role = parseInt(formData.get("id_role") as string, 5);
    const sexe = formData.get("sexe") as "M" | "F";
    const type = formData.get("type") as "Etudiant" | "Enseignant" | "Membre";
    const telephone = formData.get("telephone") as string | null;
    const adresse = formData.get("adresse") as string | null;
    const profil = formData.get("profil") as string;

    // Envoie la requête à l'API
    const res = await fetch(`${process.env.URL_BASE}/api/inscription/utilisateur`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom, 
        prenom,
        email,
        mot_de_passe,
        id_role,
        sexe,
        type,
        telephone,
        adresse,
        profil,
      }),
    });

    if (!res.ok) {
      throw new Error("Erreur lors de la création de l'utilisateur");
    }

    return await res.json();
  } catch (error) {
    console.error("Erreur dans registerUser:", error);
    throw error;
  }
}
