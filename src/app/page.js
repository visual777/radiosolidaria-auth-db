import React from "react";
import Hero from "@/components/homepage/hero/Hero";
import LinksPages from "@/components/homepage/LinksPages/LinksPages";
import Description from "@/components/homepage/Description/Description";
import css from "./page.module.css";

export const metadata = {
  title: "Solidaria RTV - Radio y Televisión cristiana en línea",
  description:
    "Solidaria RTV es una radio y televisión cristiana en línea que transmite música, programas y mensajes cristianos las 24 horas del día.",
    icons: {
      icon: "/favicon.ico",
      appleIcon: "/apple-touch-icon.png",
      msIcon: "/mstile-150x150.png",
      favicon16: "/favicon-16x16.png",
      favicon32: "/favicon-32x32.png",
      androidIcon: "/android-chrome-192x192.png",
      androidIcon512: "/android-chrome-512x512.png",
      safariPinnedTab: "/safari-pinned-tab.svg",
      browseConfig: "/browserconfig.xml",
      siteManifest: "/site.webmanifest",
    },
};

const page = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Hero />
        <div className={css.content}>
          <LinksPages />
          <Description />
        </div>
      </div>
    </section>
  );
};

export default page;
