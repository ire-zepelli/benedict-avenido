import React from "react";
import Badge from "./Badge";

export default function SkillList() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="flex flex-col gap-2">
        <h3 className="text-l font-semibold text-gray-600">
          Frontend Development
        </h3>
        <div className="flex items-start gap-1">
          <Badge text="Typescript" />
          <Badge text="React" />
          <Badge text="NextJS" />
          <Badge text="TailwindCSS" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-l font-semibold text-gray-600">
          Backend Development
        </h3>
        <div className="flex items-start gap-1">
          <Badge text="Express" />
          <Badge text="PHP" />
          <Badge text="NodeJS" />
          <Badge text="MySQL" />
          <Badge text="Postgres" />
          <Badge text="Firebase" />
          <Badge text="MongoDB" />
          <Badge text="Supabase" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-l font-semibold text-gray-600">Other Languages</h3>
        <div className="flex items-start gap-1">
          <Badge text="C" />
          <Badge text="C++" />
          <Badge text="Java" />
          <Badge text="C#" />
          <Badge text="Python" />
        </div>
      </div>
    </div>
  );
}
