import React from "react";
import data from "../data.json";

export default function Analytics() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 w-full h-full">
        <div className="col-span-1 row-span-1 flex flex-col items-center">
          <ul className="text-2xl font-bold">Steps Counter</ul>
          {data["dailySteps"].map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div className="col-span-1 row-span-1 flex flex-col items-center">
          <ul className="text-2xl font-bold">Calories Burnt</ul>
          {data["caloriesBurned"].map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div className="col-span-1 row-span-1 flex flex-col items-center">
          <ul className="text-2xl font-bold">Heart Rate</ul>
          {Object.entries(data["heartRate"]).map((item) => {
            return (
              <li>
                {item[0]}: {item[1].map((i) => i + ", ")}
              </li>
            );
          })}
        </div>
        <div className="col-span-1 row-span-1 flex flex-col items-center">
          <ul className="text-2xl font-bold">Steps Counter</ul>
          {Object.entries(data["sleepPatterns"]).map((item) => (
            <li>
              {item[0]}: {item[1]}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
