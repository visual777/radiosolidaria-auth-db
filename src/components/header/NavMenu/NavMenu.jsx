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
        {session && (
          <>
            <li>
              <Link href={"/dashboard"} className={pathname === '/dashboard' ? css.activeDashboard : css.dashboardLink}>Tablero</Link>
            </li>
            <li>
              <Link
                href={"/api/auth/signout?callbackUrl=/"}
                className={css.logoutBtn}
              >
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
