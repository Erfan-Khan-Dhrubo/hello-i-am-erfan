import React, { Suspense } from "react";
import SingleColorBar from "./SingleColorBar";
import SingleLanguage from "./SingleLanguage";

const Language = () => {
  const temp = [
    {
      id: 1,
      name: "Python",
      color: "#FF6F61",
      value: 10,
    },
    {
      id: 2,
      name: "HTML",
      color: "#FFA07A",
      value: 20,
    },
    {
      id: 3,
      name: "CSS",
      color: "#6495ED",
      value: 10,
    },
    {
      id: 4,
      name: "JavaScript",
      color: "#FFD700",
      value: 10,
    },
    {
      id: 5,
      name: "C#",
      color: "#8A2BE2",
      value: 10,
    },
    {
      id: 6,
      name: "PHP",
      color: "#9370DB",
      value: 5,
    },
    {
      id: 7,
      name: "SQL",
      color: "#20B2AA",
      value: 5,
    },
    {
      id: 8,
      name: "Assembly",
      color: "#A52A2A",
      value: 30,
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
