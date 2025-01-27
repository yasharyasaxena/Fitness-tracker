import React from "react";
import data from "../data.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function Analytics() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const caloriesBurnedData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Calories Burned",
        data: data["caloriesBurned"],
        backgroundColor: "red",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const sleepData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Sleep",
        data: Object.values(data["sleepPatterns"]),
        backgroundColor: "green",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const dailyStepsData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Daily Steps",
        data: data["dailySteps"],
        backgroundColor: "blue",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        font: {
          size: 30,
        },
        color: "black",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4">
      <div
        className="col-span-4 row-span-1"
        style={{ height: "400px", width: "500px" }}
      >
        <Bar
          data={dailyStepsData}
          options={{
            ...options,
            plugins: {
              ...options.plugins,
              title: {
                ...options.plugins.title,
                text: "Daily Steps",
              },
            },
          }}
        />
      </div>
      <div className="col-span-4 row-span-1" style={{ height: "400px" }}>
        <Bar
          data={caloriesBurnedData}
          options={{
            ...options,
            plugins: {
              ...options.plugins,
              title: {
                ...options.plugins.title,
                text: "Calories Burned",
              },
            },
          }}
        />
      </div>
      <div className="col-span-4 row-span-1" style={{ height: "400px" }}>
        <Bar
          data={sleepData}
          options={{
            ...options,
            plugins: {
              ...options.plugins,
              title: {
                ...options.plugins.title,
                text: "Sleep",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
