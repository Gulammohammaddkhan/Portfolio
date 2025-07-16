import React from "react";
import html from "../Images/html-logo.svg";
import css from "../Images/css-logo.svg";
import javaScript from "../Images/javaScript-logo..svg";
import tailwind from "../Images/tailwind-logo.svg";
import react from "../Images/react-logo..svg";

function Skills() {
  return (
    <div id="skills">
      <div className="flex flex-col items-center py-24">
        <p className="text-lg font-serif pb-2">What I Offer</p>
        <p className="text-4xl font-semibold font-serif">My Skills</p>
      </div>
      <div className="grid grid-cols-5">
        <div className="flex flex-col justify-center items-center">
          <img src={html} alt="html-logo" className="w-36" />
          <p className="font-serif font-semibold text-lg">HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={css} alt="css-logo" className="w-36" />
          <p className="font-serif font-semibold text-lg">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={javaScript} alt="javaScript-logo" className="w-36 pb-1" />
          <p className="font-serif font-semibold text-lg">JAVASCRIPT</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={tailwind} alt="tailwind-logo" className="w-36" />
          <p className="font-serif font-semibold text-lg">TAILWIND</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={react} alt="react-logo" className="w-36" />
          <p className="font-serif font-semibold text-lg">REACT</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
