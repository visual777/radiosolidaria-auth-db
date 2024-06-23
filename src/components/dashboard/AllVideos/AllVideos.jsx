"use client";

import VideoItem from "./VideoItem/VideoItem";
import css from "./AllVideos.module.css";

const AllVideos = ({videos}) => {

  return (
    <ul className={css.list}>
      {videos.map((video) => (
        <VideoItem key={video._id} video={video} />
      ))}
    </ul>
  );
};

export default AllVideos;
