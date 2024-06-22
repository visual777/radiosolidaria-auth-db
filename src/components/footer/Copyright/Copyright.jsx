import React from "react";
import Link from "next/link";
import css from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        &copy; 2024 Solidaria TV. Todos los derechos reservados.
      </p>
      <div className={css.linksBox}>
        <Link href={"/"}>Início pagína</Link>
        <Link href={"/terms"}>Política de privacidad</Link>
      </div>
    </div>
  );
};

export default Copyright;
