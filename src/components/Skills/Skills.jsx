import React from "react";
import styles from "./Skill.module.css";

function Skills({ data }) {
  return (
    <section id="skills" className={`${styles.skills} min-h-screen flex items-center py-4 text-white`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className={`${styles.title} text-3xl md:text-4xl font-bold text-center`}>
          My <span className={styles.highlight}>Skills</span>
        </h2>

        {/* Subtitle */}
        <p className={`${styles.subtitle} text-center mt-2 mb-10`}>
          Crafting seamless UI/UX and clean code
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((group) => (
            <div
              key={group.id}
              className={`${styles.card} rounded-xl p-6`}
            >
              {/* Card Title */}
              <h3 className={`${styles.cardTitle} text-lg font-semibold mb-4`}>
                {group.title}
              </h3>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, index) => (
                  <span
                    key={index}
                    className={`${styles.badge} px-3 py-1 text-sm rounded-full`}
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;