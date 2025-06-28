import React from "react";

const SingleColorBar = ({ language }) => {
  const { color, value } = language;
  return (
    <div
      className="w-full h-2"
      style={{
        backgroundColor: color,
        flexBasis: `${value}%`,
      }}
    ></div>
  );
};

export default SingleColorBar;
