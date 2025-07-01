import React from "react";
import { FiBookOpen } from "react-icons/fi";
import AboutMe from "./AboutMe";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import ConnectMe from "./ConnectMe";

const Readme = () => {
  return (
    <div className="border border-backgroundLine rounded-lg">
      <div className="flex">
        <div className="w-4 border-b border-backgroundLine py-4"></div>
        <div className="w-28 flex gap-2 items-center justify-center border-b-2 border-orange py-4">
          <FiBookOpen className="text-lightGrey" />
          <span className="font-semibold ">README</span>
        </div>
        <div className="border-b py-4 border-backgroundLine flex-1"></div>
      </div>

      <div className="flex flex-col gap-14 p-10">
        <AboutMe></AboutMe>
        <div className="border-b border-backgroundLine w-full"></div>
        <Experience></Experience>
        <div className="border-b border-backgroundLine w-full"></div>
        <Skills></Skills>
        <div className="border-b border-backgroundLine w-full"></div>
        <ConnectMe></ConnectMe>
      </div>
    </div>
  );
};

export default Readme;
