'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import css from "./FirstScreen.module.css";

const FirstScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
        }
        const diff = 100 / (3 * 9); 
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={css.containerImage}>
      <Image
        src="/images/logo/logo-aquamarin.webp"
        alt="Bienvenido a Solidaria Media"
        width={300}
        height={222}
        className={css.image}
      />
      <div className={css.progressBar}>
        <div className={css.progress} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default FirstScreen;