import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zones d'intervention SEO Local — Orléans & alentours | Sitnikov Web",
  description:
    "Sitnikov Web intervient à Orléans et dans toutes les communes du Loiret : Saran, Olivet, Fleury-les-Aubrais, Saint-Jean-de-Braye et plus. SEO local et Google Maps.",
  alternates: { canonical: "https://sitnikovweb.fr/zones" },
};

const cities = [
  { slug: "orleans", name: "Orléans", postalCode: "45000" },
  { slug: "saran", name: "Saran", postalCode: "45770" },
  { slug: "fleury-les-aubrais", name: "Fleury-les-Aubrais", postalCode: "45400" },
  { slug: "olivet", name: "Olivet", postalCode: "45160" },
  { slug: "saint-jean-de-la-ruelle", name: "Saint-Jean-de-la-Ruelle", postalCode: "45140" },
  { slug: "saint-jean-de-braye", name: "Saint-Jean-de-Braye", postalCode: "45800" },
  { slug: "ingre", name: "Ingré", postalCode: "45140" },
  { slug: "la-chapelle-saint-mesmin", name: "La Chapelle-Saint-Mesmin", postalCode: "45380" },
];

export default function ZonesPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative bg-[#FDFCFA] pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
              Zones d&apos;intervention
            </span>
          </div>
          <h1
            className="mb-6 font-black leading-[1.04] tracking-tight text-gray-900"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
          >
            SEO Local à <span className="text-blue-600">Orléans</span>
            <br />
            et alentours
          </h1>
          <p className="mb-16 max-w-[520px] text-base leading-relaxed text-gray-500">
            J&apos;interviens dans toutes les communes du Loiret pour optimiser votre présence
            Google Maps et référencement local.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/zones/${city.slug}`}
                className="group flex items-center justify-between rounded-2xl bg-white p-6 ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-blue-200"
              >
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-blue-600">{city.name}</p>
                  <p className="text-xs text-gray-400">{city.postalCode}</p>
                </div>
                <svg className="h-4 w-4 text-gray-300 transition-colors group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
