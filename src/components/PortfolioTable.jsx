import React, { useState, useEffect, useRef } from "react";
import sound03 from "../assets/audio/sound03.mp3";
import sound04 from "../assets/audio/sound04.mp3";
import "../styles.css";

const projects = [
  {
    name: "Challenge17",
    live: "https://gorgeous-croissant-81191d.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge17.git",
    test: "video",
    video: "/video/AutomationVideo08.mp4",
  },
  {
    name: "Challenge16",
    live: "https://imaginative-stardust-8a0c37.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge16.git",
    test: "video",
    video: "/video/AutomationVideo07.mp4",
  },
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
    test: "video",
    video: "/video/AutomationVideo05.mp4",
  },
  {
    name: "Challenge13",
    live: "https://681ff99fff7cb35e2f7842d2--taupe-sherbet-c9f3a6.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge13.git",
    test: "video",
    video: "/video/AutomationVideo04.mp4",
  },
  {
    name: "Challenge12",
    live: "https://dreamy-conkies-cc51a8.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge12.git",
    test: "video",
    video: "/video/AutomationVideo04.mp4",
  },
  {
    name: "Challenge11",
    live: "https://fastidious-shortbread-0f0426.netlify.app/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge11.git",
    test: "video",
    video: "/video/AutomationVideo04.mp4",
  },
  {
    name: "Challenge10",
    live: "https://lavenzo.github.io/frontendmentor-challenge10/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge10.git",
    test: "video",
    video: "/video/AutomationVideo03.mp4",
  },
  {
    name: "Challenge9",
    live: "https://lavenzo.github.io/frontendmentor-challenge9/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge9.git",
    test: "video",
    video: "/video/AutomationVideo03.mp4",
  },
  {
    name: "Challenge8",
    live: "https://lavenzo.github.io/frontendmentor-challenge8/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge8.git",
    test: "video",
    video: "/video/AutomationVideo03.mp4",
  },
  {
    name: "Challenge7",
    live: "https://lavenzo.github.io/challenge7/",
    repo: "https://github.com/Lavenzo/challenge7.git",
    test: "video",
    video: "/video/AutomationVideo02.mp4",
  },
  {
    name: "Challenge6",
    live: "https://lavenzo.github.io/frontendmentor-challenge6/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge6",
    test: "video",
    video: "/video/AutomationVideo02.mp4",
  },
  {
    name: "Challenge5",
    live: "https://lavenzo.github.io/frontendmentor-challenge5/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge5",
    test: "video",
    video: "/video/AutomationVideo02.mp4",
  },
  {
    name: "Challenge4",
    live: "https://lavenzo.github.io/frontendmentor-challenge4/",
    repo: "https://github.com/Lavenzo/frontendmentor-challenge4",
    test: "video",
    video: "/video/AutomationVideo01.mp4",
  },
  {
    name: "Challenge3",
    live: "https://lavenzo.github.io/frontendmentor-challenge3/",
    repo: "https://github.com/lavenzo/frontendmentor-challenge3",
    test: "video",
    video: "/video/AutomationVideo01.mp4",
  },
  {
    name: "Challenge2",
    live: "https://lavenzo.github.io/frontendmentor-challenge2/",
    repo: "https://github.com/lavenzo/frontendmentor-challenge2",
    test: "video",
    video: "/video/AutomationVideo01.mp4",
  },
  {
    name: "Challenge1",
    live: "https://lavenzo.github.io/frontendmentor-challenge1/",
    repo: "https://github.com/lavenzo/frontendmentor-challenge1",
    test: "video",
    video: "/video/AutomationVideo00.mp4",
  },
];

/*
COde XXX
WHen hover over the hyperlink, did not change the font colour to green, and increase the font size by 1.5 times
On mouse over did not play sound03 and on click did not play sound04

*/

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
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(projects.length / recordsPerPage);

  const audioRefHover = useRef(null);
  const audioRefClick = useRef(null);

  const playHoverSound = () => {
    if (audioRefHover.current) {
      audioRefHover.current.currentTime = 0;
      audioRefHover.current
        .play()
        .catch((err) => console.warn("Sound autoplay blocked:", err.message));
    }
  };

  const playClickSound = () => {
    if (audioRefClick.current) {
      audioRefClick.current.currentTime = 0;
      audioRefClick.current
        .play()
        .catch((err) => console.warn("Sound autoplay blocked:", err.message));
    }
  };

  const currentData = projects.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div
      style={{
        backgroundColor: "#e6f7ff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <audio ref={audioRefHover} src={sound03} preload="auto" />
      <audio ref={audioRefClick} src={sound04} preload="auto" />

      <h2
        style={{ textAlign: "center", marginBottom: "20px", color: "#2a2a2a" }}
      >
        Frontend Mentor Projects Portfolio
      </h2>

      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Project Challenge
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Weblink
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                GitHub Repository
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Selenium Automation (User Simulation)
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((p, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {p.name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <a
                    className="hover-link"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                  >
                    {p.live}
                  </a>
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <a
                    className="hover-link"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                  >
                    GitHub
                  </a>
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {p.video ? (
                    <a
                      className="hover-link"
                      href={p.video}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHoverSound}
                      onClick={playClickSound}
                    >
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
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Page: {currentPage} / {totalPages}
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PortfolioTable;
