"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Image from "next/image";
import css from "./LinksPages.module.css";

const LinksPages = () => {
  const is767 = useMediaQuery({ maxWidth: 767.98 });
  const is768 = useMediaQuery({ minWidth: 768 });
  const is1200 = useMediaQuery({ minWidth: 1200 });
  const is1199 = useMediaQuery({ maxWidth: 1199.98 });

  return (
    <div className={css.container}>
      <div className={css.linkItem}>
        <Link href={"/radio"} aria-label="Ir a la página Radio Solidaria">
          <Image
            src={"/images/logo/radio/logo-radio-notext.webp"}
            alt="Logo de Radio Solidaria"
            width={is768 && !is767 ? 120 : 80}
            height={is768 && !is767 ? 86 : 66}
            className={css.imageRadio}
          />
          <div>
            <h2 className={css.title}>Escuchar Radio Solidaria</h2>
            <p className={css.text}>En vivo 24hs al día</p>
          </div>
        </Link>
      </div>
      <div className={css.linkItem}>
        <Link href={"/tv"} aria-label="Ir a la página Solidaria TV">
          <Image
            src={"/images/logo/tv/logo-tv-notext.webp"}
            alt="Logo de Radio Solidaria"
            width={is768 && !is767 ? 100 : is1200 && !is1199 ? 120 : 80}
            height={is768 && !is767 ? 88 : is1200 && !is1199 ? 108 : 66}
            className={css.imageTv}
          />
          <div>
            <h2 className={css.title}>Ver Solidaria TV</h2>
            <p className={css.text}>En vivo 24hs al día</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LinksPages;
