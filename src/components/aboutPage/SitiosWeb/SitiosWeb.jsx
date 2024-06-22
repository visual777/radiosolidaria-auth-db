"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import { sitios } from "@/app/lib/sitiosweb";
import css from "./SitiosWeb.module.css";

const SitiosWeb = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>
        Sitios Web
        <Icon name="icon-web" className={css.icon} />
      </h2>
      <ul className={css.list}>
        {sitios.map((sitio) => (
          <li key={sitio.id} className={css.listItem}>
            <div href={sitio.url} className={css.link}>
              <Image
                src={sitio.img}
                alt={sitio.title}
                width={200}
                height={100}
                className={css.photoWeb}
              />
            </div>
            <div className={css.overlay}>
              <p>{sitio.info}</p>
              <Link href={sitio.url} target="_blank" className={css.linkToWeb}>
                <Icon name="icon-web" className={css.icon} />
               Ir a {sitio.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitiosWeb;
