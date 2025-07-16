import React from "react";

function Project({ theme }) {
  return (
    <div id="project">
      <div className="flex flex-col items-center pt-24  pb-12">
        <p className="text-lg font-serif pb-2">What I have Created</p>
        <p className="text-4xl font-serif">MY PROJECTS</p>
      </div>
      <div className="grid grid-cols-4 gap-6 items-center justify-center  ">
        <div
          className={`h-64 rounded-md cursor-pointer py-6 px-6 ${
            theme === false
              ? "bg-[#525151] text-black hover:bg-[#FFBFA7] hover:text-gray-500"
              : "bg-[#dbeafe] text-[#00005e] hover:bg-[#c5d3e5] hover:text-white"
          }`}
        >
          <h1 className="text-lg font-semibold font-serif">Omnifood</h1>
          <p className=" font-serif">
            {" "}
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Based on your personal tastes and nutritional needs.{" "}
          </p>
        </div>
        <div
          className={`h-64 rounded-md cursor-pointer py-6 px-6 ${
            theme === false
              ? "bg-[#525151] text-black hover:bg-[#FFBFA7] hover:text-gray-500"
              : "bg-[#dbeafe] text-[#00005e] hover:bg-[#c5d3e5] hover:text-white"
          }`}
        >
          <h1 className="text-lg font-semibold font-serif">Disney Clone</h1>
          <p className=" font-serif">
            {" "}
            A clone of the Disney+ Hotstar interface featuring modern UI
            components, route-based navigation, and responsive design.{" "}
          </p>
        </div>
        <div
          className={`h-64 rounded-md cursor-pointer py-6 px-6 ${
            theme === false
              ? "bg-[#525151] text-black hover:bg-[#FFBFA7] hover:text-gray-500"
              : "bg-[#dbeafe] text-[#00005e] hover:bg-[#c5d3e5] hover:text-white"
          }`}
        >
          <h1 className="text-lg font-semibold font-serif">Academind Clone</h1>
          <p className=" font-serif">
            {" "}
            An inspiring clone of Academind Pro Membership closely mirroring the
            real version experience with tech like redux, stripe and more.{" "}
          </p>
        </div>
        <div
          className={`h-64 rounded-md cursor-pointer py-6 px-6 ${
            theme === false
              ? "bg-[#525151] text-black hover:bg-[#FFBFA7] hover:text-gray-500"
              : "bg-[#dbeafe] text-[#00005e] hover:bg-[#c5d3e5] hover:text-white"
          }`}
        >
          <h1 className="text-lg font-semibold font-serif">IntMaster</h1>
          <p className=" font-serif">
            A user-friendly interface designed to provide real-time interviews
            with both theory and practical questions and keeping day to goals
            for user.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

// className={`h-64 rounded-md cursor-pointer py-6 px-6 ${
//             theme === false
//               ? "bg-[#525151] text-black hover:bg-[#FFBFA7] hover:text-gray-500"
//               : "bg-[#dbeafe] text-[#00008c] hover:bg-[#c5d3e5] hover:text-white"
//           }`}
