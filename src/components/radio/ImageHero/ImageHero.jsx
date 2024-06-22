import React from "react";
import Image from "next/image";
import css from "./ImageHero.module.css";

const ImageHero = () => {
  return (
    <section>
      <div className={css.imageBox}>
        <Image src={'/images/logo/radio/logo-radio-notext.webp'} alt="Logo de Radio Solidaria" width={120} height={72}/>
      </div>
    </section>
  );
};

export default ImageHero;
