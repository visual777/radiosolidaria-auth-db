"use client";

import { useState } from "react";
import { cardsInfo } from "@/app/lib/cardsInfo";
import Frequencias from "./Frequencias/Frequencias";
import NuestrosValores from "./NuestrasValores/NuestrosValores";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import PedidosOracion from "./PedidosOracion/PedidosOracion";
import CardInfo from "./CardInfo/CardInfo";
import css from "./AboutTV.module.css";

const AboutTV = () => {
  const [contentName, setContentName] = useState(null);

  return (
    <div>
      <h2 className={css.title}>
        Sobre Solidaria TV
      </h2>
      <ul className={css.list}>
        {cardsInfo?.map((card) => (
          <li key={card.id} className={css.listItem}>
            <CardInfo
              card={card}
              setContentName={setContentName}
              contentName={contentName}
            />
          </li>
        ))}
      </ul>
      {contentName === "¿Quienes somos?" ? (
        <QuienesSomos />
      ) : contentName === "Frecuencias TV Argentina" ? (
        <Frequencias />
      ) : contentName === "Pedidos de Oración" ? (
        <PedidosOracion />
      ) : (
        contentName === "Nuestros valores" && <NuestrosValores />
      )}
    </div>
  );
};

export default AboutTV;
