import React from "react";

export default function InfoCard({ logo, title, subtitle, date }) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-start gap-4">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
          <div></div>
        </div>
      </div>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}
