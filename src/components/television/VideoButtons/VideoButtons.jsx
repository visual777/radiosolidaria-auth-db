"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon/Icon";
import Hls from "hls.js";
import css from "./VideoButtons.module.css";
import Image from "next/image";

const VideoButtons = () => {
  const videoRef = useRef(null);
  const SpainTV =
    "https://canadaremar2.todostreaming.es/live/solidariatv-webhd.m3u8";
  const ArgentinaTV =
    "https://canadaremar2.todostreaming.es/live/argentina-web.m3u8";
  const [urlTv, setUrlTv] = useState("");

  useEffect(() => {
    const hls = new Hls();
    const video = videoRef.current;

    if (Hls.isSupported() && video) {
      hls.loadSource(urlTv);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Some browsers (like Safari) can play M3U8 natively
      video.src = urlTv;
      video.addEventListener("loadedmetadata", function () {
        video.play();
      });
    }
  }, [urlTv]);

  const handleSpainTV = () => {
    if (urlTv === "" || urlTv === ArgentinaTV) {
      setUrlTv(SpainTV);
    } else {
      setUrlTv("");
    }
  };

  const handleArgentinaTV = () => {
    if (urlTv === "" || urlTv === SpainTV) {
      setUrlTv(ArgentinaTV);
    } else {
      setUrlTv("");
    }
  };

  return (
    <div className={css.tv}>
      <div className={css.buttonsContainer}>
        <button
          type="button"
          aria-label="Abrir televisión en vivo de Solidaria TV España"
          className={urlTv === SpainTV ? css.activeButton : css.button}
          onClick={handleSpainTV}
        >
          España&nbsp;&nbsp;
          <Icon
            name={urlTv !== "" && urlTv !== ArgentinaTV ? "icon-stop" : "icon-play"}
            className={css.playIcon}
          />
        </button>
        <button
          type="button"
          aria-label="Abrir televisión en vivo de Solidaria TV Argentina"
          className={urlTv === ArgentinaTV ? css.activeButton : css.button}
          onClick={handleArgentinaTV}
        >
          Argentina{" "}
          <Icon
            name={urlTv !== "" && urlTv !== SpainTV  ? "icon-stop" : "icon-play"}
            className={css.playIcon}
          />
        </button>
      </div>
      <div className={css.videoContainer}>
        <video controls autoPlay muted className={css.video} ref={videoRef}>
          Your browser does not support the video tag.
        </video>
        {urlTv === "" && (
          <Image
            src={"/images/solidariaTV/wrapperTV.webp"}
            alt="Seleccione España o Argentina para ver"
            layout="fill"
            objectFit="cover"
            className={css.wrapperVideo}
          />
        )}
      </div>
    </div>
  );
};

export default VideoButtons;
