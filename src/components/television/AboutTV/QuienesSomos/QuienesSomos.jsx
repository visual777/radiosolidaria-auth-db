import React from "react";
import Image from "next/image";
import css from "./QuienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <div className={css.container}>
      <h3>
       ¿ Quienes Somos ?
      </h3>
      <div className={css.content}>
        <div>
          <p>
            <strong>RTV Solidaria</strong> es un medio de comunicación
            comprometida con la sociedad con principios bíblicos y mas de 30
            años de trabajo. Contamos con canales de televisión abiertas en
            España, Argentina y Bolivia. Radios en distintas ciudades de España
            y de Argentina. También una amplia comunidad en las redes sociales
            como YouTube (Más de 500 mil suscriptores) y TikTok (50 mil
            seguidores).
          </p>
          <p>
            Queremos seguir siendo una <strong>herramienta positiva</strong>{" "}
            para la sociedad ofreciendo contenidos de valores y de ayuda
            práctica para todo el público y para todas las edades. RTV También
            colabora con distintas ONG por todo el mundo.
          </p>
          <p>
            Puedes <strong>colaborar con nosotros</strong> compartiendo nuestros
            contenidos o siendo socio para que; con tu ayuda, podemos llegar a
            mas hogares y familias.
          </p>
        </div>
        <Image
          src={"/images/solidariaTV/sobreNosotros.webp"}
          alt="Los manos de participantes de nuestro equipo"
          width={815}
          height={400}
          className={css.image}
        />
      </div>
    </div>
  );
};

export default QuienesSomos;
