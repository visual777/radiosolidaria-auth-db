import React from "react";
import css from "./BurgerBtn.module.css";

const BurgerBtn = ({ onClick, isOpen }) => {
  return (
    <button
      type="button"
      className={isOpen ? css.burgerBtnOpen : css.burgerBtn}
      onClick={onClick}
    >
      <div className={css.burger}></div>
    </button>
  );
};

export default BurgerBtn;
