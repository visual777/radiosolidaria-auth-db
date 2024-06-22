"use client";

import { youtubeChannels } from "@/app/lib/youtubeChannels";
import Canal from "./Canal/Canal";
import css from "./NuestrasYoutube.module.css";

const NuestrasYoutube = () => {
  return (
    <div className={css.containerYoutube}>
      <h2 className={css.title}>Nuestros canales de YouTube</h2>
      <ul className={css.list}>
        {youtubeChannels.map((ch) => (
          <Canal key={ch.id} ch={ch} />
        ))}
      </ul>
    </div>
  );
};

export default NuestrasYoutube;
