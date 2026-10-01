import React, { useRef, useState } from "react";
import mail from "../Images/mailicon.webp";
import { IoIosMail } from "react-icons/io";
import emailjs from "@emailjs/browser";

function Connect({ theme }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = formRef.current;
    const formData = new FormData(form);
    const nameVal = formData.get("name") || "";
    const emailVal = formData.get("email") || "";
    const messageVal = formData.get("message") || "";

    const templateParams = {
      name: nameVal,
      user_name: nameVal,
      email: emailVal,
      user_email: emailVal,
      message: messageVal,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_s0qfwjr",
        "template_aithf0p",
        templateParams,
        "bqZuzaZq4XYFCIDLC"
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Message sent successfully! ✅ Check your email.",
          });
          form.reset();
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setStatus({
            type: "error",
            message:
              "Failed to send message ❌ Please check your internet or try again.",
          });
        }
      );
  };

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
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-2"
      >
        <div className="flex max-sm:flex max-sm:flex-col justify-center gap-8 mb-6">
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className={` w-72 py-4 px-2 rounded-md transform transition duration-300 ease-in-out hover:scale-110 ${
                theme === false
                  ? "bg-[#525151] text-black border-0 focus:border-0 focus:ring-2 focus:ring-[#FFB295] focus:outline-hidden"
                  : "bg-[#dbeafe] text-[#4a4949] hover:bg-[#c5d3e5] hover:text-[#00008c] focus:border-0 focus:ring-2 focus:ring-[#c5d3e5] focus:outline-hidden "
              }`}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className={` w-72 py-4 px-2 rounded-md transform transition duration-300 ease-in-out hover:scale-110 ${
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
          required
          placeholder="Enter your message"
          className={` w-[100%] h-72 py-4 px-2 mb-4 rounded-md transform transition duration-300 ease-in-out hover:scale-110 ${
            theme === false
              ? "bg-[#525151] text-black border-0 focus:border-0 focus:ring-2 focus:ring-[#FFB295] focus:outline-hidden"
              : "bg-[#dbeafe] text-[#4a4949] hover:bg-[#c5d3e5] hover:text-[#00008c] focus:border-0 focus:ring-2 focus:ring-[#c5d3e5] focus:outline-hidden"
          }`}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 py-4 px-8 rounded-full font-semibold cursor-pointer transition duration-300 ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
          } ${
            theme === false
              ? "bg-[#ff8b61] text-[#4a4949] hover:bg-[#ffa281]"
              : "bg-[#dbebff] text-[#4a4949] hover:bg-[#c5d3e5] hover:text-[#00008c]"
          }`}
        >
          {loading ? "Sending... ⏳" : "Submit →"}
        </button>

        {status.message && (
          <p
            className={`mt-4 text-sm font-semibold transition-all duration-300 ${
              status.type === "success"
                ? "text-green-600 bg-green-100 px-4 py-2 rounded-lg"
                : "text-red-600 bg-red-100 px-4 py-2 rounded-lg"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
      <div className=" animate__animated animate-pulse animate__delay-1s animate__slow flex justify-center items-center gap-2 mt-32 ">
        <IoIosMail
          className={` w-10 h-10 rounded-sm ${
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
