import React, { Component, useState } from "react";
import { IoHome } from "react-icons/io5";
import { WiMoonAltWaxingGibbous2 } from "react-icons/wi";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ changeColor, theme }) {
  const [toggle, setToggle] = useState(false);

  function clickHandler() {
    setToggle(!toggle);
  }

  return (
    <div>
      <div
        className={` flex justify-evenly items-center sticky top-0 ${
          theme ? "bg-white" : "bg-black"
        }`}
      >
        <a href="#hero">
          <IoHome className=" scroll-smooth w-[30px] h-[30px] " />
        </a>

        <button>
          <GiHamburgerMenu
            onClick={clickHandler}
            className="max-sm:block min-sm:hidden w-[30px] h-[30px] mt-6"
          />
        </button>

        <div className=" max-sm:hidden scroll-smooth flex gap-6 font-serif border-2 border-[#FFB295] mt-4  py-4 px-10 rounded-full ">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={changeColor}>
          <WiMoonAltWaxingGibbous2 className="w-[30px] h-[30px] " />
        </button>
      </div>

      {toggle && (
        <ul className=" max-sm:block sm:hidden scroll-smooth gap-6 font-serif border-2 border-[#FFB295] mt-4  py-4 px-10 rounded-full ">
          <li>
            <a href="#about">Abotfjgfjgfgfut</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
