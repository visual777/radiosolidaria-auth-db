"use client";

import { useState, useEffect } from "react";
import VideoItem from "./VideoItem/VideoItem";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/allVideos')
      .then(response => response.json())
      .then(data => setVideos(data.data));
  }, []);

  return (
    <ul>
      {videos.map((video) => (
        <VideoItem key={video._id} video={video} />
      ))}
    </ul>
  );
};

export default AllVideos;
