import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { heroData } from "./data/heroData";
import "./App.css";
import About from "./components/About/About";
import { aboutData } from "./data/aboutData";
import Skills from "./components/Skills/Skills";
import { skillsData } from "./data/skillsData";
import Project from "./components/Project/Projects";
import { projectsData } from "./data/projectsData";
import Contact from "./components/Contact/Contact";
import { contactData } from "./data/contactData";


function App() {
  return (
    <>
      <Navbar />
      <Hero data={heroData}/>
      <About data={aboutData}/>
      <Skills data={skillsData}/>
      <Project data={projectsData}/>
      <Contact data={contactData}/>
    </>
  );
}

export default App;
