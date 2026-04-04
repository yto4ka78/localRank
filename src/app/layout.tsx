import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://sitnikovweb.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sitnikov Web — SEO Local & Google Maps Orléans",
    template: "%s | Sitnikov Web",
  },
  description:
    "Spécialiste SEO local indépendant à Orléans. Optimisation Google Business Profile, référencement local et création de sites vitrine pour TPE/PME. Plus d'appels, plus de clients.",
  alternates: {
    canonical: BASE_URL,
    languages: { "fr-FR": BASE_URL },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Sitnikov Web",
    title: "Sitnikov Web — SEO Local & Google Maps Orléans",
    description:
      "Spécialiste SEO local indépendant à Orléans. Optimisation Google Business Profile, référencement local et création de sites vitrine pour TPE/PME.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sitnikov Web" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitnikov Web — SEO Local & Google Maps Orléans",
    description:
      "Spécialiste SEO local indépendant à Orléans. Plus d'appels, plus de clients.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="alternate" hrefLang="fr-FR" href={BASE_URL} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LTCDWZ15YB" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LTCDWZ15YB');
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
