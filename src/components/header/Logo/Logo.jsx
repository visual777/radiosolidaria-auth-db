"use client";

import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import css from "./Logo.module.css";

const Logo = () => {
  const is768 = useMediaQuery({ minWidth: 768 });

  return (
    <Link href={"/"} className={css.logo}>
      <Image
        src="/images/logo/logo-aquamarin.webp"
        alt="Logo de Solidaria Media"
        width={is768 ? 140 : 66}
        height={is768 ? 108 : 50}
      />
    </Link>
  );
};

export default Logo;
