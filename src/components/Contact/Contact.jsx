import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css";

function Contact({ data }) {
  return (
    <section
      id="contact"
      className={`${styles.contact} min-h-screen flex items-center py-24 text-white`}
    >
      <div className="max-w-5xl mx-auto px-4 text-center w-full">
        {/* Title */}
        <h2 className={`${styles.title} text-3xl md:text-4xl font-bold`}>
          Get In <span className={styles.highlight}>Touch</span>
        </h2>

        {/* Subtitle */}
        <p className={`${styles.subtitle} mt-2 mb-10`}>
          Feel free to reach out — I'd love to connect!
        </p>

        {/* Contact Card */}
        <div className={styles.card}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email */}
            <a href={`mailto:${data.email}`} className={styles.contactLink}>
              <FaEnvelope className={styles.icon} size={16} />
              {data.email}
            </a>

            {/* LinkedIn */}
            <a
              href={data.linkedin}
              rel="noreferrer"
              target="_blank"
              className={styles.contactLink}
            >
              <FaLinkedin className={styles.icon} size={16} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href={data.github}
              rel="noreferrer"
              target="_blank"
              className={styles.contactLink}
            >
              <FaGithub className={styles.icon} size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
