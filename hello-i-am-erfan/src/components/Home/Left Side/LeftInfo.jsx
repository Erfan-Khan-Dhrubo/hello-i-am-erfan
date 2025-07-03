import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaFolder } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";

const LeftInfo = () => {
  return (
    <div className="border border-backgroundLine rounded-lg overflow-hidden">
      <div className="flex gap-6 items-center border-b border-backgroundLine  bg-secondaryBackground  p-4">
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5">
            <img
              className="rounded-3xl"
              src="/Images/logo.png"
              alt="The logo of the website"
            />
          </div>
          <div className="text-white  font-semibold">Erfan Khan</div>
        </div>
        <div className="sm:flex hidden  gap-1 text-lightGrey items-center">
          <IoGameController /> <span>Junior Game Developer</span>
        </div>
        <div className="lg:flex hidden gap-1 text-lightGrey items-center">
          <MdWork /> <span>Frontend Developer</span>
        </div>
        <div className="lg:flex hidden gap-1 text-lightGrey items-center">
          <FaLocationDot /> <span>Dhaka, Bangladesh</span>
        </div>
      </div>
      <div className="flex justify-between items-center p-3">
        <div className="basis-1/3 flex items-center gap-2">
          <FaFolder className="text-lightGrey" /> <a href="">experience</a>
        </div>
        <div className="basis-1/3 text-lightGrey sm:flex hidden ">
          my work experience
        </div>
        <div className="basis-1/3 text-right text-lightGrey ">
          2025 - present
        </div>
      </div>
      <div className="flex justify-between items-center p-3 border-t border-backgroundLine">
        <div className="basis-1/3 flex items-center gap-2">
          <FaFolder className="text-lightGrey" /> <a href="">projects</a>
        </div>
        <div className="basis-1/3 text-lightGrey sm:flex hidden ">
          my personal Projects
        </div>
        <div className="basis-1/3 text-right text-lightGrey">
          2023 - present
        </div>
      </div>
      <div className="flex justify-between items-center p-3 border-t border-backgroundLine">
        <div className="basis-1/3 flex items-center gap-2">
          <FaRegFile className="text-lightGrey" /> <a href="">README.md</a>
        </div>
        <div className="basis-1/3 text-lightGrey sm:flex hidden ">
          my portfolio overview
        </div>
        <div className="basis-1/3 text-right text-lightGrey">
          {new Date().toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })}
        </div>
      </div>
      <div className="flex justify-between items-center p-3 border-t border-backgroundLine">
        <div className="basis-1/3 flex items-center gap-2">
          <FaRegFile className="text-lightGrey" /> <a href="">resume.pdf</a>
        </div>
        <div className="basis-1/3 text-lightGrey sm:flex hidden ">
          my professional resume
        </div>
        <div className="basis-1/3 text-right text-lightGrey">
          {new Date().toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;
