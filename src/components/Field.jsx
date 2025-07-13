import React from "react";
import Badge from "./Badge";

export default function Field({ title, badges }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-l font-semibold text-gray-600">{title}</h3>
      <div className="flex flex-wrap items-start gap-1">
        {badges.map((badge) => (
          <Badge text={badge} />
        ))}
      </div>
    </div>
  );
}
