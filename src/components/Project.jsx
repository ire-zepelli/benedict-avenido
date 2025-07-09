import React from "react";
import Badge from "./Badge";

export default function Project({ title, desc, img, tech }) {
  return (
    <div className="card bg-base-100 w-75 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
      <figure>
        <img src={img} alt="Project" />
      </figure>
      <div className="flex justify-start p-2 gap-1">
        {tech.map((item) => (
          <Badge text={item} />
        ))}
      </div>
    </div>
  );
}
