"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LoaderVideos from "@/components/Loader/LoaderVideos/LoaderVideos";
import css from "./SolidariaTV.module.css";

const SolidariaTV = ({ canalVideo }) => {
  const [videosURL, setVideoURL] = useState(null);
  const [videosYoutube, setVideosYoutube] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (canalVideo === "Solidaria TV") {
      setVideoURL("tv");
      setIsLoading(true);
    } else if (canalVideo === "Solidaria TV Kids") {
      setVideoURL("kids");
      setIsLoading(true);
    } else if (canalVideo === "Miguel Díez") {
      setVideoURL("miguel");
      setIsLoading(true);
    } else if (canalVideo === "Ramóon Ubillos") {
      setVideoURL("ramon");
      setIsLoading(true);
    } else {
      setVideoURL(null);
      setIsLoading(false);
    }
  }, [canalVideo]);

  useEffect(() => {
    if (!videosURL) return;
    fetch(`/api/videos?category=${videosURL}`)
      .then((response) => response.json())
      .then((data) => setVideosYoutube(data.data));

      setTimeout(() => setIsLoading(false), 1500);
  }, [videosURL]);

  return (
    <div className={css.videosContainer}>
      {isLoading ? (
        <div className={css.loaderContainer}>
          <LoaderVideos />
        </div>
      ) : (
        <>
          {videosURL &&
            videosYoutube?.map((video) => (
              <div key={video._id}>
                <div>
                  <iframe
                    width="100%"
                    height="200"
                    src={video.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={css.videoContainer}
                  ></iframe>
                </div>
              </div>
            ))}
          {canalVideo !== null && (
            <Link
              href={
                canalVideo === "Solidaria TV Kids"
                  ? "https://www.youtube.com/@SolidariaKids/videos"
                  : "https://www.youtube.com/channel/UC7746OINwIay25Xz1ByfYZw"
              }
              target="_blank"
              aria-label="Ir a Youtube canal de Radio Solidaria"
              className={css.link}
            >
              Ver <span>&nbsp;TODOS&nbsp;</span> los videos
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default SolidariaTV;
