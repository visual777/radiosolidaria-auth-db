import React from "react";
import Image from "next/image";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.imageRadio}>
        <Image
          src="/images/homepage/radio-desktop.webp"
          alt="Radio de escritorio"
          width={260}
          height={260}
        />
      </div>
      <div className={css.hero}>
        <h1>
          Bienvenido a<br />Solidaria Media
        </h1>
        <p>Haz click en el enlace deseado</p>
      </div>
      <div className={css.imageTV}>
        <Image
          src="/images/homepage/tv-desktop.webp"
          alt="Televisión de escritorio"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Hero;
