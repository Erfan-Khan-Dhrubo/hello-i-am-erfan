import React, { Suspense } from "react";
import ProjectCard from "./ProjectCard";

const WebProject = () => {
  const temp = {
    projects: [
      {
        id: "1",
        name: "DocTalk",
        videoSrc: "/Videos/Web/DocTalk.mp4",
        technologies: ["HTML", "Tailwind", "JavaScript", "React"],
        link: "https://project-8-web-development.netlify.app/",
        code_or_link: "Live Link",
        description:
          "DocTalk is a single-page web application for scheduling and managing doctor appointments. It offers a smooth and interactive experience with dynamic routing, persistent state, and a clean user interface.",
      },
      {
        id: "2",
        name: "Quiz Master",
        videoSrc: "/Videos/Web/Quiz-Master.mp4",
        technologies: ["HTML", "CSS", "PHP", "Jquery"],
        link: "https://github.com/Erfan-Khan-Dhrubo/Quiz-Master",
        code_or_link: "Code",
        description:
          "QuizMaster is a quiz-based website that allows users to take quizzes on various topics, view their scores, and track performance. It also includes admin features for managing quiz content efficiently",
      },
      {
        id: "3",
        name: "Auction Gallery",
        videoSrc: "/Videos/Web/Auction-Gallery.mp4",
        technologies: ["HTML", "Tailwind", "JavaScript", "React"],
        link: "https://project-7-web-development.netlify.app/",
        code_or_link: "Live Link",
        description:
          "Auction Gallery is an interactive auction web app that lets users explore active listings, favorite items, and receive toast notifications—all styled to match a custom Figma design.",
      },
    ],
  };

  const projects = temp.projects;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 place-items-center items-stretch gap-6">
      <Suspense fallback={<span>Loading ......</span>}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index}></ProjectCard>
        ))}
      </Suspense>
    </div>
  );
};

export default WebProject;
