import html from "./Images/htmllogo.svg";
import css from "./Images/csslogo.svg";
import javaScript from "./Images/javascriptlogo.svg";
import tailwind from "./Images/tailwindlogo.svg";
import react from "./Images/reactlogo.svg";
import redux from "./Images/reduxIcon.svg";

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
      heading: "Optimist-Dev",
      para: "A responsive online learning platform showcasing courses, progress tracking, and enrollment details with a clean, user-friendly interface.",
    },
    {
      heading: "Hijrat",
      para: "A responsive Hajj & Umrah tours website showcasing packages, booking details, and travel statistics in a clean, user-friendly interface.",
    },
    {
      heading: "E-Commerce",
      para: "A responsive e-commerce website showcasing products, pricing, and order details with a clean, user-friendly interface.",
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
  ],
  introData: [
    { numb: 2 + "+", desc: "Years of Expirence" },
    { numb: 7, desc: "Projects Completed" },
    { numb: 6, desc: "Skills Mastered" },
  ],
};

export default data;
