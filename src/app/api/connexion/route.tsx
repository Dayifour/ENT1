import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(
  req: { method: string; body: { email: any; password: any } },
  res: any
) {
  if (req.method == "POST") {
    const { email, password } = req.body;
    const user = await prisma.utilisateurs.findUnique({
      where: {
        email,
        //Le mot de passe doit être crypté c'est pour cela que je ne l'ai pas mis a vous de jouer je prepare le terrain
      },
    });
    if (user) {
      return new Response(JSON.stringify("Connexion valid"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("nada"), {
        status: 501,
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "Erreur" }), {
      status: 401,
    });
  }
}
