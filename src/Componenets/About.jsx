import React from "react";

function About() {
  return (
    <section style={styles.about} id="about">
      {/* Left Side - About Me */}
      <div style={styles.aboutLeft}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.text}>
          I am a dedicated Java Developer with a strong foundation in building and integrating backend systems. My hands-on experience includes developing full-featured applications like a Spring Boot-based Library Management System, implementing RESTful APIs, CRUD operations, and database integration using Spring Data JPA and MySQL. I complement this backend expertise with a solid understanding of front-end fundamentals (HTML5, CSS3, Bootstrap, JavaScript, React) and a commitment to writing clean, scalable, and well-architected code. I am eager to apply my skills in Core Java, OOP principles, and Agile methodologies to contribute to a collaborative engineering team.
        </p>

        <p style={styles.text}>
          I’m continuously learning and seeking opportunities to grow as a backend-focused software engineer with full-stack exposure.
        </p>

        {/* Resume Button below About Me text */}
        <a
          href="https://docs.google.com/document/d/1Tut17aXtqDubLRgZxqbjcT_7LZsYD2uG/edit?usp=sharing&ouid=102824729528321535385&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.resumeBtn}
        >
          View Resume
        </a>
      </div>

      {/* Right Side - Certifications */}
      <div style={styles.aboutRight}>
        <h3 style={styles.subHeading}>Certifications</h3>

        <div style={styles.certGrid}>
          <div style={styles.certCard}>
            <h4>Java Full Stack</h4>
            <p>Vcube Software Solutions</p>
          </div>

          <div style={styles.certCard}>
            <h4>Data Analytics Essentials</h4>
            <p>Cisco</p>
          </div>

          <div style={styles.certCard}>
            <h4>Data Structures and Algorithms</h4>
            <p>Coursera</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  about: {
    display: "flex",
    gap: "60px",
    alignItems: "flex-start",
    padding: "80px 10%",
    flexWrap: "wrap", // Makes it responsive
  },

  aboutLeft: {
    flex: 2,
    minWidth: "300px", // Ensures mobile doesn't shrink too much
  },

  aboutRight: {
    flex: 1,
    minWidth: "200px",
  },

  heading: {
    marginBottom: "20px"
  },

  subHeading: {
    marginBottom: "20px",
    color: "#38bdf8"
  },

  text: {
    marginBottom: "15px",
    lineHeight: "1.6",
    maxWidth: "600px"
  },

  resumeBtn: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 22px",
    border: "1px solid #38bdf8",
    borderRadius: "6px",
    color: "#38bdf8",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  certGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px"
  },

  certCard: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "10px",
    padding: "15px",
    transition: "all 0.3s ease"
  }
};

export default About;
