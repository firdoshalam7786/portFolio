import React from "react";
import { FaLinkedin, FaGithub,FaDownload } from "react-icons/fa";
import styles from "./Hero.module.css";

const iconMap = {
  LinkedIn: <FaLinkedin size={24} />,
  GitHub: <FaGithub size={24} />,
};

function Hero({ data }) {
  return (
    <section
      id="heroSec"
      className={`${styles.hero} min-h-screen flex items-center px-4 text-white`}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          {/* Greeting */}
          <h1
            className={`${styles.greeting} text-base font-medium tracking-wide`}
          >
            {data.greeting}
          </h1>

          {/* Role */}
          <h2
            className={`${styles.role} text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-3`}
          >
            {data.role}
          </h2>

          {/* Intro */}
          <p
            className={`${styles.intro} mt-4 text-sm leading-relaxed max-w-md`}
          >
            {data.intro}
          </p>

          {/* Resume Button */}
          <a
            href={data.resume}
            download={data.resume}
            className={`${styles.resumeBtn} mt-6 px-6 py-2 rounded-lg text-sm flex items-center gap-2`}
          >
            <FaDownload size={16}/>
            Download CV
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {data.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
              >
                {iconMap[social.label]}
              </a>
            ))}
          </div>
        </div>

        {/* Right Content Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./src/assets/profile.png"
            alt="profile"
            className="w-40 sm:w-52 md:w-60 lg:w-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
