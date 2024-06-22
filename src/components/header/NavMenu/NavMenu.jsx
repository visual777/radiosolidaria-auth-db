"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { links } from "@/app/lib/linksMenu";
import LinkHeader from "./LinkHeader/LinkHeader";
import css from "./NavMenu.module.css";

const NavMenu = () => {
const pathname = usePathname();

  return (
    <div>
      <ul className={css.listMenu}>
        {links.map((link) => (
          <li key={link.name} className={pathname === link.path ? css.activeItem : css.listItem}>
            <LinkHeader link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
