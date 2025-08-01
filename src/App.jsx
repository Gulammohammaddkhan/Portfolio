import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Introduction from "./Components/Introduction";
import Career from "./Components/Career";
import ContentWrapper from "./Components/ContentWrapper";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";
import data from "./data";
import "animate.css";

function App() {
  const [color, setColor] = useState(false);
  function clickHandler() {
    setColor(!color);
  }
  return (
    <div className={color ? "light" : "dark"}>
      {/* <Navigation /> */}
      <Header
        headerData={data.headerData}
        changeColor={clickHandler}
        theme={color}
      />
      <ContentWrapper>
        <Hero theme={color} />
        <Introduction introData={data.introData} />
        <Career theme={color} />
        <Skills skillsData={data.skillsData} />
        <Project projectData={data.projectData} theme={color} />
        <Connect theme={color} />
        <Footer theme={color} />
      </ContentWrapper>
    </div>
  );
}

export default App;
