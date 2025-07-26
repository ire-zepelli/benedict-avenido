import React from "react";
import Badge from "./Badge";
import Field from "./Field";

export default function SkillList() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <Field
        title={"Frontend Development"}
        badges={["Typescript", "React", "NextJS", "TailwindCSS, Redux"]}
      />
      <Field
        title={"Backend Development"}
        badges={[
          "Express",
          "PHP",
          "NodeJS",
          "MySQL",
          "Postgres",
          "Firebase",
          "MongoDB",
          "Supabase",
        ]}
      />

      <Field
        title={"Other Languages"}
        badges={["C", "C++", "Java", "C#", "Python"]}
      />
    </div>
  );
}
