import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  DoughnutController,
  RadialLinearScale,
  PointElement,
  Filler,
} from 'chart.js';
import { Bar, Pie, Line, PolarArea } from 'react-chartjs-2';
import { motion, useAnimation, useInView } from 'framer-motion';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  DoughnutController,
  RadialLinearScale,
  PointElement,
  Filler
);

export const Graph = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControl = useAnimation()

  console.log(isInView)

  useEffect(() => {
    if (!isInView) {
      mainControl.start("visible")
    }
  }, [isInView, mainControl]);

  const data = {
    labels: ['A+', 'A-', 'O+', 'O-', 'B+', 'B-'],
    datasets: [
      {
        label: 'Total donated ',
        data: [63342, 42342, 32344, 22344, 67867, 56757],
        borderColor: ['black'],
        backgroundColor: ['rgb(0, 150, 255)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        // animate="visible"
        animate={mainControl}
        transition={{ duration: .25, delay: .25 }}

        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Bar Chart */}
        <div className="items-center justify-center flex rounded-md transparent h-[300px] sm:h-[400px] lg:h-[500px] col-span-1 sm:col-span-2">
          <Bar data={data} />
        </div>
      </motion.div>
    </div>
  );
};