import React from "react";
import "./statistique.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Étudiants",
      data: [400, 300, 200, 278, 189, 239, 349],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Enseignants",
      data: [240, 139, 980, 390, 480, 380, 430],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
    {
      label: "Classes",
      data: [240, 221, 229, 200, 218, 250, 300],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Statistiques de l'école",
    },
  },
};

const Statistique: React.FC = () => {
  return (
    <div className="statistique">
      <h2>Statistiques</h2>
      <div className="gridStat">
        <div className="gridenf">
          <h3 className="font-bold text-lg">Nombre Filiere</h3>
          <p id="traitCourriers" className="text-2xl">
            1
          </p>
        </div>
        <div className="gridenf">
          <h3 className="font-bold text-lg">Nombre etudiant</h3>
          <p id="urgentCourriers" className="text-2xl">
            1220
          </p>
        </div>
        <div className="gridenf">
          <h3 className="font-bold text-lg">Nombre classe</h3>
          <p id="readCourriers" className="text-2xl">
            1
          </p>
        </div>
        <div className="gridenf">
          <h3 className="font-bold text-lg">Courriers en attent</h3>
          <p id="standCourriers" className="text-2xl">
            0
          </p>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Statistique;
