import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { nom, prenom, email, telephone, adresse, filiere } = await request.json();

  try {
    const updatedEtudiant = await prisma.etudiants.update({
      where: { id: Number(id) },
      data: {
        utilisateurs: {
          update: {
            nom,
            prenom,
            email,
            telephone,
            adresse,
          },
        },
        filieres: {
          update: {
            nom: filiere,
          },
        },
      },
    });

    return NextResponse.json(updatedEtudiant, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    return NextResponse.json(
      { error: "Échec de la mise à jour" },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.etudiants.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Étudiant supprimé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    return NextResponse.json(
      { error: "Échec de la suppression" },
      { status: 500 }
    );
  }
}
