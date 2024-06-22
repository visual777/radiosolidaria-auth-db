import React from "react";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { socialData } from "@/app/lib/socialData";
import css from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Nuestras medias</h2>
      <ul className={css.socialList}>
        {socialData.map(({ id, url, ariaLabel, iconName }) => (
          <li key={id} className={css.socialContainer}>
            <Link href={url} target="_blank" aria-label={ariaLabel}>
              <Icon name={iconName} className={css.social} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
