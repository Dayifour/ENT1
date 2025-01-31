import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
// L'API qui permet de recuperer les etudiants depuis la base de donnees 
export async function GET() {  
  try {
    const enseignants = await prisma.enseignant.findMany({
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
          select: {
            filieremodule: true,
            id_filiere_module: true,
          },
        },
        
      },
    });

    return NextResponse.json(enseignants, { status: 200 }); 
  } catch (error) {
    console.error("Erreur :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des étudiants" },
      { status: 500 }
    );
  }
}
