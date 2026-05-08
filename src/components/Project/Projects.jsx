import React from "react";
import styles from "./Project.module.css";

function Project({ data }) {
  return (
    <section id="projects" className={`${styles.projects} min-h-screen flex items-center py-16 text-white`}>
      <div className="max-w-6xl mx-auto px-4 w-full">

        {/* Title */}
        <h2 className={`${styles.title} text-3xl md:text-4xl font-bold text-center`}>
          My <span className={styles.highlight}>Projects</span>
        </h2>

        {/* Subtitle */}
        <p className={`${styles.subtitle} text-center mt-2 mb-10`}>
          Some of my recent work
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <div key={project.id} className={styles.card}>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">

                {/* Title */}
                <h3 className={`${styles.cardTitle} mb-2`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`${styles.cardDesc} mb-4`}>
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {(project.techs || []).map((tech, index) => (
                    <span key={index} className={styles.badge}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.liveBtn}
                  >
                    Live ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.githubBtn}
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;