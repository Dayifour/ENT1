import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
// L'API qui permet de recuperer les etudiants depuis la base de donnees 
export async function GET() {  
  try {
    const etudiants = await prisma.etudiants.findMany({
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
        filieres: {
          select: {
            nom: true,
          },
        },
      },
    });

    return NextResponse.json(etudiants, { status: 200 }); 
  } catch (error) {
    console.error("Erreur :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des étudiants" },
      { status: 500 }
    );
  }
}
