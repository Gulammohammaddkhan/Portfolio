import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { WiMoonAltWaxingGibbous2 } from "react-icons/wi";

function Navigation({ changeColor }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-evenly items-center  relative ">
      <button>
        <IoHome className=" scroll-smooth w-[30px] h-[30px]   absolute top-5 left-15  " />
      </button>
      <button>
        <GiHamburgerMenu className="sm:block w-[30px] h-[30px] mt-6" />
      </button>
      <div className=" max-sm:hidden scroll-smooth flex gap-6 font-serif border-2 border-[#FFB295] mt-4  py-4 px-10 rounded-full ">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <button onClick={changeColor}>
        <WiMoonAltWaxingGibbous2 className="w-[30px] h-[30px] absolute top-5 right-20" />
      </button>
    </div>
  );
}

export default Navigation;
