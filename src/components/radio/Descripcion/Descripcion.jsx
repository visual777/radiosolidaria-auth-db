"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import MoreText from "./MoreText/MoreText";
import css from "./Descripcion.module.css";

const Descripcion = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h2 className={css.title}>
          Sobre <span className={css.accent}>Radio Solidaria</span>
        </h2>
        <p onClick={() => setShowMore(false)} className={css.text}>
          <strong>Radio Solidaria</strong> es un medio de comunicación por medio
          del cual la ONG REMAR ha promovido a lo largo de más de 38 años la
          divulgación de un mensaje limpio y diferente, una{" "}
          <strong>Radio cristiana</strong> sensible a las situaciones de
          desigualdad de esta sociedad, que brinda apoyo y que es consciente de
          las necesidades de miles de personas, enviando siempre un mensaje de
          esperanza a una sociedad que vive en medio de diversos problemas como
          la pobreza, la violencia, la injusticia y falta de fe.
        </p>
        {showMore && <MoreText setShowMore={setShowMore} />}
        <div className={css.box}>
          <button
            type="button"
            aria-label="Mostrar más información sobre Radio Solidaria"
            className={css.showMoreBtn}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Ocultar" : "Ver más"}
          </button>
          <div className={css.youtubeBox}>
            <Link
              href={"https://www.youtube.com/channel/UC7746OINwIay25Xz1ByfYZw"}
              target="_blank"
              aria-label="Ir a Youtube canal de Radio Solidaria"
              className={css.link}
            >
              <Icon name="icon-youtube" className={css.iconYoutube} />
            </Link>
            <p>
              Radio Solidaria <br /> YouTube
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descripcion;
