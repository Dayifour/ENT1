
"use client";

import { useState } from "react";
import { registerTeacher } from "@/actions/signupprofesseur";

export default function RegisterTeacher() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await registerTeacher(formData);
      setSuccess("Enseignant créé avec succès !");
    } catch (err) {
      setError("Erreur lors de la création de l'enseignant.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <br /><br /><br /><br />
      <h1>Créer un enseignant</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <div>
        <label>Nom :</label>
        <input type="text" name="nom" required />
      </div>
      <div>
        <label>Prénom :</label>
        <input type="text" name="prenom" required />
      </div>
      <div>
        <label>Email :</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Mot de passe :</label>
        <input type="password" name="mot_de_passe" required />
      </div>
      <div>
        <label>Rôle ID :</label>
        <input type="number" name="id_role" required />
      </div>
      <div>
        <label>Sexe :</label>
        <select name="sexe" required>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </div>
      <div>
        <label>Téléphone :</label>
        <input type="text" name="telephone" />
      </div>
      <div>
        <label>Adresse :</label>
        <input type="text" name="adresse" />
      </div>
      <div>
        <label>Profil :</label>
        <input type="text" name="profil" required />
      </div>
      <div>
        <label>Spécialité :</label>
        <input type="text" name="specialite" required />
      </div>
      <div>
        <label>Cours :</label>
        <input
          type="text"
          name="cours"
          placeholder="Entrez les cours séparés par des virgules"
        />
      </div>
      <button type="submit">Créer</button>
    </form>
  );
}
