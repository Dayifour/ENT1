import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function POST(req, res) {
  if (req.method === "POST") {
    const { email, password, nom, prenom } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.utilisateurs.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel étudiant
    const newEtudiant = await prisma.utilisateurs.create({
      data: {
        email,
        mot_de_passe: hashedPassword,
        nom,
        prenom,
        sexe: "M",
        type: "Etudiant",
        profil: "default",
        role: "default", //l'eurreur ici est que le role est un champ obligatoire et dans la base de données il n'y a pas de valeur par défaut
      },
    });

    return res.status(201).json(newEtudiant);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}
