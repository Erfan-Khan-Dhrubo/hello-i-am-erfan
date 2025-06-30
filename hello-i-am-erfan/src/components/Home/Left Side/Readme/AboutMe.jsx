import React from "react";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="flex gap-4 py-12 ">
      <div className="basis-1/2 flex justify-center items-center">
        <img
          src="/Images/profile.jpg"
          alt=""
          className="w-80 h-80 object-cover rounded-full"
        />
      </div>
      <div className="basis-1/2  flex flex-col gap-2 justify-center">
        <p className="text-lightGrey">
          <BsEmojiLaughingFill className="inline mr-2 mb-1" />
          Hi, I'm <span className="text-white text-xl">Erfan Khan</span> — a
          Computer Science student and developer with a passion for{" "}
          <span className="text-white">front-end </span>
          design and immersive{" "}
          <span className="text-white">game development</span> . I love building
          sleek user interfaces with React and Tailwind CSS, and crafting
          interactive experiences in Unity using C#.
        </p>
        <p className="text-lightGrey">
          <FaBook className="inline mr-2 mb-1" />
          <span className="text-white font-medium">Currently Learning: </span>
          AI and Machine Learning
        </p>
        <p className="text-lightGrey">
          <FaRocket className="inline mr-2 mb-1" />
          <span className="text-white font-medium">Open to:</span> Internships,
          Collaboration Opportunities
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
