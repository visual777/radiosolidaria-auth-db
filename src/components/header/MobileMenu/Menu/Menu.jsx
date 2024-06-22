'use client';

import React from "react";
import { usePathname } from "next/navigation";
import { links } from "@/app/lib/linksMenu";
import NavLink from "../NavLink/NavLink";
import css from "./Menu.module.css";

const Menu = ({setIsShowMobile}) => {
const pathname = usePathname();

  return (
    <ul className={css.menu}>
      {links.map((link, index) => (
        <li key={index} onClick={() => setIsShowMobile(false)} className={pathname === link.path ? css.active : css.item}>
          <NavLink link={link}/> 
        </li>
      ))}
    </ul>
  );
};

export default Menu;
