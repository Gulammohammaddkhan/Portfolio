import React from "react";
import mail from "../Images/mail_icon.webp";
import { IoIosMail } from "react-icons/io";
import Button from "./Button";

function Connect({ theme }) {
  return (
    <div id="contact" className="pt-24 pb-10">
      <div className="flex flex-col items-center ">
        <h4 className="text-lg font-serif mb-2">Connect with me</h4>
        <h2 className=" animate__animated animate-pulse animate__delay-1s animate__slow text-5xl font-serif mb-6 ">
          Get in touch
        </h2>
        <p className="font-serif text-lg mb-12">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>
      <form
        action="#"
        className="flex flex-col justify-center items-center gap-2"
      >
        <div className="flex max-sm:flex max-sm:flex-col justify-center  gap-8 mb-6">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className={`  w-72 py-4 px-2 rounded-md transform transition duration-300 ease-in-out hover:scale-110 ${
                theme === false
                  ? "bg-[#525151] text-black border-0 focus:border-0 focus:ring-2 focus:ring-[#FFB295] focus:outline-hidden"
                  : "bg-[#dbeafe] text-[#4a4949] hover:bg-[#c5d3e5] hover:text-[#00008c] focus:border-0 focus:ring-2 focus:ring-[#c5d3e5] focus:outline-hidden "
              }`}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className={`  w-72 py-4 px-2 rounded-md transform transition duration-300 ease-in-out hover:scale-110 ${
                theme === false
                  ? "bg-[#525151] text-black border-0 focus:border-0 focus:ring-2 focus:ring-[#FFB295] focus:outline-hidden"
                  : "bg-[#dbeafe] text-[#4a4949] hover:bg-[#c5d3e5] hover:text-[#00008c] focus:border-0 focus:ring-2 focus:ring-[#c5d3e5] focus:outline-hidden "
              }`}
            />
          </div>
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
          className={` w-[100%] h-72 py-4 px-2 mb-4 rounded-md  transform transition duration-300 ease-in-out hover:scale-110  ${
            theme === false
              ? "bg-[#525151] text-black border-0 focus:border-0 focus:ring-2 focus:ring-[#FFB295] focus:outline-hidden"
              : "bg-[#dbeafe] text-[#4a4949] hover:bg-[#c5d3e5] hover:text-[#00008c] focus:border-0 focus:ring-2 focus:ring-[#c5d3e5] focus:outline-hidden"
          }`}
        ></textarea>
        {/* <button
          type="sumit"
          className={`py-4 px-8 rounded-full cursor-pointer font-semibold mr-6 my-6 ${
            theme === false
              ? "bg-[#ff8b61] text-[#4a4949]  hover:bg-[#ffa281] hover:text-gray-500  "
              : " bg-[#dbebff] text-[#4a4949] hover:bg-[#c5d3e5] hover:text-[#00008c] "
          }`}
        >
          Sumit &rarr;
        </button> */}
        <Button
          text={"Submit →"}
          bgColor={theme === false ? "#ff8b61" : "#dbebff"}
          color={"#4a4949"}
          hoverColor={theme === false ? "#ffa281" : "#c5d3e5"}
          hoverText={"gray-500"}
        />
      </form>
      <div className=" animate__animated animate-pulse animate__delay-1s animate__slow flex justify-center items-center gap-2 mt-32 ">
        <IoIosMail
          className={` w-10 h-10  rounded-sm ${
            theme === false ? "text-[#a9a8a8] " : "text-[#00005e]"
          }`}
        />
        <p className="text-xl font-serif font-semibold">
          gulamkhan512@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Connect;
