import ImageHero from "@/components/television/ImageHero/ImageHero";
import VideoButtons from "@/components/television/VideoButtons/VideoButtons";
import AboutTV from "@/components/television/AboutTV/AboutTV";
import LastVideos from "@/components/television/LastVideos/LastVideos";
import css from "./page.module.css";

export const metadata = {
  title: "Solidaria TV - Televisión cristiana en línea",
  description:
    "Solidaria TV es una televisión cristian en línea que transmite programas y mensajes cristianos las 24 horas del día.",
  icons: {
    icon: "/faviconTV/favicon.ico",
    appleIcon: "/faviconTV/apple-touch-icon.png",
    msIcon: "/faviconTV/mstile-150x150.png",
    favicon16: "/faviconTV/favicon-16x16.png",
    favicon32: "/faviconTV/favicon-32x32.png",
    androidIcon: "/faviconTV/android-chrome-192x192.png",
    androidIcon512: "/faviconTV/android-chrome-512x512.png",
    safariPinnedTab: "/faviconTV/safari-pinned-tab.svg",
    browseConfig: "/faviconTV/browserconfig.xml",
    siteManifest: "/faviconTV/site.webmanifest",
  },
};

const page = () => {
  return (
    <section>
      <ImageHero />
      <div className={css.container}>
        <div className={css.heroContainer}>
          <VideoButtons />
        </div>
        <LastVideos />
        <AboutTV />
      </div>
    </section>
  );
};

export default page;
