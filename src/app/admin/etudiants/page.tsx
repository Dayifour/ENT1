import EtudiantTable from "@/component/etudiantTable/EtudiantTable";
import { generateEtudiants } from "@/component/Json/EtudiantList";

const EtudiantPage = () => {
  const etudiants = generateEtudiants(500); // Génération des enseignants
  return <EtudiantTable etudiants={etudiants} />; // Passer les enseignants au composant client
};

export default EtudiantPage;
