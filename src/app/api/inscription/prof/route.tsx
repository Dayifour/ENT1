"use server";

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
      specialite, // Spécifique aux enseignants
    } = body;

    // Validation des données utilisateur
    if (
      !nom ||
      !prenom ||
      !email ||
      !mot_de_passe ||
      !id_role ||
      !sexe ||
      !type ||
      !specialite // Validation spécifique aux enseignants
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

    // Création d'un utilisateur dans la table `utilisateurs`
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

    // Si l'utilisateur est de type "Enseignant", ajoutez les données dans `enseignant`
    if (type === "Enseignant") {
      // Création de l'enseignant
      const enseignant = await prisma.enseignant.create({
        data: {
          matricule: generateMatricule(), // Génère un matricule unique
          id_utilisateur: utilisateur.id_utilisateur,
          specialite,
        },
      });

      return NextResponse.json({ utilisateur, enseignant }, { status: 201 });
    }

    // Retourne uniquement les données utilisateur si ce n'est pas un enseignant
    return NextResponse.json(utilisateur, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création :", error);
    return NextResponse.json(
      { error: "Erreur interne au serveur" },
      { status: 500 }
    );
  }
}

// Fonction pour générer un matricule unique (exemple simple)
function generateMatricule() {
  return `ENS${Date.now()}`;
}
