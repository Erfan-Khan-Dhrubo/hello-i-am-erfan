import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const TopHome = () => {
  // Add state for menu visibility
  const [showMenu, setShowMenu] = useState(false);

  // Close menu on outside click (optional improvement)
  useEffect(() => {
    if (!showMenu) return;
    const handleClick = (e) => {
      // Only close if click is outside the menu button or dropdown
      if (
        !e.target.closest(".top-home-menu-btn") &&
        !e.target.closest(".top-home-dropdown")
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showMenu]);

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
        <div className="relative sm:hidden">
          {/* Three line (hamburger) menu button */}
          <button
            className="top-home-menu-btn flex flex-col justify-center items-center w-8 h-8 rounded-full hover:bg-secondaryBackground transition"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            aria-label="Open menu"
            type="button"
          >
            <span className="block w-6 h-0.5 bg-lightGrey rounded mb-1"></span>
            <span className="block w-6 h-0.5 bg-lightGrey rounded mb-1"></span>
            <span className="block w-6 h-0.5 bg-lightGrey rounded"></span>
          </button>
          {/* Dropdown menu */}
          {showMenu && (
            <div className="top-home-dropdown absolute right-0 mt-2 w-40 bg-secondaryBackground border border-backgroundLine rounded-lg overflow-hidden shadow-lg z-10">
              <ul>
                <li>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn bg-secondaryBackground px-2 py-1 flex gap-2">
                      <IoIosMail className="text-lightGrey" size={24} /> Email
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/erfan-khan-23396a348/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn bg-secondaryBackground px-2 py-1 flex gap-2">
                      <FaLinkedin className="text-lightGrey" size={24} />
                      Linkedin
                    </button>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Erfan-Khan-Dhrubo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn bg-secondaryBackground px-2 py-1 flex gap-2">
                      <FaGithub className="text-lightGrey" size={24} /> Github
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          )}
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
