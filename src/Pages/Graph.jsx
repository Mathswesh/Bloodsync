import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, DoughnutController } from "chart.js";
import {
  RadialLinearScale,
  PointElement,
  Filler,
} from 'chart.js';
import { Bar, Pie, Line, Polar, Radar, Scatter, PolarArea } from "react-chartjs-2";
ChartJS.register(ArcElement,
  Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement,
  DoughnutController, RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend);

export const Graph = () => {
  
  const data = {
    labels: ["A+", "A-", "O+", "O-", "B+", "B-"],
    datasets: [
      {
        label: "Total donated ",
        data: [63342, 42342, 32344, 22344, 67867, 56757],
        borderColor: ["black"],
        backgroundColor: ["rgb(0, 150, 255)",],
        pointBackgroundColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div class="grid grid-cols-3 grid-rows-3 gap-3">
        <div class="items-center justify-center flex col-span-2 row-span-2 rounded-md bg-white h-[500px]"><Bar data={data}/></div>
        <div class="items-center justify-center flex col-span-1 row-span-1 rounded-md bg-white h-[250px]"><Pie data={data}/></div>
        <div class="items-center justify-center flex col-span-1 row-span-2 rounded-md bg-white h-[500px]"><PolarArea data={data}/></div>
        <div class="items-center justify-center flex col-span-2 row-span-1 rounded-md bg-white h-[250px]"><Line data={data}/></div>
      </div>
    </div>
  )
}