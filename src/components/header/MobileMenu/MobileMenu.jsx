import React from "react";
import Menu from "./Menu/Menu";
import css from "./MobileMenu.module.css";

const MobileMenu = ({ setIsShowMobile }) => {
  return (
    <div className={css.menuContainer}>
      <Menu setIsShowMobile={setIsShowMobile}/>
    </div>
  );
};

export default MobileMenu;
