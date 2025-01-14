"use client";

import { useState } from "react";

type EnseingantType = {
  id: string;
  nom: string;
  email: string;
  image: string;
  modules: string;
  classes: string;
  telephone: string;
  adresse: string;
};

const EnseignantTable = ({
  enseignants,
}: {
  enseignants: EnseingantType[];
}) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtrer les enseignants selon la recherche
  const filteredEnseignants = enseignants.filter(
    (enseignant) =>
      enseignant.nom.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.email.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.modules.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.classes.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.adresse.toLowerCase().includes(search.toLowerCase()) ||
      enseignant.telephone.includes(search)
  );

  // Pagination
  const totalPages = Math.ceil(filteredEnseignants.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEnseignants = filteredEnseignants.slice(
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
        <h1 className="text-xl font-bold mb-4">Liste des Enseignants</h1>
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            className="border rounded p-2 w-1/3"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="text-green-500 text-2xl">+</button>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-2">Infos</th>
              <th className="p-2">ID_Enseignant</th>
              <th className="p-2">Modules</th>
              <th className="p-2">Classes</th>
              <th className="p-2">Téléphone</th>
              <th className="p-2">Adresses</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEnseignants.map((enseignant) => (
              <tr key={enseignant.id} className="border-b-2 border-b-gray-400">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    {enseignant.image ? (
                      <img
                        src={enseignant.image}
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
                      <div>{enseignant.nom}</div>
                      <div className="text-sm text-gray-500">
                        {enseignant.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-2">{enseignant.id}</td>
                <td className="p-2">{enseignant.modules}</td>
                <td className="p-2">{enseignant.classes}</td>
                <td className="p-2">{enseignant.telephone}</td>
                <td className="p-2">{enseignant.adresse}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-green-500">👁️</button>
                    <button className="text-red-500">🗑️</button>
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
    </div>
  );
};

export default EnseignantTable;
