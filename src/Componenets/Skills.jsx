import React from "react";
import htmlImg from "./skills/html.png";
import cssImg from "./skills/css.png";
import javaImg from "./skills/java.png";
import jsImg from "./skills/javascript.png";
import reactImg from "./skills/react.png";
import bootstrapImg from "./skills/BootSTrap.png";
import hibernateImg from "./skills/Hibernate.png";
import springImg from "./skills/SpringSecurity.png";
import gitImg from "./skills/Git.png";
import vscodeImg from "./skills/vscode.png";
import mysqlImg from "./skills/Mysql.png";
import eclipseImg from "./skills/Eclipse.png";


const skillData = {
  Languages: [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "Java", img: javaImg },
    { name: "JavaScript", img: jsImg },
  ],
  Frameworks: [
    { name: "React", img: reactImg },
    { name: "Bootstrap", img: bootstrapImg },
    { name: "Spring Boot", img: springImg },
    { name: "Hibernate", img: hibernateImg },
    { name: "Spring Security", img: springImg },
  ],
  Tools: [
    { name: "Git", img: gitImg },
    { name: "VsCode", img: vscodeImg },
    { name: "MySQL", img: mysqlImg },
    { name: "Eclipse", img: eclipseImg },
  ],
};

function Skills() {
  return (
    <section style={styles.section} id="skills">
      <h2 style={styles.heading}>Skills</h2>

      {Object.keys(skillData).map((category) => (
        <div key={category} style={styles.category}>
          <h3 style={styles.subHeading}>{category}</h3>
          <div style={styles.skillGrid}>
            {skillData[category].map((skill, index) => (
              <div style={styles.skillCard} key={index}>
                <img src={skill.img} alt={skill.name} style={styles.img} />
                <p style={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 10%",
    background: "#0f172a",
    color: "#f8fafc",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#38bdf8",
    textAlign: "center",
  },
  category: {
    marginBottom: "40px",
  },
  subHeading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#38bdf8",
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "20px",
  },
  skillCard: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  },
  img: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  skillName: {
    fontWeight: "bold",
  },
};

export default Skills;
