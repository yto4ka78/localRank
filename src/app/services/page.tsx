import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

const cities = [
  { name: "Orléans", postalCode: "45000" },
  { name: "Saran", postalCode: "45770" },
  { name: "Fleury-les-Aubrais", postalCode: "45400" },
  { name: "Olivet", postalCode: "45160" },
  { name: "Saint-Jean-de-la-Ruelle", postalCode: "45140" },
  { name: "Saint-Jean-de-Braye", postalCode: "45800" },
  { name: "Ingré", postalCode: "45140" },
  { name: "La Chapelle-Saint-Mesmin", postalCode: "45380" },
];

/* ── SEO ──────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Services SEO Local Orléans — Sitnikov Web",
  description:
    "Découvrez tous les services SEO local pour TPE/PME à Orléans : Google Business Profile, référencement local, optimisation site web, gestion des avis.",
  alternates: { canonical: "https://eriksitnikov.fr/services" },
};

/* ── Service icon ─────────────────────────────────────────────────────────── */
function ServiceIcon({ paths }: { paths: string[] }) {
  return (
    <svg
      className="h-[22px] w-[22px]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
      ))}
    </svg>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FDFCFA] pb-0 pt-32 lg:pt-40">

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/3 rounded-full bg-blue-50/70"
          style={{ filter: "blur(80px)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gray-600">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-600">Services</span>
          </nav>

          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
              Services
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-6 max-w-[700px] font-black leading-[1.04] tracking-tight text-gray-900"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Ce que je fais
            <br />
            <span className="text-blue-600">pour votre entreprise</span>
          </h1>

          <p className="mb-0 max-w-[520px] text-base leading-relaxed text-gray-500">
            Des interventions ciblées, mesurables et sans jargon. Chaque service est conçu
            pour que votre téléphone sonne davantage et votre agenda se remplisse.
          </p>

          {/* Bottom rule */}
          <div className="mt-14 h-px bg-gray-100" />
        </div>
      </section>

      {/* ── Service cards grid ──────────────────────────────────────────── */}
      <section className="bg-[#FDFCFA] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:ring-blue-100"
              >
                {/* Left hover accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-6 h-[calc(100%-3rem)] w-[3px] origin-top scale-y-0 rounded-full bg-blue-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-y-100 group-hover:opacity-100"
                />

                {/* Icon */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-all duration-300 group-hover:bg-blue-700 group-hover:shadow-blue-600/35">
                  <ServiceIcon paths={service.iconPaths} />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h2 className="mb-2 text-[1rem] font-bold leading-snug text-gray-900 transition-colors group-hover:text-gray-950">
                    {service.title}
                  </h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                    {service.shortDescription}
                  </p>

                  {/* Benefits preview */}
                  <ul className="mb-6 space-y-1.5">
                    {service.benefits.slice(0, 2).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[12px] text-gray-500">
                        <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-gap duration-200 group-hover:gap-2.5">
                    Découvrir {service.title}
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cities coverage ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
              Zones d&apos;intervention
            </span>
          </div>

          <h2
            className="mb-4 max-w-[760px] font-black leading-[1.08] tracking-tight text-gray-900"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            J&apos;accompagne les entreprises d&apos;Orléans et des communes proches
          </h2>

          <p className="mb-10 max-w-[620px] text-base leading-relaxed text-gray-500">
            Interventions SEO local adaptées au terrain, avec la même exigence de résultat
            pour chaque ville du Loiret.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <div
                key={city.name}
                className="group flex items-center justify-between rounded-2xl bg-[#F8F7F5] px-5 py-4 ring-1 ring-gray-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <p className="text-sm font-bold text-gray-900">{city.name}</p>
                  <p className="text-xs text-gray-500">{city.postalCode}</p>
                </div>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  SEO local
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA band ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">

        {/* Ambient shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/60"
          style={{ filter: "blur(72px)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-[580px] text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-200" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Commencer
              </span>
              <span className="h-px w-8 bg-blue-200" />
            </div>

            <h2
              className="mb-5 font-black leading-[1.06] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Pas sûr de ce dont
              <br />
              <span className="text-blue-600">vous avez besoin&nbsp;?</span>
            </h2>

            <p className="mb-10 text-base leading-relaxed text-gray-500">
              Un audit gratuit de 10 minutes suffit pour identifier les 3 leviers
              prioritaires spécifiques à votre situation.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35"
            >
              Demander mon audit gratuit
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className="mt-4 text-xs text-gray-400">
              Réponse sous 24h&nbsp;·&nbsp;Aucun spam&nbsp;·&nbsp;Sans engagement
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
