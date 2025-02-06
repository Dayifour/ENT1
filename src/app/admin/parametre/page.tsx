"use client";
import { useState } from "react";
import {
  FaCog,
  FaPalette,
  FaUser,
  FaShieldAlt,
  FaBell,
  FaBuilding,
  FaUserShield,
} from "react-icons/fa";

export default function ParametrePage() {
  const [activeSection, setActiveSection] = useState("Système");
  const [configurationAction, setConfigurationAction] = useState<string | null>(
    null
  );

  // Données pour les sections
  const sections = [
    {
      id: "Système",
      icon: <FaCog />,
      description: "Gérer les paramètres système",
    },
    {
      id: "Annexes",
      icon: <FaBuilding />,
      description: "Gérer les differents annexes",
    },
    {
      id: "Rôles",
      icon: <FaUserShield />,
      description: "Gérer les rôles et permissions",
    },
    {
      id: "Personnaliser",
      icon: <FaPalette />,
      description: "Personnaliser l'apparence",
    },
    {
      id: "Confidentialité",
      icon: <FaShieldAlt />,
      description: "Contrôler la confidentialité",
    },
  ];

  const handleConfigure = (sectionId: string) => {
    setConfigurationAction(sectionId);
  };

  return (
    <div className="flex flex-col min-h-52 bg-gray-50 mt-16 p-4 md:p-8 w-full">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Le sidebar du paramètre */}
        <span className=" rounded-lg shadow-lg w-full md:w-64 bg-white border-r border-gray-200 p-4 mb-4 md:mb-0 h-96">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Menu</h2>
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={`mb-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">{section.icon}</span>
                  <span className="font-medium">{section.id}</span>
                </div>
              </li>
            ))}
          </ul>
        </span>

        {/* Contenu des Paramètres */}
        <main className="flex-1 p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {activeSection}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {/* Carte pour chaque sous-section */}
            {sections
              .filter((section) => section.id === activeSection)
              .map((section) => (
                <div
                  key={section.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl text-blue-600 mr-3">
                      {section.icon}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-800 truncate">
                      {section.id}
                    </h2>
                  </div>
                  <p className="text-gray-600">{section.description}</p>
                  <button
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => handleConfigure(section.id)}
                  >
                    Configurer
                  </button>
                </div>
              ))}
          </div>

          {/* Affichage des actions de configuration */}
          {configurationAction === "Système" && (
            <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Configuration du système
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="language" className="block text-gray-700">
                    Langue
                  </label>
                  <select
                    id="language"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option>Français</option>
                    <option>Anglais</option>
                    <option>Espagnol</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="theme" className="block text-gray-700">
                    Thème
                  </label>
                  <select
                    id="theme"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option>Clair</option>
                    <option>Sombre</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Enregistrer
                </button>
              </form>
            </div>
          )}

          {configurationAction === "Personnaliser" && (
            <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Personnalisation de l'apparence
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Couleur principale
                  </label>
                  <input
                    type="color"
                    className="w-full p-1 border border-gray-300 rounded-lg"
                    title="Couleur principale"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Taille de la police
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    className="w-full"
                    title="Taille de la police"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Enregistrer
                </button>
              </form>
            </div>
          )}
          {configurationAction === "Annexes" && (
            <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Gestion des Annexes
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Nom de l'annexes
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nom d'utilisateur"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Ville</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nom d'utilisateur"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Region</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nom d'utilisateur"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Enregistrer
                </button>
              </form>
            </div>
          )}

          {configurationAction === "Rôles" && (
            <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Gestion des Rôles</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Nom</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nom d'utilisateur"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Nom d'utilisateur"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Permissions</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Créer
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Lire
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Modifier
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Supprimer
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Enregistrer
                </button>
              </form>
            </div>
          )}

          {configurationAction && (
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              onClick={() => setConfigurationAction(null)}
            >
              Fermer
            </button>
          )}
        </main>
        {activeSection === "Annexes" && (
          <div className="p-6 bg-white rounded-lg shadow-lg h-96">
            <h2 className="text-xl font-semibold mb-4">Liste des annexes</h2>
            <ul>
              <li className="flex items-center justify-between mb-2">
                <span>Annexe 1</span>
              </li>
              <li className="flex items-center justify-between mb-2">
                <span>Annexe 2</span>
              </li>
              <li className="flex items-center justify-between mb-2">
                <span>Annexe 3</span>
              </li>
            </ul>
          </div>
        )}
        {activeSection === "Rôles" && (
          <div className="p-6 bg-white rounded-lg shadow-lg h-96">
            <h2 className="text-xl font-semibold mb-4">Liste des Roles</h2>
            <ul>
              <li className="flex items-center justify-between mb-2">
                <span>Rôles 1</span>
              </li>
              <li className="flex items-center justify-between mb-2">
                <span>Rôles 2</span>
              </li>
              <li className="flex items-center justify-between mb-2">
                <span>Rôles 3</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
