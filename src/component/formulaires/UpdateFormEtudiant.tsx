"use client";

import { useState, useEffect } from "react";
import { updateEtudiant } from "@/actions/updateEtudiant";

interface UpdateFormProps {
  etudiantId: number;
}

export default function UpdateFormEtudiant({ etudiantId }: UpdateFormProps) {
  const [etudiant, setEtudiant] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Récupérer les informations de l'étudiant
    fetch(`${process.env.URL_BASE}/api/etudiants/${etudiantId}`)
      .then((res) => res.json())
      .then((data) => {
        setEtudiant(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement de l'étudiant:", err);
        setError("Impossible de récupérer les informations.");
        setLoading(false);
      });
  }, [etudiantId]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    try {
      await updateEtudiant(etudiantId, formData);
      alert("Étudiant mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      alert("Une erreur est survenue.");
    }
  }

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" name="nom" defaultValue={etudiant.nom} required />
      </label>
      <label>
        Prénom :
        <input type="text" name="prenom" defaultValue={etudiant.prenom} required />
      </label>
      <label>
        Email :
        <input type="email" name="email" defaultValue={etudiant.email} required />
      </label>
      <label>
        Téléphone :
        <input type="text" name="telephone" defaultValue={etudiant.telephone || ""} />
      </label>
      <label>
        Adresse :
        <input type="text" name="adresse" defaultValue={etudiant.adresse || ""} />
      </label>
      <label>
        Sexe :
        <select name="sexe" defaultValue={etudiant.sexe}>
          <option value="M">Homme</option>
          <option value="F">Femme</option>
        </select>
      </label>
      <label>
        Date de naissance :
        <input type="date" name="date_naissance" defaultValue={etudiant.date_naissance} required />
      </label>
      <label>
        Profil :
        <input type="text" name="profil" defaultValue={etudiant.profil} required />
      </label>
      <label>
        ID Filière :
        <input type="number" name="id_filiere" defaultValue={etudiant.id_filiere} required />
      </label>

      <button type="submit">Mettre à jour</button>
    </form>
  );
}
