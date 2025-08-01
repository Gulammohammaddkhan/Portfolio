import React from "react";
import { BsDownload } from "react-icons/bs";
import Button from "./Button";

function Hero({ theme }) {
  return (
    <div
      id="hero"
      className=" flex flex-col justify-center items-center self-center py-24 "
    >
      <h1 className="animate__animated animate-pulse animate__delay-1s animate__slow max-sm:text-2xl min-sm:text-7xl font-serif pb-6">
        Gulam Mohammad.Khan
      </h1>
      <h3 className="max-sm:lg min-sm:text-3xl font-serif pb-5">
        Frontend Engineer
      </h3>
      <p className="font-serif max-sm:text-md  min-sm:text-lg pb-10 ">
        I’m Frontend Engineer with 6 months of experience, specialising in
        React, Next.Js, Javascript and other Web technologies.
      </p>
      <div className="flex max-sm:flex-col max-sm:gap-4 ">
        {/* <button className="bg-[#FF8b61] text-[#4a4949] hover:bg-[#ffa281] cursor-pointer py-4 px-8 rounded-full  font-semibold mr-6">
          Contact me &rarr;
        </button> */}

        <a href="#contact">
          <Button
            theme={theme}
            text={"Contact me →"}
            bgColor={"#FF8b61"}
            color={"#4a4949"}
            hoverColor={"#ffa281"}
          ></Button>
        </a>
        <Button
          theme={theme}
          text={"My Resume"}
          bgColor={"#dbeafe"}
          color={"#4a4949"}
          type="download"
          hoverColor={"#c5d3e5"}
        />

        {/* <button className="flex justify-center items-center gap-2 bg-[#dbeafe] text-[#4a4949] hover:bg-[#c5d3e5] cursor-pointer py-4 px-8 rounded-full font-semibold">
        </button> */}
      </div>
    </div>
  );
}

export default Hero;

// bg-[#dbeafe]
