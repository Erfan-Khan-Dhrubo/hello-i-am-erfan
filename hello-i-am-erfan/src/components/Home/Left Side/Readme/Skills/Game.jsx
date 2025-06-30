import React, { Suspense } from "react";
import Logo from "./Logo";

const Game = () => {
  //   const temp = {
  //     skills: [
  //       {
  //         id: "1",
  //         name: "Python",
  //         type: "Language",
  //         file_path: "/assets/images/python_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "2",
  //         name: "HTML",
  //         type: "Language",
  //         file_path: "/assets/images/html_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "3",
  //         name: "CSS",
  //         type: "Language",
  //         file_path: "/assets/images/css_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "4",
  //         name: "JavaScript",
  //         type: "Language",
  //         file_path: "/assets/images/javascript_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "5",
  //         name: "C#",
  //         type: "Language",
  //         file_path: "/assets/images/csharp_badge.png",
  //         set: "Game",
  //       },
  //       {
  //         id: "6",
  //         name: "PHP",
  //         type: "Language",
  //         file_path: "/assets/images/php_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "7",
  //         name: "SQL",
  //         type: "Language",
  //         file_path: "/assets/images/sql_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "8",
  //         name: "Assembly",
  //         type: "Language",
  //         file_path: "/assets/images/assembly_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "9",
  //         name: "Verilog",
  //         type: "Language",
  //         file_path: "/assets/images/verilog_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "10",
  //         name: "React",
  //         type: "Technology",
  //         file_path: "/assets/images/react_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "11",
  //         name: "Tailwind CSS",
  //         type: "Technology",
  //         file_path: "/assets/images/tailwind_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "12",
  //         name: "Unity",
  //         type: "Technology",
  //         file_path: "<FaUnity />",
  //         set: "Game",
  //       },
  //       {
  //         id: "13",
  //         name: "Node.js",
  //         type: "Technology",
  //         file_path: "/assets/images/nodejs_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "14",
  //         name: "Firebase",
  //         type: "Technology",
  //         file_path: "/assets/images/firebase_badge.png",
  //         set: "A",
  //       },
  //       {
  //         id: "15",
  //         name: "Git & GitHub",
  //         type: "Technology",
  //         file_path: "/assets/images/github_badge.png",
  //         set: "All",
  //       },
  //     ],
  //   };

  // Filter skills with set value "Game" or "All"

  const temp = {
    skills: [
      {
        id: "1",
        name: "Python",
        type: "Programming Language",
        file_path: "FaPython",
        set: "All",
      },
      {
        id: "2",
        name: "HTML",
        type: "Markup Language",
        file_path: "FaHtml5",
        set: "All",
      },
      {
        id: "3",
        name: "CSS",
        type: "Style Sheet Language",
        file_path: "FaCss3Alt",
        set: "All",
      },
      {
        id: "4",
        name: "JavaScript",
        type: "Programming Language",
        file_path: "FaJs",
        set: "All",
      },
      {
        id: "5",
        name: "C#",
        type: "Programming Language",
        file_path: "TbBrandCSharp",
        set: "Game",
      },
      {
        id: "6",
        name: "PHP",
        type: "Programming Language",
        file_path: "FaPhp",
        set: "All",
      },
      {
        id: "7",
        name: "SQL",
        type: "Query Language",
        file_path: "BiData",
        set: "All",
      },
      {
        id: "8",
        name: "Assembly",
        type: "Low Level Programming Language",
        file_path: "GiProcessor",
        set: "All",
      },
      {
        id: "9",
        name: "Verilog",
        type: "Hardware Description Language",
        file_path: "GiCircuitry",
        set: "Game",
      },
      {
        id: "10",
        name: "React",
        type: "Library",
        file_path: "FaReact",
        set: "All",
      },
      {
        id: "11",
        name: "Tailwind",
        type: "CSS Framework",
        file_path: "SiTailwindcss",
        set: "All",
      },
      {
        id: "12",
        name: "Unity",
        type: "Game Engine",
        file_path: "FaUnity",
        set: "Game",
      },
      {
        id: "13",
        name: "Node.js",
        type: "Runtime Environment",
        file_path: "FaNodeJs",
        set: "All",
      },
      {
        id: "14",
        name: "Firebase",
        type: "Backend Platform",
        file_path: "SiFirebase",
        set: "All",
      },
      {
        id: "15",
        name: "Git & GitHub",
        type: "Version Control",
        file_path: "FaGithub",
        set: "All",
      },
    ],
  };

  const filteredSkills = temp.skills.filter(
    (skill) => skill.set === "Game" || skill.set === "All"
  );

  return (
    <div className="flex gap-4 flex-wrap">
      <Suspense fallback={<span>Loading ......</span>}>
        {filteredSkills.map((skill) => (
          <Logo skill={skill} key={skill.id}></Logo>
        ))}
      </Suspense>
    </div>
  );
};

export default Game;
