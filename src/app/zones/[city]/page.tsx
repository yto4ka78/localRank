import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const cities = [
  {
    slug: "orleans",
    name: "Orléans",
    postalCode: "45000",
    description:
      "Spécialiste SEO local à Orléans : optimisation Google Business Profile, référencement local et création de sites vitrine pour les TPE/PME orléanaises.",
  },
  {
    slug: "saran",
    name: "Saran",
    postalCode: "45770",
    description:
      "SEO local et optimisation Google Maps pour les entreprises de Saran. Plus de visibilité, plus d'appels.",
  },
  {
    slug: "fleury-les-aubrais",
    name: "Fleury-les-Aubrais",
    postalCode: "45400",
    description:
      "Référencement local et création de sites pour les commerces et artisans de Fleury-les-Aubrais.",
  },
  {
    slug: "olivet",
    name: "Olivet",
    postalCode: "45160",
    description:
      "Optimisation SEO local pour les TPE/PME d'Olivet. Apparaissez en tête du Local Pack Google.",
  },
  {
    slug: "saint-jean-de-la-ruelle",
    name: "Saint-Jean-de-la-Ruelle",
    postalCode: "45140",
    description:
      "SEO local et Google Business Profile pour les entreprises de Saint-Jean-de-la-Ruelle.",
  },
  {
    slug: "saint-jean-de-braye",
    name: "Saint-Jean-de-Braye",
    postalCode: "45800",
    description:
      "Visibilité locale sur Google Maps pour les artisans et commerces de Saint-Jean-de-Braye.",
  },
  {
    slug: "ingre",
    name: "Ingré",
    postalCode: "45140",
    description:
      "Création de sites vitrine et SEO local pour les entreprises d'Ingré et environs.",
  },
  {
    slug: "la-chapelle-saint-mesmin",
    name: "La Chapelle-Saint-Mesmin",
    postalCode: "45380",
    description:
      "Référencement local et optimisation Google pour les TPE/PME de La Chapelle-Saint-Mesmin.",
  },
];

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = cities.find((c) => c.slug === city);
  if (!data) return {};
  return {
    title: `SEO Local ${data.name} — Sitnikov Web`,
    description: data.description,
    alternates: { canonical: `https://sitnikovweb.fr/zones/${city}` },
  };
}

export default async function ZonePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = cities.find((c) => c.slug === city);
  if (!data) notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sitnikov Web",
    description: data.description,
    url: `https://sitnikovweb.fr/zones/${city}`,
    areaServed: {
      "@type": "City",
      name: data.name,
      postalCode: data.postalCode,
      addressCountry: "FR",
    },
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="relative overflow-hidden bg-[#FDFCFA] pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

          <nav className="mb-10 flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gray-600">Accueil</Link>
            <span>/</span>
            <Link href="/zones" className="transition-colors hover:text-gray-600">Zones</Link>
            <span>/</span>
            <span className="text-gray-600">{data.name}</span>
          </nav>

          <div className="max-w-[640px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                SEO Local · {data.name}
              </span>
            </div>

            <h1
              className="mb-6 font-black leading-[1.04] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
            >
              SEO Local &amp; Google Maps
              <br />
              <span className="text-blue-600">{data.name}</span>
            </h1>

            <p className="mb-10 max-w-[520px] text-base leading-relaxed text-gray-500">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Demander un audit gratuit
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600"
              >
                Voir les services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <h2
            className="mb-12 font-black tracking-tight text-gray-900"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            Pourquoi travailler avec Sitnikov Web à {data.name}&nbsp;?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Spécialiste local", desc: "Connaissance des marchés locaux du Loiret pour un SEO ciblé et efficace." },
              { title: "Résultats mesurables", desc: "Suivi des appels entrants, des clics et du positionnement dans le Local Pack Google." },
              { title: "Prix fixe", desc: "Devis clair sans surprise. Vous savez ce que vous payez avant de commencer." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-gray-50 p-7 ring-1 ring-gray-100">
                <h3 className="mb-3 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
