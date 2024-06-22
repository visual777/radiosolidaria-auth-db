'use client';

import React from "react";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import css from "./NavLink.module.css";

const NavLink = ({link}) => {

  return (
    <Link
      href={link?.path}
      className={css.link}
    >
      <Icon name={link.title} className={css.icon} />
    </Link>
  );
};

export default NavLink;
