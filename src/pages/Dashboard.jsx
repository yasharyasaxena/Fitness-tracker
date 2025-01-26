import React from "react";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">Welcome to your Fitness Tracker Dashboard</h1>
      <p className="font-light text-opacity-">
        This is where you can track your fitness progress and set new goals for
        yourself.
      </p>
      <div className="pt-10">
        <h2 className="text-2xl font-bold">Your Fitness Goals</h2>
        <ul className="pl-3 pt-5 space-y-5 list-inside">
          <li>Walk 10,000 steps daily</li>
          <ProgressBar progress={80} />
          <li>Run 5 miles daily</li>
          <ProgressBar progress={60} />
          <li>Do 50 pushups daily</li>
          <ProgressBar progress={20} />
          <li>Do 100 situps daily</li>
          <ProgressBar progress={70} />
        </ul>
      </div>
    </div>
  );
}
