import React from "react";
import data from "../data.json";
import Chart from "../components/Chart";

export default function Analytics() {
  const heartRateData = data["heartRate"];
  return (
    <div className="flex">
      <h1>Analytics</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-4">
        {Object.keys(heartRateData).map((key, index) => {
          return (
            <div className="col-span-1 row-span-1 h-40">
              <Chart key={index} data={heartRateData[key]} label={key} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}
