import React from "react";

const SingleTech = ({ technology }) => {
  return (
    <div>
      <div className="text-lightGreen border border-lightGreen rounded-3xl px-2 text-sm">
        {technology}
      </div>
    </div>
  );
};

export default SingleTech;
