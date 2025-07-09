import React from "react";
import Education from "./Education";
import Achievements from "./Achievements";
import SkillList from "./SkillList";
import ProjectList from "./ProjectList";

export default function ProfileOverview() {
  return (
    <div className="py-4 flex flex-col gap-4">
      <Education />
      <Achievements />
      <SkillList />
      <ProjectList />
    </div>
  );
}
