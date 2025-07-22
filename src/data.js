import html from "./Images/html-logo.svg";
import css from "./Images/css-logo.svg";
import javaScript from "./Images/javaScript-logo.svg";
import tailwind from "./Images/tailwind-logo.svg";
import react from "./Images/react-logo.svg";

const data = {
  projectData: [
    {
      heading: "Omnifood",
      para: "The smart 365-days-per-year food subscription that will make you eat healthy again. Based on your personal tastes and nutritional needs.",
    },
    {
      heading: "Disney Clone",
      para: "A clone of the Disney+ Hotstar interface featuring modern UI components, route-based navigation, and responsive design.",
    },
    {
      heading: "Academind Clone",
      para: "An inspiring clone of Academind Pro Membership closely mirroring the real version experience with tech like redux, stripe and more.",
    },
    {
      heading: "IntMaster",
      para: "A user-friendly interface designed to provide real-time interviews with both theory and practical questions and keeping day to goals for user.",
    },
  ],
  headerData: [
    {
      name: "about",
      link: "#about",
    },
    {
      name: "skills",
      link: "#skills",
    },
    {
      name: "contact",
      link: "#contact",
    },
    {
      name: "project",
      link: "#project",
    },
  ],
  skillsData: [
    { skill: "HTML", imgSrc: html },
    { skill: "CSS", imgSrc: css },
    { skill: "JAVASCRIPT", imgSrc: javaScript },
    { skill: "REACT", imgSrc: react },
    { skill: "TAILWIND", imgSrc: tailwind },
  ],
  introData: [
    { numb: 7, desc: "Months of Expirence" },
    { numb: 4, desc: "Projects Completed" },
    { numb: 5, desc: "Skills Mastered" },
  ],
};

export default data;
