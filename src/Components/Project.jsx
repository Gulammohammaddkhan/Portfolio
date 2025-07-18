function Project({ theme, projectData }) {
  return (
    <div id="project">
      <div className="flex flex-col items-center pt-24  pb-12">
        <p className="text-lg font-serif pb-2">What I have Created</p>
        <p className="text-4xl font-serif">MY PROJECTS</p>
      </div>
      <div className="grid grid-cols-4 max-sm:flex max-sm:flex-col gap-6 items-center justify-center  ">
        {projectData?.map((item) => {
          return (
            <div
              key={item.heading}
              className={`h-64 overflow-auto  rounded-md cursor-pointer py-6 px-6 ${
                theme === false
                  ? "bg-[#525151] text-black hover:bg-[#FFBFA7] hover:text-gray-500"
                  : "bg-[#dbeafe] text-[#00005e] hover:bg-[#c5d3e5] hover:text-white"
              }`}
            >
              <h2 className="text-lg   font-semibold font-serif">
                {item.heading}
              </h2>
              <p className=" font-serif"> {item.para} </p>
            </div>
          );
        })}
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
