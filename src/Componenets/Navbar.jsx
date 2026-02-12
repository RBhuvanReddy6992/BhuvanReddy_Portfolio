import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>RANABOTHU BHUVAN REDDY</h2>
      <div style={styles.links}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
  },

  links: {
    display: "flex",
    gap: "20px", 
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
  }
};

export default Navbar;
