import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Introduction from "./Components/Introduction";
import Career from "./Components/Career";
import ContentWrapper from "./Components/ContentWrapper";
import Skills from "./Components/Skills";
import Project from "./Components/project";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

function App() {
  const [color, setColor] = useState(false);
  function clickHandler() {
    setColor(!color);
  }
  return (
    <div className={color ? "light" : "dark"}>
      <Header changeColor={clickHandler} theme={color} />
      {/* <Navigation /> */}
      <ContentWrapper>
        <Hero theme={color} />
        <Introduction />
        <Career theme={color} />
        <Skills />
        <Project theme={color} />
        <Connect theme={color} />
        <Footer theme={color} />
      </ContentWrapper>
    </div>
  );
}

export default App;
