"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/header/Header";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/footer/Footer";
import FirstScreen from "@/components/FirstScreen/FirstScreen";
import "./globals.css";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es-ES">
      <AuthProvider>
        <body>
          {loading ? (
            <FirstScreen />
          ) : (
            <>
              {" "}
              <Header />
              <main>
                {children}
                <GoogleAnalytics gaId="G-S8PFRPB6DC" />
              </main>
              <Footer />
            </>
          )}
        </body>
      </AuthProvider>
    </html>
  );
}
