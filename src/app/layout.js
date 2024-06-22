'use client';

import { Provider } from "react-redux";
import { GoogleAnalytics } from "@next/third-parties/google";
import store from "@/redux/store";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <body>
        <Header />
        <main>
          <Provider store={store}>
            {children}
            <GoogleAnalytics gaId="G-S8PFRPB6DC" />
          </Provider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
