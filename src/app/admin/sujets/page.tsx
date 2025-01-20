"use client";
import { useEffect, useState } from "react";

// Fonction pour générer des données fictives pour les modules
export const generateModules = (count) => {
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
    const generatedData = generateModules(100);
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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>Liste des Modules</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Nom Module
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Enseignants
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Classes
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {row.nomModule}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {row.enseignant}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {row.classe}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <button style={{ marginRight: "5px" }}>✏️</button>
                <button>🗑️</button>
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
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          ◀️
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          ▶️
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
