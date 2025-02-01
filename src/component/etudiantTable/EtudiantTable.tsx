"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { registerUser } from "@/actions/signupetudiant";
// import RegisterFormEtudiant from "/component/formulaires/RegisterFormEtudiant";
import RegisterFormEtudiant from "../formulaires/RegisterFormEtudiant ";
import UpdateEtudiantModal from "../formulaires/UpdateEtudiantModal"; // Assure-toi d'importer le composant

// Permet de définir le type d'un étudiant
type EtudiantType = {
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

const EtudiantTable = () => {
  const [etudiants, setEtudiants] = useState<EtudiantType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSur, setIsSur] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // État pour le modal de mise à jour
  const [selectedEtudiant, setSelectedEtudiant] = useState<EtudiantType | null>(null); // État pour l'étudiant sélectionné

  const toggleIsSur = () => {
    setIsSur(!isSur);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [etudiantToUpdate, setEtudiantToUpdate] = useState<EtudiantType | null>(null);
  const [isSur, setIsSur] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const itemsPerPage = 6;

  // Récupérer les étudiants depuis l'API
  useEffect(() => {
    const fetchEtudiants = async () => {
      const res = await fetch("/api/recuperation");
      if (!res.ok) {
        console.log("Erreur API :", res.status);
        return;
      }
      const data = await res.json();
      console.log("Données récupérées :", data);
      setEtudiants(data);
    };

    fetchEtudiants();
  }, []);

  // Filtrer les étudiants selon la recherche de l'utilisateur
  const filteredEtudiants = etudiants.filter(
    (etudiant) =>
      etudiant.utilisateurs.nom.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.utilisateurs.email.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.utilisateurs.telephone.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.utilisateurs.adresse.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.utilisateurs.telephone.includes(search)
  );

  // Pagination
  const totalPages = Math.ceil(filteredEtudiants.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEtudiants = filteredEtudiants.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Gérer la recherche
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleRegisterSubmit = async (formData: FormData) => {
    await registerUser(formData);
  };

  // Fonction pour gérer la mise à jour d'un étudiant
  const handleUpdate = async (id: number, updatedData: any) => {
    try
    {
    const response = await fetch(`/api/etudiant/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    if (response.ok) {
      // Rafraîchir la liste des étudiants après la mise à jour
      const res = await fetch("/api/recuperation");
      const data = await res.json();
      setEtudiants(data);
    }
    else {
      console.error("Échec de la mise à jour :", response.statusText);
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
  }  };

  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-start items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-4">Liste des Étudiants</h1>
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            className="border rounded p-2 w-1/3"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="text-green-500 text-2xl" onClick={toggleModal}>
            +
          </button>
        </div>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-3">Infos</th>
              <th className="p-3">ID_Etudiant</th>
              <th className="p-3">Classes</th>
              <th className="p-3">Téléphone</th>
              <th className="p-3">Adresses</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEtudiants.map((etudiant) => (
              <tr key={etudiant.id} className="border-b-2 border-b-gray-400">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    {etudiant.utilisateurs.profil ? (
                      <img
                        src={etudiant.utilisateurs.profil}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <img
                        src="/icons/default-avatar.png"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div>
                      <div>
                        {etudiant.utilisateurs.nom} {etudiant.utilisateurs.prenom}
                      </div>
                      <div className="text-sm text-gray-500">
                        {etudiant.utilisateurs.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">{etudiant.id}</td>
                <td className="p-3">{etudiant.filieres.nom}</td>
                <td className="p-3">{etudiant.utilisateurs.telephone}</td>
                <td className="p-3">{etudiant.utilisateurs.adresse}</td>
                <td className="p-3">
                  <div className="flex gap-3">
                    <Image
                      src="/icons/pencil.png"
                      alt="update"
                      width={20}
                      height={20}
                      onClick={() => {
                        setSelectedEtudiant(etudiant);
                        setIsUpdateModalOpen(true);
                      }}
                      className="cursor-pointer"
                    />
                    <Image
                      src="/icons/eye.png"
                      alt="view"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/icons/delete.png"
                      alt="delete"
                      width={20}
                      height={20}
                      onClick={toggleIsSur}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <div>
            Page {currentPage} sur {totalPages}
          </div>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Overlay et formulaire modal pour l'ajout d'un étudiant */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg p-3 shadow-lg lg:px-8 lg:py-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <RegisterFormEtudiant
              onSubmit={handleRegisterSubmit}
              title="Inscription d'un nouvel étudiant"
            />
          </div>
        </div>
      )}

      {/* Overlay et formulaire modal pour la mise à jour d'un étudiant */}
      {isUpdateModalOpen && selectedEtudiant && (
        <UpdateEtudiantModal
          etudiant={selectedEtudiant}
          onClose={() => setIsUpdateModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}

      {/* Overlay et modal de confirmation pour la suppression */}
      {isSur && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleIsSur}
        >
          <div
            className="bg-white rounded-lg p-2 shadow-lg lg:px-8 lg:py-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-center">Supprimer un Etudiant</h2>
            <form>
              <div className="flex gap-2 text-center flex-col mt-6">
                <div className="text-lg flex justify-center font-medium w-[300px]">
                  Êtes-vous sûr de vouloir effectuer cette opération?
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-xl bg-green-500 rounded-xl px-10 py-2 text-white">
                    OUI
                  </button>
                  <button className="text-xl bg-red-500 rounded-xl px-10 py-2 text-white">
                    NON
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EtudiantTable;
