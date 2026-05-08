import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      className={`${styles.header} sticky top-0 z-50 backdrop-blur-md`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-3 md:px-6 py-4">

        {/* Logo */}
        <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-full text-white font-bold text-sm md:text-base"
  style={{
    color:"#f2f0ef",
    background: "rgba(80, 200, 220, 0.12)",
    border: "1px solid rgba(80, 200, 220, 0.3)",
    boxShadow: "0 0 12px rgba(80, 200, 220, 0.2)"
  }}
>
  FA
</div>

        {/* Nav Links*/}
        <ul className={`${styles.navLink} flex`}>
          {links.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`${styles.navItems} ${active === item ? styles.active : ""}`}
            >
              {active === item && (
                <motion.div
                  layoutId="activePill"
                  className={styles.pill}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={styles.linkText}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
       <button
  style={{
    color:"#f2f0ef",
    background: "rgba(80, 200, 220, 0.06)",
    border: "1px solid rgba(80, 200, 220, 0.4)",
    boxShadow: "0 0 12px rgba(80, 200, 220, 0.2)"
  }}
  className="text-white px-3 py-2 md:px-6 md:py-6 rounded-full transition text-xs md:text-base whitespace-nowrap hover:opacity-90"
>
  Let's Talk
</button>

      </nav>
    </motion.header>
  );
}

export default Navbar;