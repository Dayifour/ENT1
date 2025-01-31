"use server";

import prisma from "@/lib/prisma";

export async function registerTeacher(formData: FormData) {
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
    const specialite = formData.get("specialite") as string;
    const cours = formData.get("cours") as string; // Tableau de cours (au format JSON)

    // Appelle l'API pour inscrire l'enseignant
    const res = await fetch(`${process.env.URL_BASE}/api/inscription/prof`, {
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
        telephone,
        adresse,
        profil,
        type: "Enseignant",
        specialite,
        cours,
      }),
    });

    if (!res.ok) {
      throw new Error("Erreur lors de la création de l'enseignant");
    }

    return await res.json();
  } catch (error) {
    console.error("Erreur dans registerTeacher:", error);
    throw error;
  }
}
