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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas
          reprehenderit iste fugiat placeat modi maiores eius similique nulla,
          sequi nemo veniam ut quos ea, libero tempore tenetur numquam possimus?
        </p>
      </div>
    </div>
  );
}
