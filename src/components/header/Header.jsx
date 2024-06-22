"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo/Logo";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import NavMenu from "./NavMenu/NavMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import css from "./Header.module.css";

const Header = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);
  const isTablet = useMediaQuery({ minWidth: 768 });

  const handleClickShowMobile = () => {
    setIsShowMobile((prev) => !prev);
  };

  const operateScroll = () => {
    if (typeof window !== "undefined") {
      if (isShowMobile) {
        window.document.body.style.overflow = "hidden";
      } else {
        window.document.body.style.overflow = "auto";
      }
    }
  };
  operateScroll();

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Logo />
          {!isTablet ? (
            <BurgerBtn onClick={handleClickShowMobile} isOpen={isShowMobile} />
          ) : (<NavMenu />)}
        </div>
      </header>
      {isShowMobile && !isTablet && (
        <MobileMenu setIsShowMobile={setIsShowMobile} />
      )}
    </>
  );
};

export default Header;
