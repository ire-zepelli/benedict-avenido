import React from "react";
import image from "/benedict.jpg";

export default function AboutMe() {
  return (
    <div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-1 align-start ">
          <h1 className="text-5xl font-bold">Hey, I'm Ben 👋</h1>
          <p className="text-xl text-gray-600 mt-4">Web Developer</p>
        </div>
        <a
          href="https://www.linkedin.com/in/benedict-avenido-758939299/"
          target="_blank"
        >
          <div className="avatar">
            <div className="w-30 rounded-full ring-3 ring-offset-4">
              <img src={image} />
            </div>
          </div>
        </a>
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
