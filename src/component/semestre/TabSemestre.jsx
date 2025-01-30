import { useState } from "react";

const semestersData = {
  Semestre1: [
    { Module: "PHP", NoteClasse: 12, NoteCompo: 11, NoteMatiere: 11.5, Validation: "Validée" },
    { Module: "JAVA", NoteClasse: 15, NoteCompo: 15, NoteMatiere: 15, Validation: "Validée" },
    { Module: "Swing", NoteClasse: 15, NoteCompo: 12, NoteMatiere: 13, Validation: "Validée" },
    { Module: "HTML/CSS", NoteClasse: 19, NoteCompo: 16, NoteMatiere: 17, Validation: "Validée" },
    { Module: "Angular", NoteClasse: 11, NoteCompo: 8, NoteMatiere: 9, Validation: "Non Validée" },
    { Module: "JavaScript", NoteClasse: 16, NoteCompo: 15, NoteMatiere: 16, Validation: "Validée" },
    { Module: "Spring Boot", NoteClasse: 13, NoteCompo: 17, NoteMatiere: 15, Validation: "Validée" },
    { Module: "CMS", NoteClasse: 19, NoteCompo: 19, NoteMatiere: 19, Validation: "Validée" },
    { Module: "React", NoteClasse: 14, NoteCompo: 13, NoteMatiere: 13.5, Validation: "Validée" },
  ],
  Semestre2: [
    { Module: "C#", NoteClasse: 14, NoteCompo: 10, NoteMatiere: 12, Validation: "Validée" },
    { Module: "Python", NoteClasse: 17, NoteCompo: 16, NoteMatiere: 16.5, Validation: "Validée" },
  ],
  Semestre3: [
    { Module: "SQL", NoteClasse: 13, NoteCompo: 11, NoteMatiere: 12, Validation: "Validée" },
    { Module: "NoSQL", NoteClasse: 18, NoteCompo: 15, NoteMatiere: 16, Validation: "Validée" },
  ],
  Semestre4: [
    { Module: "Docker", NoteClasse: 15, NoteCompo: 12, NoteMatiere: 13.5, Validation: "Validée" },
    { Module: "Kubernetes", NoteClasse: 19, NoteCompo: 18, NoteMatiere: 18.5, Validation: "Validée" },
  ],
};

export default function Semesters() {
  const [selectedSemester, setSelectedSemester] = useState("Semestre1");

  return (
    <div className="p-6 m-10">
      <h1 className="text-2xl font-bold mb-4">Les Notes</h1>
      <div className="flex">
        {/* Liste des semestres */}
        <div className="w-1/4">
          <ul className="space-y-2">
            {Object.keys(semestersData).map((semester) => (
              <li key={semester}>
                <button
                  onClick={() => setSelectedSemester(semester)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    selectedSemester === semester
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {semester}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tableau du semestre sélectionné */}
        <div className="w-3/4 pl-6">
          <SemesterTable
            semesterName={selectedSemester}
            data={semestersData[selectedSemester]}
          />
        </div>
      </div>
    </div>
  );
}

function SemesterTable({ semesterName, data }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{semesterName}</h2>
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Module</th>
              <th className="border border-gray-300 px-4 py-2">Note Classe</th>
              <th className="border border-gray-300 px-4 py-2">Note Compo</th>
              <th className="border border-gray-300 px-4 py-2">Note Matiere</th>
              <th className="border border-gray-300 px-4 py-2">Validation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="border border-gray-300 px-4 py-2">{row.Module}</td>
                <td className="border border-gray-300 px-4 py-2">{row.NoteClasse}</td>
                <td className="border border-gray-300 px-4 py-2">{row.NoteCompo}</td>
                <td className="border border-gray-300 px-4 py-2">{row.NoteMatiere}</td>
                <td className="border border-gray-300 px-4 py-2">{row.Validation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
