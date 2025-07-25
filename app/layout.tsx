import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZE - Vos vacances à la carte",
  description:
    "Bienvenue chez ZE en Provence ! Nous vous proposons une expérience unique, mêlant confort, convivialité et authenticité provençale. Nos logements, soigneusement décorés et entièrement équipés, vous offrent un cadre idéal pour des vacances adaptées à vos envies. Détente,  gastronomie, et moments inoubliables sous le soleil de Provence n'attendent plus que vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R7TS39TM3G" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R7TS39TM3G');
        `}
      </Script>
      <body
        className={inter.className + " bg-gray-50"}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>

      <GoogleTagManager gtmId="GTM-NJLWDH54" />
    </html>
  );
}
