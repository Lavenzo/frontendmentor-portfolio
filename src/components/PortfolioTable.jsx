import React from "react";

const projects = [
  {
    name: "Challenge15",
    live: "https://incredible-centaur-071f6a.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge15.git",
    test: "video",
    video: "/video/AutomationVideo06.mp4",
  },
  {
    name: "Challenge14",
    live: "https://dreamy-kulfi-3607f2.netlify.app/#",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge14.git",
    test: "frontendmentortest5.java",
  },
  {
    name: "Challenge13",
    live: "https://681ff99fff7cb35e2f7842d2--taupe-sherbet-c9f3a6.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge13.git",
    test: "frontendmentortest4.java",
  },
  {
    name: "Challenge12",
    live: "https://dreamy-conkies-cc51a8.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge12.git",
    test: "frontendmentortest4.java",
  },
  {
    name: "Challenge11",
    live: "https://fastidious-shortbread-0f0426.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge11.git",
    test: "frontendmentortest4.java",
  },
  {
    name: "Challenge10",
    live: "https://lavenzo.github.io/frontendmentor-challenge10/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge10.git",
    test: "frontendmentortest3.java",
  },
  {
    name: "Challenge9",
    live: "https://lavenzo.github.io/frontendmentor-challenge9/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge9.git",
    test: "frontendmentortest3.java",
  },
  {
    name: "Challenge8",
    live: "https://lavenzo.github.io/frontendmentor-challenge8/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge8.git",
    test: "frontendmentortest3.java",
  },
  {
    name: "Challenge7",
    live: "https://lavenzo.github.io/challenge7/",
    repo: "https://github.com/Lavenzo/challenge7.git",
    test: "frontendmentortest2.java",
  },
  {
    name: "Challenge6",
    live: "https://lavenzo.github.io/frontendmentor-challenge6/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge6",
    test: "frontendmentortest2.java",
  },
  {
    name: "Challenge5",
    live: "https://lavenzo.github.io/frontendmentor-challenge5/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge5",
    test: "frontendmentortest2.java",
  },
  {
    name: "Challenge4",
    live: "https://lavenzo.github.io/frontendmentor-challenge4/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge4",
    test: "frontendmentortest1.java",
  },
  {
    name: "Challenge3",
    live: "https://lavenzo.github.io/frontendmentor-challenge3/",
    repo: "https://github.com/lavenzo/frontendmentor-challenge3",
    test: "frontendmentortest1.java",
  },
  {
    name: "Challenge2",
    live: "https://lavenzo.github.io/frontendmentor-challenge2/",
    repo: "https://github.com/lavenzo/frontendmentor-challenge2",
    test: "frontendmentortest.java",
  },
  {
    name: "Challenge1",
    live: "https://lavenzo.github.io/frontendmentor-challenge1/",
    repo: "https://github.com/lavenzo/frontendmentor-challenge1",
    test: "frontendmentortest.java",
  },
];

const pageStyle = {
  backgroundColor: "#e6f7ff",
  minHeight: "100vh",
  padding: "20px",
  boxSizing: "border-box",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
};

const thTdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};

const containerStyle = {
  padding: "20px",
  overflowX: "auto",
};

const PortfolioTable = () => {
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#2a2a2a",
          }}
        >
          Frontend Mentor Projects Portfolio
        </h2>
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th style={thTdStyle}>Project Challenge</th>
              <th style={thTdStyle}>Weblink</th>
              <th style={thTdStyle}>GitHub Repository</th>
              <th style={thTdStyle}>Selenium Automation (User Simulation)</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, idx) => (
              <tr key={idx}>
                <td style={thTdStyle}>{p.name}</td>
                <td style={thTdStyle}>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    {p.live}
                  </a>
                </td>
                <td style={thTdStyle}>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </td>
                <td style={thTdStyle}>
                  {p.video ? (
                    <a href={p.video} target="_blank" rel="noreferrer">
                      Selenium Automation Script
                    </a>
                  ) : (
                    p.test
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioTable;
