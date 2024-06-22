import React from "react";
import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css.container}>
      <div className={css.desc}>
        <h2 className={css.title}>¿Qué es Radio Solidaria?</h2>
        <p className={css.text}>
          Radio Solidaria, de la familia Solidaria Media, una radio Limpia y
          diferente con programación de calidad. Solidaridad, Cultura, valores y
          principios cristianos, cine, noticias, deportes y más en radio
          solidaria. si la escuchas te enriqueces.
        </p>
      </div>
      <div className={css.desc}>
        <h2 className={css.title}>¿Qué es Solidaria TV?</h2>
        <p className={css.text}>
          Solidaria TV es un canal de televisión limpio y diferente. Limpio
          porque somos transparentes en nuestra programación con el propósito de
          aportar ideas y enseñanzas positivas y bíblicas para todas las edades.
          &nbsp;Somos diferentes porque en vez de recibir, queremos dar, somos un
          canal sin fines de lucro con medios de ayudar a familias con problemas
          tanto físicos como espirituales.
        </p>
      </div>
    </div>
  );
};

export default Description;
