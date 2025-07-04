import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const TopHome = () => {
  return (
    <div className="py-6 border-b border-backgroundLine hidden sm:block">
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
        <div className="sm:flex gap-4 hidden">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-secondaryBackground px-2 py-1 border border-lightGrey rounded-lg">
              <IoIosMail className="text-lightGrey" size={28} />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/erfan-khan-23396a348/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-secondaryBackground px-2 py-1 border border-lightGrey rounded-lg">
              <FaLinkedin className="text-lightGrey" size={28} />
            </button>
          </a>

          <a
            href="https://github.com/Erfan-Khan-Dhrubo"
            target="_blank"
            rel="noopener noreferrer"
          >
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
