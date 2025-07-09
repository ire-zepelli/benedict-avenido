import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex flex-col">
        <h1>Benedict Avenido</h1>
        <p>Web Developer</p>
      </div>
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div>
    </div>
  );
}
