import React from "react";
import LeftTop from "./LeftTop";
import LeftInfo from "./LeftInfo";

const LeftSideHome = () => {
  return (
    <div className="flex flex-col gap-4">
      <LeftTop></LeftTop>
      <LeftInfo></LeftInfo>
    </div>
  );
};

export default LeftSideHome;
