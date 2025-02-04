"use server";

import prisma from "@/lib/prisma";

export async function registerUser(formData: FormData) { 
  try {
    const nom = formData.get("nom") as string;
    const prenom = formData.get("prenom") as string;
    const email = formData.get("email") as string;
    const mot_de_passe = formData.get("mot_de_passe") as string;
    const id_role = parseInt(formData.get("id_role") as string, 10);
    const sexe = formData.get("sexe") as "M" | "F";
    const telephone = formData.get("telephone") as string | null;
    const adresse = formData.get("adresse") as string | null;
    const profil = formData.get("profil") as string;
    const date_naissance = formData.get("date_naissance") as string;
    const id_filiere = parseInt(formData.get("id_filiere") as string, 10);

    // Appelle l'API pour inscrire l'étudiant
    const res = await fetch(`${process.env.URL_BASE}/api/inscription/etudiant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom,
        prenom,
        email,
        mot_de_passe,
        id_role: 2,
        sexe,
        telephone,
        adresse,
        profil,
        type: "Etudiant",
        date_naissance,
        id_filiere,
      }),
    });

    if (!res.ok) {
      throw new Error("Erreur lors de la création de l'étudiant");
    }

    return await res.json();
  } catch (error) {
    console.error("Erreur dans registerUser:", error);
    throw error;
  }
}
