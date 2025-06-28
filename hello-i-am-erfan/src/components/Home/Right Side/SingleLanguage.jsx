import React from "react";

const SingleLanguage = (language) => {
  const { name, color } = language.language;

  return (
    <div className="flex gap-2 items-center">
      <div
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <div className="text-sm font-medium">{name}</div>
    </div>
  );
};

export default SingleLanguage;
