import React, { Suspense } from "react";
import SingleTech from "./SingleTech";

const Technology = () => {
  const temp = {
    technologies: ["React", "Tailwind CSS", "Node.js", "Unity", "Firebase"],
  };
  const { technologies } = temp;
  return (
    <div className="flex flex-col gap-6">
      <div className="text-lg font-semibold">Technologies</div>
      <div className="flex gap-2 flex-wrap">
        <Suspense fallback={<span>Loading ......</span>}>
          {technologies.map((technology, index) => (
            <SingleTech technology={technology} key={index}></SingleTech>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Technology;
