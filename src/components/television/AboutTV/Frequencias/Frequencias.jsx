"use client";

import React from "react";
import { frequencias } from "@/app/lib/frequencias";
import css from "./Frequencias.module.css";

const Frequencias = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {frequencias?.map((item, index) => (
          <li key={index} className={css.listItem}>
            <p className={css.text}>
              <strong>{item.place} </strong>
              {item.freq}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Frequencias;
