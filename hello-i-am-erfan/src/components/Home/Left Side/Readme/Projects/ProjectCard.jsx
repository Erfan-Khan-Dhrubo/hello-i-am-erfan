import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { name, videoSrc, technologies, description, link, code_or_link } =
    project;
  return (
    <div className="text-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm border border-lightGrey h-full">
      {/* Video */}
      <video
        className="w-full h-48 object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <button className=" px-2 py-1 rounded-md border border-backgroundLine text-white text-sm">
              <a
                className="flex items-center gap-2 "
                href={link}
                target="_blank"
              >
                <FaLocationArrow className="text-lightGrey" size={12} />
                {code_or_link}
              </a>
            </button>
          </div>
          <p className="text-sm text-lightGrey">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-secondaryBackground text-lightGrey text-xs font-medium px-2 py-1 rounded border border-lightGrey"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
