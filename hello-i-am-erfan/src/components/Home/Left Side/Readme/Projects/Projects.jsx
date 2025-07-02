import React, { useState } from "react";
import GameProject from "./GameProject";
import WebProject from "./WebProject";

const tabs = [
  { label: "Game", value: "Game" },
  { label: "Web", value: "Web" },
];

const Projects = () => {
  const [selected, setSelected] = useState("Game");

  const renderContent = () => {
    switch (selected) {
      case "Game":
        return <GameProject />;
      case "Web":
        return <WebProject />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Slide bar toggle */}
      <div className="relative w-full max-w-xs mx-auto">
        <div className="flex border border-lightGrey rounded-full relative">
          {/* Sliding indicator */}
          <div
            className="absolute top-0 left-0 h-full transition-all duration-300 rounded-full bg-secondaryBackground border border-lightGrey z-0"
            style={{
              width: `calc(100% / ${tabs.length})`,
              transform: `translateX(${
                tabs.findIndex((tab) => tab.value === selected) * 100
              }%)`,
            }}
          ></div>
          {tabs.map((tab, idx) => (
            <button
              key={tab.value}
              className={`flex-1 z-10 relative px-4 py-1 rounded-full transition-colors duration-300
                  ${selected === tab.value ? "text-white" : "text-lightGrey"}
                  font-semibold focus:outline-none`}
              onClick={() => setSelected(tab.value)}
              style={{
                // Remove background for selected, since the slider is behind
                background: "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="text-3xl ">Explore My Work</div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Projects;
