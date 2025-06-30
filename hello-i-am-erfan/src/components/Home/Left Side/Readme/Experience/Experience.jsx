import React from "react";
import WorkDetail from "./WorkDetail";
import { IoGameController } from "react-icons/io5";

const Experience = () => {
  return (
    <div className=" flex flex-col gap-6">
      <h2 className="text-3xl">Experience</h2>
      <div className="flex">
        <div className="basis-3/4">
          <WorkDetail></WorkDetail>
        </div>
        <div className="basis-1/4 flex justify-center items-center">
          <IoGameController size={100} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
