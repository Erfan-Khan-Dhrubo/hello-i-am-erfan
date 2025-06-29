import React from "react";
import { FiBookOpen } from "react-icons/fi";
import AboutMe from "./AboutMe";

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

      <div>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
};

export default Readme;
