import React from 'react';

function Hero() {
  return (
    <section style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <div>
        <h1 style={{ fontSize: "3rem" }}>Hi, I’m Ranabothu Bhuvan Reddy</h1>

        <h2 style={{ color: "#38bdf8", margin: "10px 0" }}>
          Aspiring Java Developer | Front-End Enthusiast
        </h2>

        <p style={{ maxWidth: "500px", marginBottom: "20px" }}>
          I design and build clean, responsive web applications focused on usability, performance, and real-world results. I’m passionate about front-end development and creating intuitive, user-friendly digital experiences.
        </p>

        <a href="#projects" style={styles.button}>View My Work</a>
      </div>
    </section>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    background: "#38bdf8",
    color: "#0f172a",
    borderRadius: "5px",
    fontWeight: "bold"
  }
};

export default Hero;
