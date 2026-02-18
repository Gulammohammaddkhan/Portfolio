import React from "react";
import ContentWrapper from "./ContentWrapper";

function Career({ theme }) {
  return (
    <div className="pb-10">
      <h1 className=" animate__animated animate-pulse animate__delay-1s animate__slow flex justify-center text-3xl font-serif pb-4">
        Career - Highlights
      </h1>
      <div className="flex items-center gap-2 pb-2">
        <div className="w-4 h-4 bg-[#acd6e6] rounded-full"></div>
        <h1 className="text-2xl font-bold text-[#FF8b61]">MAK Byte</h1>
      </div>
      <p className="font-serif font-semibold pb-6">
        Began my professional journey as a Frontend Engineer at Mak Byte from
        September 2023, where I built a strong foundation in web development.
      </p>
      <div
        className={`flex flex-col justify-center items-center w-[100%] transform transition duration-300 ease-in-out hover:scale-110 ${
          theme ? "bg-[#dbebff] text-gray-600" : "bg-[#525151] text-black"
        } h-[100%] py-10 rounded-md`}
      >
        <p className=" max-sm:px-4 font-bold font-serif pb-4">
          "Code is my canvas, and the web is my gallery."
        </p>
        <p className="font-700 font-serif">— My Approach to Development</p>
      </div>
    </div>
  );
}

export default Career;

// July 2022 to January 2023
