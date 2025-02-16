import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.enseignant.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Professeur supprimé avec succès" },
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