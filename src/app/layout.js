import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="es-ES">
      <body>
          <Header />
          <main>
            {children}
            <GoogleAnalytics gaId="G-S8PFRPB6DC" />
          </main>
          <Footer />
      </body>
    </html>
  );
}
