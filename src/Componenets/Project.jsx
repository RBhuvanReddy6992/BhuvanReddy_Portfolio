import React from "react";

function Projects() {
  const projects = [
    {
      title: "Library Management System",
description:
  "A full-stack Library Management System built using Spring Boot, enabling efficient management of books, users, and transactions. Features include RESTful APIs, CRUD operations, role-based access, and MySQL database integration.",
tech: "Java, Spring Boot, Spring Data JPA, MySQL,SpringSecurity, RESTful APIs,JavaScript, HTML, CSS,React",
github: "https://github.com/yourusername/library-management-system"

    },
    {
      title: "ATM Simulator Application",
      description:
        "Backend-focused Java application simulating real ATM operations such as authentication, balance inquiry, deposits, and withdrawals with proper validation and business logic.",
      tech: "Core Java,Oops,SpringBoot,MySQL,Spring Data JPA,Spring Security,RESTful APIs",
      github: "https://github.com/yourusername/atm-simulator"
    },
    {
      title: "Online Voting System",
      description:
        "Secure Java-based voting system with database integration, enabling voter authentication, vote management, and result processing.",
      tech: "Java,J2EE, JDBC, MySQL",
      github: "https://github.com/yourusername/online-voting"
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern React portfolio showcasing projects, skills, and certifications with a clean UI and responsive design.",
      tech: "React, JavaScript",
      github: "https://github.com/yourusername/portfolio"
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.timeline}>
        {projects.map((project, index) => (
          <div key={index} style={styles.project}>
            <div style={styles.left}>
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <p style={styles.tech}>
                <strong>Tech:</strong> {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubBtn}
              >
                View on GitHub
              </a>
            </div>

            <div style={styles.right}>
              <span style={styles.dot}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 10%"
  },

  heading: {
    textAlign: "center",
    marginBottom: "60px"
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    position: "relative"
  },

  project: {
    display: "flex",
    gap: "40px",
    alignItems: "flex-start"
  },

  left: {
    flex: 1,
    background: "#020617",
    padding: "25px",
    borderRadius: "14px",
    border: "1px solid #1e293b"
  },

  title: {
    marginBottom: "10px"
  },

  description: {
    marginBottom: "10px",
    lineHeight: "1.6"
  },

  tech: {
    marginBottom: "15px",
    fontSize: "0.9rem",
    opacity: 0.9
  },

  githubBtn: {
    display: "inline-block",
    padding: "8px 18px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    borderRadius: "6px",
    fontWeight: "bold"
  },

  right: {
    width: "40px",
    display: "flex",
    justifyContent: "center"
  },

  dot: {
    width: "12px",
    height: "12px",
    background: "#38bdf8",
    borderRadius: "50%",
    marginTop: "10px"
  }
};

export default Projects;
