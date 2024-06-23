"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { links } from "@/app/lib/linksMenu";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import NavLink from "../NavLink/NavLink";
import css from "./Menu.module.css";

const Menu = ({ setIsShowMobile }) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <>
      <ul className={css.menu}>
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => setIsShowMobile(false)}
            className={pathname === link.path ? css.active : css.item}
          >
            <NavLink link={link} />
          </li>
        ))}
        {session && (
          <>
            <li className={pathname === '/dashboard' ? css.active : css.item}>
              <Link href={"/dashboard"} className={css.link}>
                <Icon name="icon-database" className={css.icon} />
              </Link>
            </li>
            <li className={css.item}>
              <Link
                href={"/api/auth/signout?callbackUrl=/"}
                className={css.link}
              >
                <Icon name="icon-exit" className={css.icon} />
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Menu;
