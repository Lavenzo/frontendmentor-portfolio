import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { filename } = useParams(); // Get video filename from URL

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Automation Test Video</h2>
      <video width="80%" controls autoPlay>
        <source src={`/${filename}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
