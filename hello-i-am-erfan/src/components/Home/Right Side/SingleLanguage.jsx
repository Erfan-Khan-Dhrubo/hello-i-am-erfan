import React from "react";

const SingleLanguage = (language) => {
  const { name, color, percentage } = language.language;

  return (
    <div className="flex gap-2 items-center">
      <div
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <div className="text-xs font-medium flex gap-2">
        <span>{name}</span>
        <span className="text-lightGrey">{percentage} %</span>
      </div>
    </div>
  );
};

export default SingleLanguage;
