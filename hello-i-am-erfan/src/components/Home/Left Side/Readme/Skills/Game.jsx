import React, { Suspense } from "react";
import { IoGameController } from "react-icons/io5";
import Logo from "./Logo";

const Game = () => {
  const temp = {
    skills: [
      {
        id: "1",
        name: "Python",
        type: "Programming Language",
        file_path: "FaPython",
        set: "Other",
      },
      {
        id: "2",
        name: "HTML",
        type: "Markup Language",
        file_path: "FaHtml5",
        set: "Web",
      },
      {
        id: "3",
        name: "CSS",
        type: "Style Sheet Language",
        file_path: "FaCss3Alt",
        set: "Web",
      },
      {
        id: "4",
        name: "JavaScript",
        type: "Programming Language",
        file_path: "FaJs",
        set: "Web",
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
        set: "Web",
      },
      {
        id: "7",
        name: "SQL",
        type: "Query Language",
        file_path: "BiData",
        set: "Web",
      },
      {
        id: "8",
        name: "Assembly",
        type: "Low Level Programming Language",
        file_path: "GiProcessor",
        set: "Other",
      },
      {
        id: "9",
        name: "Verilog",
        type: "Hardware Description Language",
        file_path: "GiCircuitry",
        set: "Other",
      },
      {
        id: "10",
        name: "React",
        type: "Library",
        file_path: "FaReact",
        set: "Web",
      },
      {
        id: "11",
        name: "Tailwind",
        type: "CSS Framework",
        file_path: "SiTailwindcss",
        set: "Web",
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
        set: "Web",
      },
      {
        id: "14",
        name: "Firebase",
        type: "Backend Platform",
        file_path: "SiFirebase",
        set: "Web",
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
    <div className="flex gap-4">
      <div className="flex gap-4 flex-wrap basis-3/4">
        <Suspense fallback={<span>Loading ......</span>}>
          {filteredSkills.map((skill) => (
            <Logo skill={skill} key={skill.id}></Logo>
          ))}
        </Suspense>
      </div>
      <div className="basis-1/4 flex  items-center">
        <style>
          {`
            @keyframes globe-rotate-move {
              0% {
                transform: rotateY(0deg) ;
              }
              25% {
                transform: rotateY(90deg) ;
              }
              50% {
                transform: rotateY(180deg) ;
              }
              75% {
                transform: rotateY(270deg) ;
              }
              100% {
                transform: rotateY(360deg) ;
              }
            }
            .animate-globe {
              animation: globe-rotate-move 5s linear infinite;
              transform-style: preserve-3d;
              will-change: transform;
              display: inline-block;
            }
          `}
        </style>
        <span className="animate-globe">
          <IoGameController size={140} />
        </span>
      </div>
    </div>
  );
};

export default Game;
