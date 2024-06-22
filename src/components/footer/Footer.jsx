import React from "react";
import SocialMedia from "./SocialMedia/SocialMedia";
import Copyright from "./Copyright/Copyright";
import HazteSocio from "./HazteSocio/HazteSocio";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <SocialMedia />
        <HazteSocio />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
