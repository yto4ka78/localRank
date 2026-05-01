import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/data/services";

/* ── Static generation ────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

/* ── Per-page SEO metadata ────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `https://eriksitnikov.fr/services/${slug}` },
  };
}

/* ── Sub-components ───────────────────────────────────────────────────────── */
function ServiceIcon({ paths }: { paths: string[] }) {
  return (
    <svg
      className="h-6 w-6"
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
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  /* Related services (3 others) */
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Sitnikov Web",
      url: "https://eriksitnikov.fr",
    },
    areaServed: { "@type": "City", name: "Orléans" },
    url: `https://eriksitnikov.fr/services/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://eriksitnikov.fr" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://eriksitnikov.fr/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://eriksitnikov.fr/services/${slug}` },
    ],
  };

  return (
    <main className="overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ══════════════════════════════════════════════════════════════════
          HERO — service title, tagline, icon
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#FDFCFA] pb-20 pt-32 lg:pb-28 lg:pt-44">

        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/3 rounded-full bg-blue-50/80"
          style={{ filter: "blur(90px)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-50/50"
          style={{ filter: "blur(70px)" }}
        />

        {/* Dot pattern */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots-service" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-service)" />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gray-600">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="transition-colors hover:text-gray-600">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-600">{service.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">

            {/* Left: headline block */}
            <div className="max-w-[640px]">

              {/* Label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-600" />
                <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                  Service
                </span>
              </div>

              {/* Icon + Title row */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                  <ServiceIcon paths={service.iconPaths} />
                </div>
                <h1
                  className="font-black leading-[1.04] tracking-tight text-gray-900"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
                >
                  {service.title}
                </h1>
              </div>

              {/* Tagline */}
              <p className="mb-6 text-[1.15rem] font-semibold leading-relaxed text-gray-700">
                {service.tagline}
              </p>

              {/* Short description */}
              <p className="mb-10 max-w-[520px] text-base leading-relaxed text-gray-500">
                {service.shortDescription}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35"
                >
                  {service.ctaText}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2.5 text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600"
                >
                  Tous les services
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-blue-400 group-hover:bg-blue-50">
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FULL DESCRIPTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 xl:gap-32">

            {/* Left: sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                  En détail
                </span>
                <span className="h-px w-10 bg-blue-200" />
              </div>
              <h2
                className="font-black leading-[1.06] tracking-tight text-gray-900"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Comment ça
                <br />
                <span className="text-blue-600">fonctionne</span>
              </h2>
            </div>

            {/* Right: full description */}
            <div className="space-y-5 text-[1rem] leading-relaxed text-gray-500">
              {service.fullDescription.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FEATURES GRID
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F7F5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

          {/* Section header */}
          <div className="mb-12 lg:mb-16">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Ce qui est inclus
              </span>
              <span className="h-px w-10 bg-blue-200" />
            </div>
            <h2
              className="font-black leading-[1.06] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)" }}
            >
              Les livrables
              <br />
              <span className="text-blue-600">de cette prestation</span>
            </h2>
          </div>

          {/* Features grid — 2×2 on desktop */}
          <div className="grid gap-5 sm:grid-cols-2">
            {service.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="group relative flex gap-5 rounded-2xl bg-white/70 px-6 py-6 ring-1 ring-gray-200/70 backdrop-blur-[2px] transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-gray-200"
              >
                {/* Accent line on hover */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-5 h-[calc(100%-2.5rem)] w-[3px] origin-top scale-y-0 rounded-full bg-blue-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-y-100 group-hover:opacity-100"
                />

                {/* Step number */}
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
                  <span className="text-[11px] font-black text-blue-600">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-1.5 text-[0.95rem] font-bold leading-snug text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BENEFITS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

            {/* Left */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                  Résultats
                </span>
                <span className="h-px w-10 bg-blue-200" />
              </div>
              <h2
                className="mb-5 font-black leading-[1.06] tracking-tight text-gray-900"
                style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)" }}
              >
                Ce que vous
                <br />
                <span className="text-blue-600">obtenez concrètement</span>
              </h2>
              <p className="max-w-[400px] text-base leading-relaxed text-gray-500">
                Des résultats mesurables, pas des promesses vagues. Chaque bénéfice
                est directement lié aux actions menées.
              </p>
            </div>

            {/* Right: benefits list */}
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#F8F7F5] px-5 py-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-gray-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#F8F7F5] py-20 lg:py-28">

        {/* Ambient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/70"
          style={{ filter: "blur(80px)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="mx-auto max-w-[600px] text-center">

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
              Prêt à améliorer votre
              <br />
              <span className="text-blue-600">présence locale&nbsp;?</span>
            </h2>

            <p className="mb-10 text-base leading-relaxed text-gray-500">
              Un audit gratuit de 10 minutes suffit pour établir un diagnostic précis
              et vous proposer un plan d'action concret.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35"
            >
              {service.ctaText}
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

      {/* ══════════════════════════════════════════════════════════════════
          RELATED SERVICES
      ══════════════════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                  Aller plus loin
                </p>
                <h2 className="text-xl font-black text-gray-900">
                  Autres services
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-blue-600 sm:flex"
              >
                Voir tous
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-gray-200/80 bg-[#F8F7F5] px-5 py-4 transition-all duration-200 hover:border-blue-100 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-600/25 transition-colors group-hover:bg-blue-700">
                    <svg
                      className="h-[18px] w-[18px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                    >
                      {s.iconPaths.map((d, i) => (
                        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
                      ))}
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-bold text-gray-900 group-hover:text-blue-600">
                      {s.title}
                    </p>
                    <p className="truncate text-xs text-gray-500">{s.tagline}</p>
                  </div>
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-gray-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
