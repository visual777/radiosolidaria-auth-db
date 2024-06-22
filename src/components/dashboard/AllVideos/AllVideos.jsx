"use client";

import { useState, useEffect } from "react";
import VideoItem from "./VideoItem/VideoItem";
import css from "./AllVideos.module.css";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/allVideos')
      .then(response => response.json())
      .then(data => setVideos(data.data));
  }, []);

  return (
    <ul className={css.list}>
      {videos.map((video) => (
        <VideoItem key={video._id} video={video} />
      ))}
    </ul>
  );
};

export default AllVideos;
