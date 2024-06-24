"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import Header from "@/components/header/Header";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/footer/Footer";
import FirstScreen from "@/components/FirstScreen/FirstScreen";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
                <Analytics />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </main>
              <Footer />
            </>
          )}
        </body>
      </AuthProvider>
    </html>
  );
}
