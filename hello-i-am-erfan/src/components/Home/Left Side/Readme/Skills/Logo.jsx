import React from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaUnity,
} from "react-icons/fa";

import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { BiData } from "react-icons/bi";
import { GiProcessor, GiCircuitry } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";

const iconMap = {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  TbBrandCSharp,
  FaPhp,
  BiData,
  GiProcessor,
  GiCircuitry,
  FaReact,
  SiTailwindcss,
  FaUnity,
  FaNodeJs,
  SiFirebase,
  FaGithub,
};

const Logo = ({ skill }) => {
  const Icon = iconMap[skill.file_path];
  console.log(skill);
  const { name, type } = skill;
  return (
    <div className="flex md:gap-4 gap-2 text-lightGrey border border-lightGrey rounded-md md:pl-4 pl-2  h-24 transition-colors duration-200 hover:border-backgroundLine group">
      <div className="flex items-center">
        {Icon && (
          <Icon
            size={40}
            className="text-lightGrey transition-colors duration-200 group-hover:text-backgroundLine"
          />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-white">{name}</p>
        <p className="text-sm md:flex hidden">{type}</p>
      </div>
    </div>
  );
};

export default Logo;
