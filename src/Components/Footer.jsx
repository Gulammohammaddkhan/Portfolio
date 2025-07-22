import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import linkedIn from "../Images/linkedinicon.webp";

function Footer({ theme }) {
  return (
    <div
      className={`w-[100%]  flex justify-center items-center gap-6 pt-10 ${
        theme === false
          ? " border-t-2 border-[#ff8b61] "
          : "border-t-2 border-black"
      }`}
    >
      <FaSquareGithub
        className={` w-16 h-16 ${
          theme === false ? " text-[#a9a8a8]" : " text-[#00005e]"
        }`}
      />
      <img src={linkedIn} alt="linkedin-logo" className="w-18 h-18" />
    </div>
  );
}

export default Footer;
