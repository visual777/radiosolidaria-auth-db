"use client";

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { buttons } from "@/app/lib/buttonsYoutube";
import css from "./ButtonsYoutube.module.css";

const ButtonsYoutube = ({ setCanalVideo, canalVideo }) => {
  const is767 = useMediaQuery({ maxWidth: 767.98 });
  const is768 = useMediaQuery({ minWidth: 768 });
  const is1199 = useMediaQuery({ maxWidth: 1199.98 });
  const is1200 = useMediaQuery({ minWidth: 1200 });

  const handleClick = (btn) => {
    if (canalVideo === btn.name) {
      setCanalVideo(null);
    } else {
      setCanalVideo(btn.name);
    }
  };

  return (
    <div className={css.listLinks}>
      {buttons?.map((btn) => (
        <button type="button" key={btn.id} className={css.linkBtn} onClick={() => handleClick(btn)}>
          <div
            className={
              canalVideo === btn.name
                ? css.cardContainerActive
                : css.cardContainer
            }
          >
            <h3 className={css.cardTitle}>{btn.name}</h3>
            <div className={css.imageWrapper}>
              <Image
                src={btn.img}
                alt={btn.name}
                width={is767 ? 160 : is768 && is1199 ? 350 : is1200 ? 250 : 132}
                height={is768 && is1199 ? 200 : is1200 ? 150 : 100}
                className={css.imageCard}
              />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ButtonsYoutube;
