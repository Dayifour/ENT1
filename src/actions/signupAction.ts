"use server";

import prisma from "@/lib/prisma";
import { RegisterFormSchema } from "@/lib/rules";

export async function register(
  state: any,
  formData: { get: (key: string) => any }
) {
  try {
    // Validation des données avec Zod
    const result = RegisterFormSchema.safeParse({
      matricule: formData.get("matricule"),
      id_utilisateur: parseInt(formData.get("id_utilisateur")),
      date_naissance: formData.get("date_naissance"),
      id_filiere: parseInt(formData.get("id_filiere")),
    });
 
    if (!result.success) {
      console.error("Validation errors:", result.error.errors);
      return { success: false, error: "Invalid form data" };
    }

    const { matricule, id_utilisateur, date_naissance, id_filiere } = result.data;

    // Insertion dans la base de données avec Prisma
    const student = await prisma.etudiants.create({
      data: {
        matricule,
        id_utilisateur,
        date_naissance: new Date(date_naissance),
        id_filiere,
      },
    });

    return { success: true, student };
  } catch (error) {
    console.error("Error during registration:", (error as Error).message);
    return { success: false, error: (error as Error).message };
  }
}
