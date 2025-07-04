import React from "react";
import RightSideHome from "../components/Home/Right Side/RightSideHome";
import LeftSideHome from "../components/Home/Left Side/LeftSideHome";
import TopHome from "../components/Home/Top side/TopHome";

const Home = () => {
  return (
    <div className="text-white lg:w-8/10 w-9/10 mx-auto">
      <TopHome></TopHome>
      <div className="flex flex-col lg:flex-row lg:gap-6 gap-10 mt-6">
        <div className="basis-3/4">
          <LeftSideHome />
        </div>
        <div className="basis-1/4">
          <RightSideHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
