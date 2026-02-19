import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2026 Bhuvan Reddy. All rights reserved.
      </p>

      
    </footer>
  );
}

const styles = {
  footer: {
    background: "#020617",
    color: "#f8fafc",
    textAlign: "center",
    padding: "20px 10%",
    borderTop: "1px solid #1e293b",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center"
  },

  text: {
    margin: 0,
    fontSize: "0.9rem"
  },

  links: {
    display: "flex",
    gap: "15px",
    justifyContent: "center"
  },

  link: {
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  }
};

export default Footer;
