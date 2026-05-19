import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Projects";
import Contact from "../Contact/Contact";

import { heroData } from "../../data/heroData";
import { aboutData } from "../../data/aboutData";
import { skillsData } from "../../data/skillsData";
import { projectsData } from "../../data/projectsData";
import { contactData } from "../../data/contactData";

const Home = () => {
  return (
    <main>
      <section id="hero">
        <Hero data={heroData} />
      </section>
      <section id="about">
        <About data={aboutData} />
      </section>
      <section id="skills">
        <Skills data={skillsData} />
      </section>
      <section id="projects">
        <Project data={projectsData} />
      </section>
      <section id="contact">
        <Contact data={contactData} />
      </section>
    </main>
  );
};

export default Home;
