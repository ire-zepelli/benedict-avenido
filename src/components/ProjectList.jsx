import React from "react";
import Project from "./Project";

export default function ProjectList() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="flex flex-wrap justify-evenly w-full gap-5">
        <Project
          title={"MangaDot"}
          desc={
            "This project was designed to help me learn about APIs and backend development."
          }
          img={
            "https://media.discordapp.net/attachments/765819740793995274/1392367050940481596/image.png?ex=686f465d&is=686df4dd&hm=1daf86d9a6bbcadee5ff32d2a4a1b049337265eb448e000f6f1af471fada29f0&=&format=webp&quality=lossless"
          }
          tech={["HTML", "CSS", "Javascript"]}
        />
        <Project
          title={"Great Quotes"}
          desc={
            "A web app where users can post quotes anonymously and interact with others' posts."
          }
          img={
            "https://media.discordapp.net/attachments/765819740793995274/1392369591077961881/image.png?ex=686f48bb&is=686df73b&hm=0a0c96de73db48c126b679a7cb7698e905fe1f0e164c21048dcb03378663685c&=&format=webp&quality=lossless&width=1851&height=903"
          }
          tech={["React", "Express", "NodeJS", "Firebase"]}
        />
        <Project
          title={"Quizify"}
          desc={
            "Quizify is a desktop application built with Java that allows users to create, customize, and take quizzes. It’s designed for both students and educators, making it a useful tool for self-study, classroom review, and basic assessment tasks.    "
          }
          img={
            "https://media.discordapp.net/attachments/897631144776982598/1392370990281003029/image.png?ex=686f4a09&is=686df889&hm=83cc771b813e59b1766424a5488052f375efd98fca4fda3972ded5b2906a22a9&=&format=webp&quality=lossless&width=1661&height=903"
          }
          tech={["Java"]}
        />
        <Project
          title={"ARMONIA - Internet Cafe Management System"}
          desc="A Java-based app for managing internet cafe operations, including session tracking, billing, and admin controls."
          img={
            "https://camo.githubusercontent.com/0e260fc57c5692f9fb5b50ecc71bf3c5a4a42c60ea75a8890095d8672d559665/68747470733a2f2f692e6962622e636f2f6b35585353515a2f53637265656e73686f742d323032342d31322d30312d3130333235302e706e67"
          }
          tech={["Java"]}
        />
        <Project
          title={"Lyndel Travel and Tours"}
          desc="A website built for a travel and tour company to showcase their services and tour packages."
          img={
            "https://media.discordapp.net/attachments/897631144776982598/1392373355398692958/image.png?ex=686f4c3c&is=686dfabc&hm=16efd3345ef5ab114ada3534f308d35cb5b9980662ca52ac9bfdf1f124518844&=&format=webp&quality=lossless&width=1787&height=903"
          }
          tech={["React", " NodeJS"]}
        />
      </div>
    </div>
  );
}
