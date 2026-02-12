import React from 'react';
import './index.css';
function Contact() {
  return (
    <section
      id="contact"
      style={styles.section}
    >
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>

        <p style={styles.text}>RANABOTHU BHUVAN REDDY</p>
        <p style={styles.text}>Email: bhuvanreddy6994@gmail.com</p>

        <div style={styles.links}>
          <a
            href="https://www.linkedin.com/in/ranabothu-bhuvan/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/RBhuvanReddy6992"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#f8fafc",
    textAlign: "center",
    padding: "0 20px"
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center"
  },

  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#38bdf8"
  },

  text: {
    fontSize: "1.2rem"
  },

  links: {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  button: {
    padding: "10px 20px",
    border: "1px solid #38bdf8",
    borderRadius: "6px",
    color: "#38bdf8",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease"
  }
};

export default Contact;

