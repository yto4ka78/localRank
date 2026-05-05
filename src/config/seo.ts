import type { Metadata } from "next";

export const BASE_URL = "https://eriksitnikov.fr";
export const SITE_NAME = "Sitnikov Web";
export const SITE_DESCRIPTION =
  "Spécialiste indépendant à Orléans en création de sites web et référencement naturel (SEO). Optimisation Google Business Profile et référencement local pour TPE/PME. Plus d'appels, plus de clients.";

export const OG_IMAGES: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: SITE_NAME,
  },
];

export const baseMeta: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} — SEO Local & Google Maps Orléans`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: BASE_URL,
    languages: { "fr-FR": BASE_URL },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — SEO Local & Google Maps Orléans`,
    description: SITE_DESCRIPTION,
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — SEO Local & Google Maps Orléans`,
    description:
      "Création de sites web et référencement naturel (SEO) à Orléans. Plus d'appels, plus de clients.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};
