import { Checkbox } from "@mui/material";
import { useState } from "react";

const modules = [
  { name: "Mathématiques", completed: true },
  { name: "Physique", completed: false },
  { name: "Informatique", completed: true },
  { name: "Chimie", completed: false },
  { name: "Biologie", completed: true },
  { name: "Philosophie", completed: false },
];

const schedule = [
  [
    "Algèbre",
    "Physique Quantique",
    "Programmation",
    "Chimie Organique",
    "Biologie Moléculaire",
    "Philosophie Moderne",
  ],
  [
    "Géométrie",
    "Mécanique",
    "Base de Données",
    "Chimie Analytique",
    "Écologie",
    "Philosophie Antique",
  ],
  [
    "Statistiques",
    "Électromagnétisme",
    "Développement Web",
    "Thermodynamique",
    "Génétique",
    "Logique",
  ],
];

const EmploieStudent = () => {
  const [checkedModules, setCheckedModules] = useState(modules);

  const toggleModule = (index: number) => {
    const newModules = [...checkedModules];
    newModules[index].completed = !newModules[index].completed;
    setCheckedModules(newModules);
  };

  return (
    <div className="flex gap-2">
      {/* Sidebar Modules */}
      <div className="bg-white p-4 rounded-lg shadow-md border-[1px] border-gray-300">
        <h2 className="text-lg font-bold mb-4">Module</h2>
        {checkedModules.map((module, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b"
          >
            <span>{module.name}</span>
            <Checkbox
              checked={module.completed}
              onChange={() => toggleModule(index)}
              color="primary"
            />
          </div>
        ))}
      </div>
      {/* Schedule Table */}
      <div className="bg-white p-2 rounded-lg shadow-md border-[1px] border-gray-300">
        <h2 className="text-lg font-bold mb-4">Emploi</h2>
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              {["LUN", "MAR", "MER", "JEU", "VEN", "SAM"].map((day) => (
                <th key={day} className="border border-gray-300 py-2">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((subject, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-300 p-1 text-gray-700"
                  >
                    {subject}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmploieStudent;
