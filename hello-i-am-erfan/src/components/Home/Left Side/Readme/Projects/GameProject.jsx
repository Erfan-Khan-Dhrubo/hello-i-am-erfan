import React, { Suspense } from "react";
import ProjectCard from "./ProjectCard";

const GameProject = () => {
  const temp = {
    projects: [
      {
        id: "1",
        name: "Marksman Fury",
        videoSrc: "/Videos/Game/Marksman-Fury.mp4",
        technologies: ["Unity", "C#", "2D Game"],
        link: "https://github.com/Erfan-Khan-Dhrubo/Marksman-Fury-Game",
        code_or_link: "Code",
        description:
          "Marksman-Fury is a fast-paced 2D shooter where you face relentless enemy waves, collect health pickups, and earn points for sharp, efficient takedowns.",
      },
      {
        id: "2",
        name: "Flappy Bird",
        videoSrc: "/Videos/Game/Flappy-Bird.mp4",
        technologies: ["Unity", "C#", "2D Game"],
        link: "https://github.com/Erfan-Khan-Dhrubo/Flappy-Bird-Game",
        code_or_link: "Code",
        description:
          "Flappy Bird Clone is a simple arcade game where you tap to flap and navigate through endless pipes. Stay alive as long as you can while chasing a high score!",
      },
      {
        id: "3",
        name: "Cube Dash",
        videoSrc: "/Videos/Game/Cube-Dash.mp4",
        technologies: ["Unity", "C#", "3D Game"],
        link: "https://github.com/Erfan-Khan-Dhrubo/Cube-Dash-Game",
        code_or_link: "Code",
        description:
          "Cube Dash is a fast-paced game where a cube races forward and the player must dodge random obstacles. Survive as long as possible while aiming for the highest score!",
      },
      {
        id: "4",
        name: "Roll a Ball",
        videoSrc: "/Videos/Game/Roll-a-Ball.mp4",
        technologies: ["Unity", "C#", "3D Game"],
        link: "https://github.com/Erfan-Khan-Dhrubo/Roll-a-Ball-Game",
        code_or_link: "Code",
        description:
          "Roll a Ball is a simple yet engaging 3D game where players control a ball, collect items, and increase their score. It focuses on movement, collision detection, and basic game mechanics.",
      },
    ],
  };

  const projects = temp.projects;

  return (
    <div className="grid grid-cols-2 items-stretch gap-6">
      <Suspense fallback={<span>Loading ......</span>}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index}></ProjectCard>
        ))}
      </Suspense>
    </div>
  );
};

export default GameProject;
