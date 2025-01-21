import React from "react";

export default function Home() {
  return (
    <>
      <img
        src="/src/assets/hero-img.jpg"
        alt="hero"
        className="max-h-screen w-full object-cover"
      />
      <span className="text-red-600 absolute inset-x-1/3 inset-y-1/3 text-5xl">
        Welcome to Your Ultimate Fitness Journey!
      </span>
    </>
  );
}
