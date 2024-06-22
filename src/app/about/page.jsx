import ListSocials from "@/components/aboutPage/ListSocials/ListSocials";
import NuestrasYoutube from "@/components/aboutPage/NuestrasYoutube/NuestrasYoutube";
import SitiosWeb from "@/components/aboutPage/SitiosWeb/SitiosWeb";
import css from "./page.module.css";

export const metadata = {
  title: "Solidaria RTV - Nuestras afiliaciones, sitios web y redes sociales",
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
    <section>
      <div className={css.container}>
        <h1 className={css.title}>Medios de Comunicación Bíblicas</h1>
        <div>
          <ListSocials />
          <NuestrasYoutube />
        </div>
        <SitiosWeb />
      </div>
    </section>
  );
};

export default page;
