import React from "react";
import { IoSettings } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const WorkDetail = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h4 className="sm:text-xl text-lg">
          <IoSettings className="inline mr-2 mb-1" />
          Bad Wifi Interactive{" "}
          <span className="block sm:inline">(April 2025 - Present)</span>
        </h4>
        <p className="text-lightGrey">
          <FaCheckCircle className="inline mr-2 mb-1" />
          <span className="text-white font-medium">Overview: </span> Working on
          the development of a 2D game using Unity. Responsible for scripting
          gameplay mechanics, designing levels, and implementing interactive UI
          using C#.
        </p>
        <p className="text-lightGrey">
          <FaCheckCircle className="inline mr-2 mb-1" />
          <span className="text-white font-medium">Technologies: </span> Unity
          and C#
        </p>
        <p className="text-lightGrey">
          <FaCheckCircle className="inline mr-2 mb-1" />
          <span className="text-white font-medium">Concepts: </span> Game
          development, 2D game physics, object pooling, UI design
        </p>
      </div>
    </div>
  );
};

export default WorkDetail;
