import React from "react";

function Introduction() {
  return (
    <div id="about">
      <div className="flex flex-col justify-center items-center pt-24 pb-10">
        <p className="text-lg font-serif pb-4">Introduction</p>
        <p className="text-4xl font-serif font-semibold text-[#acd7e6]">
          About Me
        </p>
      </div>
      <div className="flex justify-evenly pb-10">
        <div className="flex flex-col">
          <p className="self-center text-5xl font-bold text-[#FF8b61]  pb-4">
            7
          </p>
          <p className="text-lg font-serif">Months of Expirence </p>
        </div>
        <div className="flex flex-col">
          <p className="self-center text-5xl font-bold text-[#FF8b61]  pb-4">
            4
          </p>
          <p className="text-lg font-serif">Projects Completed</p>
        </div>
        <div className="flex flex-col">
          <p className="self-center text-5xl font-bold text-[#FF8b61] pb-4">
            5
          </p>
          <p className="text-lg font-serif ">Skilled Mastered</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
