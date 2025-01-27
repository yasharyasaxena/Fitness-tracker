import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { plugin } from "postcss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ data, label }) {
  const chartData = {
    labels: ["9:00", "12:00", "15:00", "18:00"],
    datasets: [
      {
        label: "Heart Rate",
        data: [...data],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Heart Rate",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: label,
      },
    },
    maintainAspectRatio: false,
  };
  return <Line data={chartData} options={options} />;
}
