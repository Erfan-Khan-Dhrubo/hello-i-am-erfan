import React, { Suspense, useState, useEffect } from "react";
import Logo from "./Logo";
import { FaTools } from "react-icons/fa";

const Other = () => {
  const [isMd, setIsMd] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsMd(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const globeIndex = isMd ? 2 : 1;

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
    (skill) => skill.set === "Other" || skill.set === "All"
  );

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        <Suspense fallback={<span>Loading ......</span>}>
          {filteredSkills.map((skill, index) => {
            if (index === globeIndex) {
              return (
                <React.Fragment key={skill.id}>
                  <div className="col-span-1 md:row-span-2 row-span-1 flex items-center justify-center">
                    <style>
                      {`
                        @keyframes globe-rotate-move {
                          0% { transform: rotateY(0deg); }
                          25% { transform: rotateY(90deg); }
                          50% { transform: rotateY(180deg); }
                          75% { transform: rotateY(270deg); }
                          100% { transform: rotateY(360deg); }
                        }
                        .animate-globe {
                          animation: globe-rotate-move 4s linear infinite;
                          transform-style: preserve-3d;
                          will-change: transform;
                          display: inline-block;
                        }
                      `}
                    </style>
                    <span className="animate-globe">
                      <span className="block md:hidden">
                        <FaTools size={60} />
                      </span>
                      <span className="hidden md:block">
                        <FaTools size={120} />
                      </span>
                    </span>
                  </div>
                  <Logo skill={skill} />
                </React.Fragment>
              );
            } else {
              return <Logo skill={skill} key={skill.id} />;
            }
          })}
        </Suspense>
      </div>
    </div>
  );
};

export default Other;
