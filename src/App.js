import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioTable from "./components/PortfolioTable";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioTable />} />
        <Route path="/video/:filename" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
