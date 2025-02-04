import { registerTeacher } from "@/actions/signupprofesseur";
import { useState } from "react";

type RegisterFormProps = {
  onSubmit: (formData: FormData) => Promise<void>; //  LA fonction qui est  appelée lors de la soumission
  title?: string; // Titre du formulaire a voir en bas
};

const RegisterFormEnseignant = ({ onSubmit, title = "Créer un Enseignant" }: RegisterFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
       await registerTeacher(formData);
      setSuccess("Enseignant créé avec succès !");
    } catch (err) {
      setError("Erreur lors de la création de l'enseignant.");
    }
  } 
  
  return (
    <div> 
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl font-bold">Créer un enseignant</h1> 
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
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
        <label className="block text-gray-700 mb-2">Sexe :</label>
        <select name="sexe" className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
          <option value="M"  >Masculin</option>
          <option value="F"  >Feminin</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Téléphone :</label>
        <input type="text" name="telephone"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      </div>

      <div className="flex gap-4 mt-4">
      <div>
        <label className="block text-gray-700 mb-2">Adresse :</label>
        <input type="text" name="adresse"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Profil :</label>
        <input type="text" name="profil"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Spécialité :</label>
        <input type="text" name="specialite"  className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
      </div>
      </div>

      <div className="flex gap-4 mt-4">
      <div>
        <label className="block text-gray-700 mb-2">Cours :</label>
        <input
          type="text"
          name="cours"
          placeholder="Entrez les cours séparés par des virgules"
           className="w-[260px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      </div>
      
      </div>
      <div className="flex gap-4 mt-4"> 
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Créer
      </button>
      </div>
    </form>
    </div>
  );
}
export default RegisterFormEnseignant;