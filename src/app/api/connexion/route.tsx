import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Lire et parser le corps de la requête
    const body = await req.json();
    const { email, password } = body;

    // Validation des champs
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email et mot de passe sont requis" }),
        { status: 400 }
      );
    }

    // Recherche de l'utilisateur
    const user = await prisma.utilisateurs.findUnique({
      where: { email }, // 'email' doit être unique dans le schéma Prisma
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Utilisateur non trouvé" }),
        { status: 404 }
      );
    }

    // Vérification du mot de passe
    if (user.mot_de_passe !== password) {
      return new Response(
        JSON.stringify({ error: "Mot de passe incorrect" }),
        { status: 401 }
      );
    }

    // Connexion réussie
    return new Response(
      JSON.stringify({ message: "Connexion réussie", user }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur" }),
      { status: 500 }
    );
  }
}
