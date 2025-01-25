import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../assets/hero-img.jpg";
import step_img from "../assets/steps.webp";
import calorie_img from "../assets/calorie-img.png";
import heart_img from "../assets/heart-img.png";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div className="relative h-85vh w-full overflow-hidden">
        <img
          src={hero_img}
          alt="hero"
          className="absolute h-full w-full object-cover top-1/2 bottom-1/2 -translate-y-1/2 -z-20"
        />
        <span className="absolute top-0 left-0 right-0 -z-10 text-white text-center w-full h-full flex flex-col pt-10 bg-[rgb(0,0,0,0.4)] font-bold text-5xl">
          Welcome to Your Ultimate Fitness Tracking Partner!
        </span>
        <div className="flex flex-col w-1/2 pt-36 text-center mx-auto my-10">
          <h1 className="text-3xl font-bold text-white mb-10">
            Start Tracking Your Fitness Journey Today by Clicking the Button
            Below!
          </h1>
          <Link to="/dashboard">
            <button className="font-bold text-2xl text-cyan-500 bg-white py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
      <h1 className="font-bold p-5 text-3xl text-center">Our Features</h1>
      <div className="flex flex-col w-2/3 mx-auto">
        <Card
          title={"Steps Tracking"}
          image={step_img}
          description={"Your Steps tracked and visualized in a beautiful way!"}
          id={1}
        />
        <Card
          title={"Calorie Burnt"}
          image={calorie_img}
          description={
            "Your Calories burnt tracked and visualized in a beautiful way!"
          }
          id={2}
        />
        <Card
          title={"Heart Rate"}
          image={heart_img}
          description={
            "Your Heart Rate is tracked and visualized in a beautiful way!"
          }
          id={3}
        />
      </div>
    </>
  );
}
