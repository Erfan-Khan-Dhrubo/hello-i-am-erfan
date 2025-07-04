import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router";

const Header = () => {
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
    <div className="bg-black text-lightWhite pt-6 px-6 pb-3 border-b border-backgroundLine">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8">
              <img
                className="rounded-3xl"
                src="/Images/logo.png"
                alt="The logo of the website"
              />
            </div>
            <div>
              Erfan Khan /{" "}
              <span className="text-white font-semibold">portfolio</span>
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
        </div>
        <div>
          <ul className="flex gap-8 text-sm">
            <li className="nav-link">
              <NavLink to={"/"}>
                {" "}
                <span className="text-lightGrey">&lt;&gt;</span> Code
              </NavLink>
            </li>
            <li className="nav-link hidden">
              <NavLink to={"/MyBookings"}>My-Bookings</NavLink>
            </li>
            <li className="nav-link hidden">
              <NavLink to={"/Blogs"}>Blogs</NavLink>
            </li>
            <li className="nav-link hidden">
              <NavLink to={"/ContactUs"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
