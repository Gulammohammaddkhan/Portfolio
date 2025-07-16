import React from "react";
import { BsDownload } from "react-icons/bs";

function Button({ text, bgColor, color, type, hoverColor, hoverText, theme }) {
  return (
    <button
      className={`bg-[${bgColor}] text-[${color}] hover:bg-[${hoverColor}] hover:text-[${hoverText}]
        flex  items-center gap-2 cursor-pointer py-4 px-8 rounded-full  font-semibold mr-6 `}
    >
      {text}
      {type === "download" && (
        <BsDownload className="flex items-center justify-center" />
      )}
    </button>
  );
}

export default Button;
