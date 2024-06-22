import React from "react";
import css from "./MoreText.module.css";

const MoreText = ({ setShowMore }) => {
  return (
    <div onClick={() => setShowMore(false)}>
      <p className={css.text}>
        A través de Radio Solidaria miles de personas reciben 24 horas al día
        entretenimiento sano, enseñanzas basadas en principios y <strong>valores
        cristianos</strong>, apoyo, consejo, noticias, música y programas orientados a
        una vida nueva, trabajando por la transformación de vidas a través
        escuchar <strong>palabras de edificación</strong>, de fe y buenas nuevas de salvación.
      </p>
      <p className={css.text}>
        Radio Solidaria cuenta con una plataforma digital por medio de la cual
        los oyentes pueden escuchar <strong>programas en vivo</strong> o en diferido, con
        imágenes, grabaciones y textos de enseñanza que permiten aprender y
        reafirman cada mensaje recibido.
      </p>
    </div>
  );
};

export default MoreText;
