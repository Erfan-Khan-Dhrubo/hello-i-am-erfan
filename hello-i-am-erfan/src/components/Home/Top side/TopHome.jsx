import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const TopHome = () => {
  return (
    <div className="py-6 border-b border-backgroundLine">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-7 h-7">
            <img
              className="rounded-3xl"
              src="/Images/logo.png"
              alt="The logo of the website"
            />
          </div>
          <div className="text-white text-2xl font-semibold">Portfolio</div>
          <div>
            <span className="text-lightGrey text-sm border border-lightGrey rounded-3xl flex justify-center items-center px-2">
              public
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" target="_blank">
            <button className="btn bg-secondaryBackground px-2 py-1 border border-lightGrey rounded-lg">
              <IoIosMail className="text-lightGrey" size={28} />
            </button>
          </a>

          <a href="#" target="_blank">
            <button className="btn bg-secondaryBackground px-2 py-1 border border-lightGrey rounded-lg">
              <FaLinkedin className="text-lightGrey" size={28} />
            </button>
          </a>

          <a href="#" target="_blank">
            <button className="btn bg-secondaryBackground px-2 py-1 border border-lightGrey rounded-lg">
              <FaGithub className="text-lightGrey" size={28} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHome;
