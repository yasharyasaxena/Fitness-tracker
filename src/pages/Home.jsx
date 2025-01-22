import React from "react";

export default function Home() {
  return (
    <div className="relative h-85vh w-full overflow-hidden">
      <img
        src="/src/assets/hero-img.jpg"
        alt="hero"
        className="absolute h-full w-full object-cover top-1/2 bottom-1/2 -translate-y-1/2 -z-10"
      />
      <span className="absolute top-0 left-0 z-10 text-white text-center w-full h-full flex flex-col items-center justify-center bg-[rgb(0,0,0,0.4)] font-bold text-5xl">
        Welcome to Your Ultimate Fitness Journey!
      </span>
    </div>
  );
}
