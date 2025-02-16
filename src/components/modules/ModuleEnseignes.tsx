"use client";

export default function ModulesEnseignes() {
  const modules = [
    "les classes du prof",
    "les classes du prof",
    "les classes du prof",
    "les classes du prof",
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-gray-600 shadow-lg flex flex-col items-start">
      <h2 className="text-xl font-bold mb-4">Modules Enseignés</h2>
      <div className="space-y-3 w-full max-w-md">
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-blue-100 text-gray-700 p-4 rounded-lg shadow-md w-full"
          >
            {module}
          </div>
        ))}
      </div>
    </div>
  );
}
