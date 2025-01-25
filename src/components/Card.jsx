import React from "react";

export default function Card({ title, description, image, id }) {
  return (
    <div
      className={`flex ${id % 2 == 0 ? "flex-row-reverse" : null} gap-10 m-5`}
    >
      <img
        src={image}
        alt={title}
        className="border-2 border-black w-fit h-48 object-contain"
      />
      <div className={id % 2 == 0 ? "flex flex-col text-end" : ""}>
        <h2 className="text-xl font-bold mt-5">{title}</h2>
        <p className="mt-5">{description}</p>
      </div>
    </div>
  );
}
