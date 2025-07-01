import React from "react";
import CopyButton from "../../../Extras/CopyButton";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ConnectMe = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-3xl">Let’s Connect</h4>
      <p className="text-lightGrey">
        Got a project idea or just want to chat? I’m always open to exciting
        opportunities and collaborations. Feel free to drop a message — I’d be
        happy to hear from you!
      </p>
      <div className=" py-4">
        <CopyButton></CopyButton>
      </div>

      <div className="flex gap-4 items-center px-5">
        <a href="#" target="_blank">
          <button className="btn">
            <IoIosMail className="text-lightGrey" size={28} />
          </button>
        </a>

        <a href="#" target="_blank">
          <button className="btn">
            <FaLinkedin className="text-lightGrey" size={22} />
          </button>
        </a>

        <a href="https://github.com/Erfan-Khan-Dhrubo" target="_blank">
          <button className="btn">
            <FaGithub className="text-lightGrey" size={22} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ConnectMe;
