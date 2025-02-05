import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
// L'API qui permet de recuperer les etudiants depuis la base de donnees
export async function GET() {
  try {
    const students = await prisma.etudiants.findMany({
      include: {
        utilisateurs: true, // Inclure les informations de l'utilisateur
        filieres: true, // Inclure la filière de l'étudiant
        notes: true, // Inclure les notes de l'étudiant
        paiements: true, // Inclure les paiements effectués
      },
    });

    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error("Erreur :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des étudiants" },
      { status: 500 }
    );
  }
}
