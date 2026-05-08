import React from "react";
import styles from "./About.module.css";

function About({ data }) {
  return (
    <section id="about" className={`${styles.about} min-h-screen flex items-center py-4 text-white`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className={`${styles.title} text-3xl md:text-4xl font-bold text-center mb-5`}>
          About <span className={styles.highlight}>Me</span>
        </h2>

        {/* Bio */}
        <p className={`${styles.bio} text-center max-w-3xl mx-auto leading-relaxed`}>
          {data.bio}
        </p>

        {/* Approach Title */}
        <h3 className={`${styles.approachTitle} text-2xl md:text-3xl font-semibold text-center mt-8 mb-10`}>
          My Approach
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.approach.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} flex items-center gap-4 px-6 py-5 rounded-xl`}
            >
              {/* Number */}
              <div className={styles.number}>
                {item.id}
              </div>

              {/* Text */}
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;