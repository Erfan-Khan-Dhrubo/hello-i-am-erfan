import React, { Suspense } from "react";
import SingleColorBar from "./SingleColorBar";
import SingleLanguage from "./SingleLanguage";

const Language = () => {
  const temp = [
    {
      id: 1,
      name: "C#",
      color: "#178600",
      value: 39,
      percentage: 39.53,
    },

    {
      id: 2,
      name: "HTML/CSS",
      color: "#E34C26",
      value: 20,
      percentage: 20.49,
    },
    {
      id: 3,
      name: "JavaScript",
      color: "#F1E05A",
      value: 16,
      percentage: 16.12,
    },

    {
      id: 4,
      name: "PHP",
      color: "#4F5D95",
      value: 10,
      percentage: 10.07,
    },

    {
      id: 5,
      name: "Python",
      color: "#3572A5",
      value: 8,
      percentage: 7.12,
    },

    {
      id: 6,
      name: "Assembly",
      color: "#6E4C13",
      value: 7,
      percentage: 6.66,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">Languages</div>
      <div className="flex gap-0.5 rounded-3xl overflow-hidden">
        <Suspense fallback={<span>Loading ......</span>}>
          {temp.map((language) => (
            <SingleColorBar
              language={language}
              key={language.id}
            ></SingleColorBar>
          ))}
        </Suspense>
      </div>
      <div className="flex gap-6 gap-y-1 flex-wrap">
        <Suspense fallback={<span>Loading ......</span>}>
          {temp.map((language) => (
            <SingleLanguage
              language={language}
              key={language.id}
            ></SingleLanguage>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Language;
