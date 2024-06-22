"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import css from "./CardInfo.module.css";

const CardInfo = ({ card, setContentName, contentName }) => {
  const is767 = useMediaQuery({ maxWidth: 767.98 });
  const is768 = useMediaQuery({ minWidth: 768 });
  const is1199 = useMediaQuery({ maxWidth: 1199.98 });
  const is1200 = useMediaQuery({ minWidth: 1200 });

  const handleClick = () => {
    if (contentName !== card.title) {
      setContentName(card.title);
    } else {
      setContentName(null);
    }
  };

  return (
    <button
      className={
        contentName === card.title ? css.activeCard : css.cardContainer
      }
      onClick={handleClick}
    >
      <h2 className={css.cardTitle}>{card.title}</h2>
      <div className={css.imageWrapper}>
        <Image
          src={card.image}
          alt={card.title}
          width={is767 ? 160 : (is768 && is1199 ? 350 : (is1200 ? 250 : 132))}
          height={is768 && is1199 ? 200 : (is1200 ? 150 : 100)}
          className={css.imageCard}
        />
      </div>
      <div className={css.overlay}>
        <p>{card.info}</p>
      </div>
    </button>
  );
};

export default CardInfo;
