import React from "react";
import Technology from "./Technology";
import Language from "./Language";

const RightSideHome = () => {
  return (
    <div>
      <div className="py-1 flex items-center text-lg font-semibold">About</div>
      <div className="flex flex-col gap-6 mt-2">
        <p className="text-lightWhite">
          A GitHub-inspired portfolio showcasing my journey as a Computer
          Science student, highlighting front-end projects and game development
          work — from interactive web apps to immersive Unity experiences. Open
          to freelance, internship, and collaboration opportunities!
        </p>
        <div className="border-b border-backgroundLine w-full"></div>
        <Technology></Technology>
        <div className="border-b border-backgroundLine w-full"></div>
        <Language></Language>
        <div className="border-b border-backgroundLine w-full"></div>
      </div>
    </div>
  );
};

export default RightSideHome;
