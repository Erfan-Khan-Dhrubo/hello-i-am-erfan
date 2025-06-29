import React from "react";
import LeftTop from "./LeftTop";
import LeftInfo from "./LeftInfo";
import Readme from "./Readme/Readme";

const LeftSideHome = () => {
  return (
    <div className="flex flex-col gap-4">
      <LeftTop></LeftTop>
      <LeftInfo></LeftInfo>
      <Readme></Readme>
    </div>
  );
};

export default LeftSideHome;
