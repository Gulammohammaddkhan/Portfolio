import React from "react";

function Introduction({ introData }) {
  return (
    <div id="about" className="pb-28">
      <div className=" flex flex-col justify-center items-center pt-24 pb-10">
        <p className="animate__animated animate__lightSpeedInLeft animate__delay-1s animate__slow animate__repeat text-lg font-serif pb-4">
          Introduction
        </p>
        <p className=" animate__animated animate-pulse animate__delay-1s animate__slow text-4xl font-serif font-semibold text-[#acd7e6]">
          About Me
        </p>
      </div>
      <div className="flex max-sm:flex-col justify-evenly pb-10">
        {introData?.map((item) => {
          return (
            <div
              key={item.numb}
              className="flex flex-col max-sm:flex max-sm:justify-center max-sm:items-center "
            >
              <span className=" self-center text-5xl font-bold text-[#FF8b61]  pb-4 transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
                {item.numb}
              </span>
              <span className="text-lg font-serif">{item.desc} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Introduction;
