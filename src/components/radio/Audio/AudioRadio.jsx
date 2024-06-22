"use client";

import { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import RadioLoader from "./RadioLoader/RadioLoader";
import "react-h5-audio-player/lib/styles.css";
import css from "./AudioRadio.module.css";

const AudioRadio = ({ url }) => {
const [status, setStatus] = useState('pause');

  return (
    <div className={css.containerPlayer}>
      <AudioPlayer
        autoPlay
        src={url}
        showJumpControls={false}
        showFilledProgress={false}
        showDownloadProgress={false}
        customProgressBarSection={[status === 'play' ? <RadioLoader key="radio-loader" /> :
          <div key="radio-label" className={css.label}>
            Escuchar radio
          </div>,
        ]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        layout="horizontal-reverse"
        width="70px"
        onPlay={() => setStatus('play')}
        on
        onPause={() => setStatus('pause')}
      />
    </div>
  );
};

export default AudioRadio;
