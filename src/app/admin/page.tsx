"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SmallIconCard from "@/component/smallIconCard/SmallIconCard";
import UserCard from "@/component/userCard/UserCard";
import { TrendingUp } from "lucide-react";

// Import Chart.js
import ModulesEnseignes from "@/component/modules/ModuleEnseignes";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Area Chart - Stacked",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        callback: (value: string | number) =>
          chartData[Number(value)].month.slice(0, 3),
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const data = {
  labels: chartData.map((d) => d.month),
  datasets: [
    {
      label: "Desktop",
      data: chartData.map((d) => d.desktop),
      borderColor: "hsl(var(--chart-1))",
      backgroundColor: "hsl(var(--chart-1))",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Mobile",
      data: chartData.map((d) => d.mobile),
      borderColor: "hsl(var(--chart-2))",
      backgroundColor: "hsl(var(--chart-2))",
      fill: true,
      tension: 0.4,
    },
  ],
};

const userData = {
  image: "/img/man2.jpg",
  nom: "Manager Dayif",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad, exercitationem consectetur a beatae nobis culpa tenetur incidunt",
  email: "managerdayif@gmail.com",
  adresse: "Moribabougou",
  date: "Janvier 2025",
  tel: "79994640",
};

export default function HomePage() {
  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-center items-center">
      <div className="flex gap-5 min-h-[clac(100vh-100px)] items-start">
        <div className="flex flex-col gap-5 w-[600px] h-full">
          <UserCard item={userData} />
          <div className="rounded-lg p-6 shadow-gray-600 shadow-lg">
            <Card>
              <CardHeader>
                <CardTitle>Area Chart - Stacked</CardTitle>
                <CardDescription>
                  Showing total visitors for the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <Line options={options} data={data} />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 5.2% this month{" "}
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                      January - June 2024
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col gap-5 h-[250px]">
            <div className="flex gap-5">
              <SmallIconCard
                photoName="/icons/calendarColor.png"
                stats="90%"
                name="Présence"
              />
              <SmallIconCard
                photoName="/icons/book.png"
                stats="3"
                name="Filière"
              />
            </div>
            <div className="flex h-full gap-5">
              <SmallIconCard
                photoName="/icons/text-books.png"
                stats="10"
                name="Matière"
              />
              <SmallIconCard
                photoName="/icons/teach.png"
                stats="9"
                name="classes"
              />
            </div>
          </div>
          <div className="bg-userCard rounded-lg">
            <ModulesEnseignes />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10"></div>
    </div>
  );
}
