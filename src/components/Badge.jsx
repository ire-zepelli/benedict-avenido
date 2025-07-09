import React from "react";

export default function Badge({ text }) {
  return (
    <span className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-lg">
      {text}
    </span>
  );
}
