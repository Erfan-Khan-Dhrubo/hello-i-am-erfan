import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-black text-lightWhite pt-6 px-6 pb-3 border-b border-backgroundLine">
      <div className="flex flex-col gap-6">
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
        <div>
          <ul className="flex gap-8 text-sm">
            <li className="nav-link">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to={"/MyBookings"}>My-Bookings</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to={"/Blogs"}>Blogs</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to={"/ContactUs"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
