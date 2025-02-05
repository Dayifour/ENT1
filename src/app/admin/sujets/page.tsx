"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Fonction pour générer des données fictives pour les modules
export const generateModules = (count: number) => {
  const modules = [];
  const enseignants = [
    "Drissa Kouma",
    "Fatoumata Traore",
    "Mariam Keita",
    "Ibrahim Sangare",
    "Kadidia Diallo",
  ];
  const classes = [
    "Génie logiciel",
    "Informatique",
    "Télécom",
    "Cybersécurité",
    "Data Science",
  ];

  for (let i = 1; i <= count; i++) {
    modules.push({
      id: i,
      nomModule: `Framework Laravel`,
      enseignant: enseignants[Math.floor(Math.random() * enseignants.length)],
      classe: classes[Math.floor(Math.random() * classes.length)],
    });
  }

  return modules;
};

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    // Génération de données au chargement du composant
    const generatedData = generateModules(101);
    setData(generatedData);
  }, []);

  // Calcul des données à afficher sur la page courante
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Gestion de la pagination
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-start items-center">
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h3 className="text-3xl font-medium">Liste des Modules</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead className="bg-blue-100">
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "10px 25px" }}>
                Nom Module
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px 25px" }}>
                Enseignants
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px 25px" }}>
                Classes
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px 25px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row: any) => (
              <tr key={row.id}>
                <td style={{ border: "1px solid #ddd", padding: "10px 25px" }}>
                  {row.nomModule}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px 25px" }}>
                  {row.enseignant}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px 25px" }}>
                  {row.classe}
                </td>
                <td
                  className=" flex gap-3 border-1 py-[14px] px-[25px] text-center border border-[#ddd]"
                  // style={{
                  //   border: "1px solid #ddd",
                  //   padding: "10px 25px",
                  //   textAlign: "center",
                  // }}
                >
                  <Image
                    src="/icons/pencil.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/icons/delete.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="text-white bg-blue-500 bg-opacity-95 rounded-lg px-3 py-1"
          >
            Précedent
          </button>
          <span>
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-white bg-blue-500 bg-opacity-95 rounded-lg px-3 py-1"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
