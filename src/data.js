import html from "./Images/htmllogo.svg";
import css from "./Images/csslogo.svg";
import javaScript from "./Images/javascriptlogo.svg";
import tailwind from "./Images/tailwindlogo.svg";
import react from "./Images/reactlogo.svg";
import redux from "./Images/redux-logo-svg.svg";
import next from "./Images/next.svg";

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
      para: "An inspiring clone of Academind Pro Membership replicating the real experience using Redux, Stripe, and modern web technologies.",
    },
    {
      heading: "IntMaster",
      para: "A user-friendly interface designed to provide real-time interviews with both theory and practical questions and keeping day to goals for user.",
    },

    {
      heading: "Optimist Dev",
      para: "An online learning platform featuring courses, video lectures, student enrollment, and progress tracking.",
    },
    {
      heading: "E-Commerce Website",
      para: "A responsive shopping website with dynamic product listings and smooth navigation.",
    },
    {
      heading: "Hijrat Tours & Travel",
      para: "A responsive travel website showcasing tour packages, destinations, and travel information.",
    },
    {
      heading: "Mumbai Explorer",
      para: "A city guide to explore Mumbai attractions, weather, and local events.",
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
    { skill: "REDUX", imgSrc: redux },
    { skill: "NEXT", imgSrc: next },
  ],
  introData: [
    { numb: "3+", desc: "Years of Expirence" },
    { numb: 8, desc: "Projects Completed" },
    { numb: 7, desc: "Skills Mastered" },
  ],
};

export default data;
