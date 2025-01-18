import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse le corps de la requête
    const body = await request.json();
    const {
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
    } = body;

    // Validation des données (simplifiée ici)
    if (
      !nom ||
      !prenom ||
      !email ||
      !mot_de_passe ||
      !id_role ||
      !sexe ||
      !type
    ) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }
    // Vérifiez si l'email ou le profil existe déjà
    const existingUser = await prisma.utilisateurs.findFirst({
      where: {
        OR: [{ email }, { profil }],
      },
    });

    if (existingUser) {
      const message =
        existingUser.email === email
          ? "Cet email est déjà utilisé."
          : "Ce profil est déjà utilisé.";
      return NextResponse.json({ error: message }, { status: 400 });
    }
    // Création d'un utilisateur dans la base de données
    const utilisateur = await prisma.utilisateurs.create({
      data: {
        nom,
        prenom,
        email,
        mot_de_passe, // Assurez-vous de hasher le mot de passe dans une vraie application
        id_role,
        sexe,
        type,
        telephone,
        adresse,
        profil,
      },
    });

    return NextResponse.json(utilisateur, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    return NextResponse.json(
      { error: "Erreur interne au serveur" },
      { status: 500 }
    );
  }
}
