import React, { Component, useState } from "react";
import { IoHome } from "react-icons/io5";
import { WiMoonAltWaxingGibbous2 } from "react-icons/wi";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ changeColor, theme, headerData }) {
  const [toggle, setToggle] = useState(false);

  function clickHandler() {
    setToggle(!toggle);
  }

  return (
    <div className=" w-full sticky  top-0 z-50">
      <div
        className={` flex justify-evenly items-center pb-2 ${
          theme ? "bg-white" : "bg-black"
        }`}
      >
        <a href="#hero">
          <IoHome className="transform transition duration-300 ease-in-out hover:scale-140 scroll-smooth w-[30px] h-[30px] absolute top-7 left-15 " />
        </a>

        <button>
          <GiHamburgerMenu
            onClick={clickHandler}
            className="max-sm:block min-sm:hidden w-[30px] h-[30px] mt-6"
          />
        </button>

        <div className=" transform transition duration-300 ease-in-out hover:scale-110 max-sm:hidden scroll-smooth flex gap-6 font-serif border-2 border-[#FFB295] mt-4 ml-[-260px] py-4 px-10 rounded-full ">
          {headerData?.map((data) => {
            return (
              <a
                key={data.name}
                href={data.link}
                className="capitalize cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
              >
                {data.name}
              </a>
            );
          })}
        </div>

        <button onClick={changeColor}>
          <WiMoonAltWaxingGibbous2 className="w-[30px] h-[30px] absolute top-7 right-20 transform transition duration-300 ease-in-out hover:scale-140  " />
        </button>
      </div>

      {toggle && (
        <ul className=" text-center max-sm:block sm:hidden scroll-smooth font-serif sticky mt-4  py-4 px-6 rounded-md ">
          <li>
            <a
              className="border-b-1 border-[#FFB295]  pb-1  mb-2"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="border-b-1 border-[#FFB295]  pb-1  mb-2"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="border-b-1 border-[#FFB295]  pb-1  mb-2"
              href="#project"
            >
              Project
            </a>
          </li>
          <li>
            <a
              className="border-b-1 border-[#FFB295]  pb-1  mb-2"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
