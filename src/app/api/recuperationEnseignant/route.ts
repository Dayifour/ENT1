import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
// L'API qui permet de recuperer les etudiants depuis la base de donnees
export async function GET() {
  try {
    const enseignant = await prisma.enseignant.findMany({
      //la puissance de prisma est sans limite on peut faire des jointures pour recuperer les informations des tables liées
      include: {
        utilisateurs: {
          select: { 
            nom: true,
            prenom: true,
            email: true,
            telephone: true,
            adresse: true,
            profil: true,
          },
        },
        cours: {
          include: {
            filieremodule: {
              include: {
                filieres: {
                  select: { nom: true },
                },
                modules: {
                  select: { nom: true },
                },
              },
            },
          },
        },
      },
    });
    console.log(enseignant);

    return NextResponse.json(enseignant, { status: 200 });
  } catch (error) {
    console.error("Erreur :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des étudiants" },
      { status: 500 }
    );
  }
}
