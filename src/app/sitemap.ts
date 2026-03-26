import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services";

const BASE = "https://sitnikovweb.fr";

const citySlugs = [
  "orleans",
  "saran",
  "fleury-les-aubrais",
  "olivet",
  "saint-jean-de-la-ruelle",
  "saint-jean-de-braye",
  "ingre",
  "la-chapelle-saint-mesmin",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllServiceSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/zones`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const zoneRoutes: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE}/zones/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...serviceRoutes, ...zoneRoutes];
}
