import ImageHero from "@/components/radio/ImageHero/ImageHero";
import AudioRadio from "@/components/radio/Audio/AudioRadio";
import Descripcion from "@/components/radio/Descripcion/Descripcion";
import LastVideos from "@/components/radio/LastVideos/LastVideos";
import DesktopImg from "@/components/radio/DesktopImg/DesktopImg";
import css from "./page.module.css";

export const metadata = {
  title: "Radio Solidaria - Radio cristiana sensible al tiempo presente",
  description:
    "Radio Solidaria es una radio cristiana en línea que transmite música, programas y mensajes cristianos las 24 horas del día.",
    icons: {
      icon: "/faviconRadio/favicon.ico",
      appleIcon: "/faviconRadio/apple-touch-icon.png",
      msIcon: "/faviconRadio/mstile-150x150.png",
      favicon16: "/faviconRadio/favicon-16x16.png",
      favicon32: "/faviconRadio/favicon-32x32.png",
      androidIcon: "/faviconRadio/android-chrome-192x192.png",
      androidIcon512: "/faviconRadio/android-chrome-512x512.png",
      safariPinnedTab: "/faviconRadio/safari-pinned-tab.svg",
      browseConfig: "/faviconRadio/browserconfig.xml",
      siteManifest: "/faviconRadio/site.webmanifest",
    },
};

const page = () => {
  return (
    <section className={css.section}>
      <ImageHero />
      <div className={css.container}>
        <div className={css.heroContainer}>
          <DesktopImg />
          <AudioRadio url="http://master.shoutcast.com:8000/radiosolidaria" />
        </div>
        <div className={css.contentContainer}>
          <LastVideos />
          <Descripcion />
        </div>
      </div>
    </section>
  );
};

export default page;
