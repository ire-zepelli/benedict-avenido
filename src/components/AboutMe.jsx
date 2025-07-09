import React from "react";
import image from "/avenido-2x2.png";

export default function AboutMe() {
  return (
    <div>
      <div className="flex justify-between gap-4 items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold">Hello, I'm Benedict 👋</h1>
          <p className="text-lg text-gray-600">Web Developer</p>
        </div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={image} />
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold mb-2 text-2xl">About</h2>
        <p className="text-gray-700">
          I’m a passionate and detail-oriented web developer currently pursuing
          a Bachelor’s Degree in Information Technology at the University of
          Cebu – Lapu-Lapu and Mandaue. With a strong foundation in both
          frontend and backend development, I enjoy building responsive,
          user-friendly, and scalable web applications.
        </p>
      </div>
    </div>
  );
}
