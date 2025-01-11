import EnseignantTable from "@/component/enseignantTable/enseignantTable";
import { generateEnseignants } from "@/component/Json/EnseignantList";

// Génération des données enseignants côté serveur
export default function Page() {
  const enseignants = generateEnseignants(500); // Génération des enseignants
  return <EnseignantTable enseignants={enseignants} />; // Passer les enseignants au composant client
}
