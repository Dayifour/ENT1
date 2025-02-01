"use client";
// j'ai ransformer mon formulaire en composant pour pouvoir l'utiliser dans plusieurs pages
import { useEffect, useState } from "react";
import { registerUser } from "@/actions/signupetudiant";

type EtudiantType = {
  nom: string;
  prenom: string;
  email: string;
  mot_de_passe: string;
  id_role: number;
  sexe: string;
  telephone: string;
  adresse: string;
  profil: string;
  date_naissance: string;
  id_filiere: number;
};

type RegisterFormProps = {
  onSubmit: (formData: FormData) => Promise<void>; //  LA fonction qui est  appelée lors de la soumission
  title?: string; // Titre du formulaire a voir en bas
  initialValues?: EtudiantType; // Ajouter initialValues pour pré-remplir les champs
};

const RegisterFormEtudiant = ({ 
  onSubmit,
   title = "Créer un étudiant" ,
   initialValues,
  }: RegisterFormProps) => {

    // Gérer l'état du formulaire en fonction des initialValues
  const [formData, setFormData] = useState<EtudiantType>({
    nom: "",
    prenom: "",
    email: "",
    mot_de_passe: "",
    id_role: 0,
    sexe: "M",
    telephone: "",
    adresse: "",
    profil: "",
    date_naissance: "",
    id_filiere: 0,
  });
 // Si initialValues sont passées, mettre à jour l'état du formulaire
 useEffect(() => {
  if (initialValues) {
    setFormData({
      nom: initialValues.nom || "",
      prenom: initialValues.prenom || "",
      email: initialValues.email || "",
      mot_de_passe: "", // Garder vide pour les mises à jour (à ne pas pré-remplir avec l'ancien mot de passe)
      id_role: initialValues.id_role || 0,
      sexe: initialValues.sexe || "M",
      telephone: initialValues.telephone || "",
      adresse: initialValues.adresse || "",
      profil: initialValues.profil || "",
      date_naissance: initialValues.date_naissance || "",
      id_filiere: initialValues.id_filiere || 0,
    });
  }
}, [initialValues]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formDataToSend = new FormData(event.currentTarget);

    try {
      await registerUser(formDataToSend); // Appel de la fonction de soumission
      setSuccess("Étudiant créé avec succès !");
    } catch (err) {
      setError("Erreur lors de la création de l'étudiant.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-bold">{title}</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className="flex flex-col gap-1 mt-6"> 
      <div className="flex gap-4 mt-4">

      <div>
        <label className="block text-gray-700 mb-2">Nom :</label>
        <input type="text" name="nom"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Prénom :</label>
        <input type="text" name="prenom"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Email :</label>
        <input type="email" name="email"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      </div>
      <div className="flex gap-4 mt-4">

      <div>
        <label className="block text-gray-700 mb-2">Mot de passe :</label>
        <input type="password" name="mot_de_passe"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Rôle ID :</label>
        <input type="number" name="id_role"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Sexe :</label>
        <select name="sexe" required>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </div>
      </div>
      <div className="flex gap-4 mt-4">

      <div>
        <label className="block text-gray-700 mb-2">Téléphone :</label>
        <input type="text" name="telephone"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Adresse :</label>
        <input type="text" name="adresse"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Profil :</label>
        <input type="text" name="profil"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      </div>
      <div className="flex gap-4 mt-4">

      <div>
        <label className="block text-gray-700 mb-2">Date de naissance :</label>
        <input type="date" name="date_naissance"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">ID Filière :</label>
        <input type="number" name="id_filiere"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Créer
      </button>
    </form>
  );
};

export default RegisterFormEtudiant;
