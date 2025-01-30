import React, { useState } from "react";

const TableauD = () => {
  const [data, setData] = useState([
    { module: "Mathématiques", duree: "2 heures", professeur: "M. Dupont", telephone: "0102030405" },
    { module: "Physique", duree: "1.5 heures", professeur: "Mme Martin", telephone: "0607080910" },
    { module: "Informatique", duree: "3 heures", professeur: "M. Lefevre", telephone: "0123456789" },
  ]);

  const addRow = () => {
    setData([
      ...data,
      { module: "Nouvelle matière", duree: "1 heure", professeur: "Nouveau Professeur", telephone: "0000000000" }
    ]);
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full table-auto text-left text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">Modules</th>
            <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">Durée</th>
            <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">Professeur</th>
            <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">Téléphone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 border-b border-gray-300">{row.module}</td>
              <td className="px-4 py-2 border-b border-gray-300">{row.duree}</td>
              <td className="px-4 py-2 border-b border-gray-300">{row.professeur}</td>
              <td className="px-4 py-2 border-b border-gray-300">{row.telephone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Ajouter une ligne
      </button>
    </div>
  );
};

export default TableauD;
