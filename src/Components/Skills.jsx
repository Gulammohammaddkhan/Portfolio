import React from "react";

function Skills({ skillsData }) {
  return (
    <div id="skills">
      <div className="flex flex-col items-center py-24">
        <p className="text-lg font-serif pb-2">What I Offer</p>
        <p className="animate__animated animate-pulse animate__delay-1s animate__slow text-4xl font-semibold font-serif">
          My Skills
        </p>
      </div>
      <div className="grid grid-cols-5  max-sm:flex max-sm:flex-col">
        {skillsData?.map((item) => {
          return (
            <div
              key={item.skill}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={item.imgSrc}
                alt="html-logo"
                className="w-36 pb-2 transform transition duration-300 ease-in-out hover:scale-110"
              />
              <p className="font-serif font-semibold text-lg">{item.skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
