"use client";

import { useState } from "react";

// Définir le type des props
type UpdateEtudiantModalProps = {
  etudiant: {
    id: number;
    utilisateurs: {
      nom: string;
      prenom: string;
      email: string;
      telephone: string;
      adresse: string;
      profil: string;
    };
    filieres: {
      nom: string;
    };
  };
  onClose: () => void; // Fonction pour fermer le modal
  onUpdate: (id: number, updatedData: any) => Promise<void>; // Fonction pour mettre à jour l'étudiant
};

export default function UpdateEtudiantModal({
  etudiant,
  onClose,
  onUpdate,
}: UpdateEtudiantModalProps) {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: etudiant.utilisateurs.nom,
    prenom: etudiant.utilisateurs.prenom,
    email: etudiant.utilisateurs.email,
    telephone: etudiant.utilisateurs.telephone,
    adresse: etudiant.utilisateurs.adresse,
    filiere: etudiant.filieres.nom,
  });

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate(etudiant.id, formData); // Appeler la fonction de mise à jour
    onClose(); // Fermer le modal après la mise à jour
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Empêcher la fermeture du modal lors d'un clic à l'intérieur
      >
        <h2 className="text-xl font-bold mb-4">Modifier l'étudiant</h2>
        <form onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Champ Prénom */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Champ Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Champ Téléphone */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Téléphone</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Champ Adresse */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Adresse</label>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Champ Filière */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Filière</label>
            <input
              type="text"
              name="filiere"
              value={formData.filiere}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Boutons Annuler et Enregistrer */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}