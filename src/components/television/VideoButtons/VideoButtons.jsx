"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Hls from "hls.js";
import { useMediaQuery } from "react-responsive";
import Overlay from "../Overlay/Overlay";
import Icon from "@/components/Icon/Icon";
import css from "./VideoButtons.module.css";

const VideoButtons = () => {
  const isTabletEnd = useMediaQuery({ maxWidth: 1199.98 });
  const videoRef = useRef(null);
  const SpainTV =
    "https://canadaremar2.todostreaming.es/live/solidariatv-webhd.m3u8";
  const ArgentinaTV =
    "https://canadaremar2.todostreaming.es/live/argentina-web.m3u8";
  const [urlTv, setUrlTv] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClickOverlay = () => setShowOverlay(true);

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
      setShowOverlay(false);
    }
  };

  const handleArgentinaTV = () => {
    if (urlTv === "" || urlTv === SpainTV) {
      setUrlTv(ArgentinaTV);
    } else {
      setUrlTv("");
      setShowOverlay(false);
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
          España&nbsp;
          {urlTv !== "" && urlTv !== ArgentinaTV && isTabletEnd ? (
            "TV"
          ) : (
            <Icon
              name={
                urlTv !== "" && urlTv !== ArgentinaTV
                  ? "icon-stop"
                  : "icon-play"
              }
              className={css.playIcon}
            />
          )}
        </button>
        <button
          type="button"
          aria-label="Abrir televisión en vivo de Solidaria TV Argentina"
          className={urlTv === ArgentinaTV ? css.activeButton : css.button}
          onClick={handleArgentinaTV}
        >
          Argentina{" "}
          {urlTv !== "" && urlTv !== SpainTV && isTabletEnd ? (
            "TV"
          ) : (
            <Icon
              name={
                urlTv !== "" && urlTv !== SpainTV ? "icon-stop" : "icon-play"
              }
              className={css.playIcon}
            />
          )}
        </button>
      </div>
      <div className={css.videoContainer}>
        <video controls autoPlay muted className={css.video} ref={videoRef}>
          Your browser does not support the video tag.
        </video>
        {urlTv === "" && (
          <>
            <Image
              src={"/images/solidariaTV/wrapperTV.webp"}
              alt="Seleccione España o Argentina para ver"
              layout="fill"
              objectFit="cover"
              className={css.wrapperVideo}
              onClick={handleClickOverlay}
            />
            {showOverlay && <Overlay />}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoButtons;
