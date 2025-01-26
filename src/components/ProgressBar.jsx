import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-green-500 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      >
        <p className="text-xs text-white text-end pr-2">{`${progress}%`}</p>
      </div>
    </div>
  );
}
