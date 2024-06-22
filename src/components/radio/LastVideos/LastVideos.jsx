"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useVideos } from "@/app/hooks/useVideos";
import { getVideosRadio } from "@/redux/video/operations";
import Link from "next/link";
import css from "./LastVideos.module.css";

const LastVideos = () => {
  const dispatch = useDispatch();
  const { videosRadio, isLoading } = useVideos();

  useEffect(() => {
    dispatch(getVideosRadio());
  }, []);

  return (
    <div className={css.videosContainer}>
      <h2 className={css.title}>Los últimos videos de Youtube</h2>
      <div className={css.listVideo}>
        {videosRadio?.map((video) => (
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
                allowfullscreen
                className={css.videoContainer}
              ></iframe>
            </div>
          </div>
        ))}
        <Link
          href={"https://www.youtube.com/channel/UC7746OINwIay25Xz1ByfYZw"}
          target="_blank"
          aria-label="Ir a Youtube canal de Radio Solidaria"
          className={css.link}
        >
          Ver&nbsp;<span>TODOS</span>&nbsp;los videos
        </Link>
      </div>
    </div>
  );
};

export default LastVideos;
