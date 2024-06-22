'use client';

import { useState } from "react";
import SolidariaTV from "../SolidariaTV/SolidariaTV";
import ButtonsYoutube from "../ButtonsYoutube/ButtonsYoutube";
import css from "./LastVideos.module.css";

const LastVideos = () => {
  const [canalVideo, setCanalVideo] = useState(null);

  return (
    <div className={css.container}>
      <h2 className={css.title}>
        Los últimos videos de Youtube
      </h2>
      <ButtonsYoutube setCanalVideo={setCanalVideo} canalVideo={canalVideo} />
      <SolidariaTV canalVideo={canalVideo} />
    </div>
  );
};

export default LastVideos;
