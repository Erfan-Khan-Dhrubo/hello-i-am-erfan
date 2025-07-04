import React from "react";
import { FaCodeBranch } from "react-icons/fa6";
import { LuTag } from "react-icons/lu";
import { PiBracketsAngleBold } from "react-icons/pi";

const LeftTop = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <div>
          <button className="btn bg-secondaryBackground px-3 py-1 border border-lightGrey rounded-md flex justify-center items-center gap-2">
            <FaCodeBranch className="text-lightGrey" size={16} />{" "}
            <span className="text-sm font-semibold">main</span>
          </button>
        </div>
        <div className="px-3 py-1  sm:flex hidden justify-center items-center gap-1">
          <FaCodeBranch className="text-lightGrey" size={16} />{" "}
          <span className="text-white"> 1</span>
          <span className="text-lightGrey text-sm font-semibold">Branch</span>
        </div>
        <div className="px-3 py-1  sm:flex hidden justify-center items-center gap-1">
          <LuTag className="text-lightGrey" size={16} />{" "}
          <span className="text-white"> 0</span>
          <span className="text-lightGrey text-sm font-semibold">Tags</span>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/Erfan-Khan-Dhrubo/hello-i-am-erfan"
          target="_blank"
        >
          <button className="btn bg-btnGreen px-3 py-1 rounded-sm flex justify-center items-center gap-2 text-sm font-semibold">
            <PiBracketsAngleBold size={16} /> <span>Code</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default LeftTop;
