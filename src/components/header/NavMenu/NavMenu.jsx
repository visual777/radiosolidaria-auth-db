"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { links } from "@/app/lib/linksMenu";
import LinkHeader from "./LinkHeader/LinkHeader";
import css from "./NavMenu.module.css";

const NavMenu = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div>
      <ul className={css.listMenu}>
        {links.map((link) => (
          <li
            key={link.name}
            className={pathname === link.path ? css.activeItem : css.listItem}
          >
            <LinkHeader link={link} />
          </li>
        ))}
      </ul>
      {session && (
          <div className={css.adminBtns}>
              <Link href={"/dashboard"} className={pathname === '/dashboard' ? css.activeDashboard : css.dashboardLink}>Tablero</Link>
              <Link
                href={"/api/auth/signout?callbackUrl=/"}
                className={css.logoutBtn}
              >
                Logout
              </Link>
          </div>
        )}
    </div>
  );
};

export default NavMenu;
