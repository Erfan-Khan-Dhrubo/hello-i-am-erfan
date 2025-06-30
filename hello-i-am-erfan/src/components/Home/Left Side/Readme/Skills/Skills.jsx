import React, { useState } from "react";
import Game from "./Game";
import Web from "./Web";
import Other from "./Other";

const tabs = [
  { label: "Game", value: "Game" },
  { label: "Web", value: "Web" },
  { label: "Other", value: "Other" },
];

const Skills = () => {
  const [selected, setSelected] = useState("Game");

  const renderContent = () => {
    switch (selected) {
      case "Game":
        return <Game />;
      case "Web":
        return <Web />;
      case "Other":
        return <Other />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Slide bar toggle */}
      <div className="relative w-full max-w-xs mx-auto mb-4">
        <div className="flex bg-gray-200 rounded-full relative">
          {/* Sliding indicator */}
          <div
            className="absolute top-0 left-0 h-full transition-all duration-300 rounded-full bg-orange z-0"
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
              className={`flex-1 z-10 relative px-4 py-2 rounded-full transition-colors duration-300
                ${selected === tab.value ? "text-white" : "text-gray-700"}
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
      <div>{renderContent()}</div>
    </div>
  );
};

export default Skills;
