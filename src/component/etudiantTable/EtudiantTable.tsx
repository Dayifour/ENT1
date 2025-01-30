"use client";
//TODO : Note Important //TODO J'ai changé tout les p-2 en p-3 pour que la table soit plus grande
import Image from "next/image";
import { useState } from "react";
import { registerUser } from "@/actions/signupetudiant";
import RegisterFormEtudiant from "@/component/formulaires/RegisterFormEtudiant ";
import Link from "next/link";

type EtudiantType = {
  id: string;
  nom: string;
  email: string;
  image: string;
  // modules: string;
  classes: string;
  telephone: string;
  adresse: string;
};

const EtudiantTable = ({ etudiants }: { etudiants: EtudiantType[] }) => {
  const handleRegisterSubmit = async (formData: FormData) => {
    await registerUser(formData);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isSur, setIsSur] = useState(false);

  const toggleIsSur = () => {
    setIsSur(!isSur);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtrer les etudiants selon la recherche
  const filteredEtudiants = etudiants.filter(
    (etudiant) =>
      etudiant.nom.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.email.toLowerCase().includes(search.toLowerCase()) ||
      // etudiant.modules.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.classes.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.adresse.toLowerCase().includes(search.toLowerCase()) ||
      etudiant.telephone.includes(search)
  );

  // Pagination
  const totalPages = Math.ceil(filteredEtudiants.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEtudiants = filteredEtudiants.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-start items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-4">Liste des Etudiants</h1>
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
              {/* <th className="p-3">Modules</th> */}
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
                    {etudiant.image ? (
                      <img
                        src={etudiant.image}
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
                      <div>{etudiant.nom}</div>
                      <div className="text-sm text-gray-500">
                        {etudiant.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">{etudiant.id}</td>
                {/* <td className="p-3">{etudiant.modules}</td> */}
                <td className="p-3">{etudiant.classes}</td>
                <td className="p-3">{etudiant.telephone}</td>
                <td className="p-3">{etudiant.adresse}</td>
                <td className="p-3">
                  <div className="flex gap-3">
                  <Link 
                  href={'/actions/etudiantAction/update/${etudiant.id}'}>
                    <Image
                      src="/icons/pencil.png"
                      alt="update"
                      width={20}
                      height={20}
                    />
                    </Link>
                    <Image
                      src="/icons/eye.png"
                      alt="delete"
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
      {/* Overlay et formulaire modal pour Etudiant */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          fdfdf
          
          <div
            className="bg-white rounded-lg p-3 shadow-lg lg:px-8 lg:py-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            hello
          <RegisterFormEtudiant
        onSubmit={handleRegisterSubmit}
        title="Inscription d'un nouvel étudiant"
      />
          </div>
         
        </div>
      )}
      {isSur && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleIsSur}
        >
          <div
            className="bg-white rounded-lg p-2 shadow-lg lg:px-8 lg:py-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-center">
              Supprimer un Enseignant
            </h2>
            <form>
              <div className="flex gap-2 text-center flex-col mt-6">
                <div className="text-lg flex justify-center font-medium w-[300px]">
                  êtes-vous sûr de vouloir effectuer cette opération?
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
}


function RegisterPage() {
  const handleRegisterSubmit = async (formData: FormData) => {
    await registerUser(formData);
  };
}
export default EtudiantTable;
