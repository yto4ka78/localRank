import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "SEO Local & Google Maps Orléans — Sitnikov Web",
  description:
    "Spécialiste SEO local indépendant à Orléans. Optimisation Google Business Profile, référencement local et création de sites vitrine pour TPE/PME. Plus d'appels, plus de clients.",
  alternates: { canonical: "https://eriksitnikov.fr" },
};

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO
   Full-viewport editorial layout: off-white left + image right,
   diagonal clip-path, floating elements, large display type.
════════════════════════════════════════════════════════ */
function HeroSection() {
  const benefits = [
    {
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
      label: "+47 % d'appels entrants",
    },
    {
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
      label: "Résultats visibles en 30 jours",
    },
    {
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      label: "Prix fixe, sans engagement",
    },
    {
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
          />
        </svg>
      ),
      label: "SEO local spécialisé Orléans",
    },
  ];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FDFCFA]">
      {/* ════════════════════════════════════════
          MOBILE LAYOUT  (< lg)
          Full-bleed hero: image as background,
          text overlaid on the dark upper zone.
      ════════════════════════════════════════ */}
      <div className="lg:hidden">
        <div className="relative flex min-h-[100svh] flex-col">
          {/* ── Background image (absolute, full cover) ── */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/hero_bg_phone.webp"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 50%" }}
              loading="eager"
              decoding="async"
            />
            {/* Bottom-edge fade → blends into the next section (#FDFCFA) */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(253,252,250,0.75) 70%, #FDFCFA 100%)",
              }}
            />
          </div>

          {/* ── Content layer ── */}
          {/* pt-20 = 80px → clears fixed navbar (h-16 = 64px) + 16px breathing room */}
          <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-10 pt-20">
            {/* TOP — label + headline + subtext */}
            <div className="mt-4">
              {/* Label */}
              <div className="mb-5 flex items-center gap-2.5">
                <span className="h-px w-8 bg-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-blue-300">
                  SEO Local · Orléans
                </span>
              </div>

              {/* Headline (aria-hidden: canonical H1 is in the desktop layout) */}
              <p
                aria-hidden="true"
                className="mb-4 font-black leading-[1.04] tracking-tight text-white"
                style={{ fontSize: "clamp(1.85rem, 9vw, 2.4rem)" }}
              >
                Plus d&apos;appels
                <br />
                et de demandes
                <br />
                <span className="text-blue-400">
                  pour votre
                  <br />
                  entreprise.
                </span>
              </p>

              {/* Body */}
              <p className="mb-1 text-[0.93rem] leading-relaxed text-white/65">
                J&apos;optimise votre présence Google Maps et votre site pour
                transformer chaque recherche locale en client.
              </p>
              <p className="text-[0.82rem] font-semibold text-white/80">
                Spécialisé TPE/PME à Orléans et alentours.
              </p>
            </div>

            {/* BOTTOM — CTA + micro trust line */}
            <div className="mt-10">
              <a
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 active:bg-blue-700"
              >
                Demander un audit
                <span className="font-normal text-blue-200">(10 min)</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Micro trust */}
              <p className="mt-3 text-center text-[11px] text-white/45">
                Réponse sous 24h&nbsp;·&nbsp;Diagnostic gratuit&nbsp;·&nbsp;Sans
                engagement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (>= lg)
      ════════════════════════════════════════ */}
      <div className="hidden lg:flex min-h-screen w-full items-center">
        {/* ── Left decorative background layer ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[52%] overflow-hidden"
        >
          <div
            className="absolute -left-32 -top-24 h-[640px] w-[640px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.09) 0%, rgba(59,130,246,0.03) 45%, transparent 70%)",
              filter: "blur(48px)",
            }}
          />
          <div
            className="absolute bottom-[5%] right-[8%] h-[380px] w-[380px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 60% 60%, rgba(99,102,241,0.07) 0%, transparent 65%)",
              filter: "blur(56px)",
            }}
          />
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.045]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-dots"
                x="0"
                y="0"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="#3b82f6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
            <rect width="100%" height="100%" fill="url(#hero-fade-r)" />
            <defs>
              <linearGradient id="hero-fade-r" x1="0" y1="0" x2="1" y2="0">
                <stop offset="40%" stopColor="#FDFCFA" stopOpacity="0" />
                <stop offset="100%" stopColor="#FDFCFA" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
          <div
            className="absolute left-[4%] top-[28%] h-[260px] w-[220px]"
            style={{
              background:
                "radial-gradient(ellipse at 40% 50%, rgba(147,197,253,0.11) 0%, transparent 70%)",
              filter: "blur(36px)",
              borderRadius: "62% 38% 54% 46% / 48% 60% 40% 52%",
            }}
          />
          <svg
            className="absolute right-0 top-0 h-full w-[1px] opacity-[0.06]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#3b82f6"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* ── Right image panel ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[62%]"
          style={{
            backgroundImage: "url('/hero_bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden" as const,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCFA] via-[#FDFCFA]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-slate-900/20 via-transparent to-transparent" />
        </div>

        {/* ── Floating stat card ── */}
        <div className="absolute bottom-[88px] right-[6%] z-20">
          <div className="rounded-2xl bg-white px-6 py-5 shadow-2xl shadow-black/[0.07] ring-1 ring-gray-100/80">
            <p className="text-[2.4rem] font-black leading-none tracking-tight text-gray-900">
              +47&nbsp;%
            </p>
            <p className="mt-1.5 text-xs font-medium text-gray-400">
              d&apos;appels entrants
              <br />
              en moyenne
            </p>
          </div>
        </div>

        {/* ── Main text content ── */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-14">
          <div className="max-w-[560px] pb-14 pt-[88px]">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                SEO Local · Orléans
              </span>
            </div>

            <h1
              className="mb-6 font-black leading-[1.01] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)" }}
            >
              Plus d&apos;appels
              <br />
              et de demandes
              <br />
              <span className="text-blue-600">
                pour votre
                <br />
                entreprise.
              </span>
            </h1>

            <p className="mb-3 max-w-[430px] text-[1.08rem] leading-relaxed text-gray-500">
              J&apos;optimise votre présence Google Maps et votre site pour
              transformer chaque recherche locale en client.
            </p>
            <p className="mb-9 max-w-[430px] text-[0.93rem] font-semibold text-gray-700">
              Spécialisé TPE/PME à Orléans et alentours.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35"
              >
                Demander un audit
                <span className="font-normal text-blue-200">(10 min)</span>
              </a>
              <a
                href="/services"
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600"
              >
                Voir les offres
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-blue-500 group-hover:bg-blue-50">
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <div className="mb-8 flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {["#93c5fd", "#60a5fa", "#3b82f6", "#2563eb"].map(
                  (color, i) => (
                    <span
                      key={i}
                      className="flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-[#FDFCFA] text-[10px] font-bold text-white"
                      style={{ background: color, zIndex: 4 - i }}
                    >
                      {["G", "M", "P", "A"][i]}
                    </span>
                  ),
                )}
              </div>
              <p className="text-[12px] text-gray-500">
                <span className="font-semibold text-gray-800">
                  5+ entreprises
                </span>{" "}
                accompagnées à Orléans
              </p>
            </div>

            <div className="border-t border-gray-100 pt-7">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                {benefits.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                      {icon}
                    </span>
                    <span className="text-[12px] font-medium text-gray-600">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — EDITORIAL ABOUT (PREMIUM PORTFOLIO BLOCK)
   Full-bleed two-panel composition:
   Left  = dark textured image panel (no max-width wrapper)
   Right = light editorial content panel
   Bottom = floating horizontal metadata strip overlapping both
════════════════════════════════════════════════════════ */
function AboutSection() {
  const industries = [
    "Garages & services auto",
    "Artisans du bâtiment",
    "Restaurants & traiteurs",
    "Salons & esthétique",
    "Médecins & praticiens",
    "Commerces locaux",
  ];

  const metaStrip = [
    { label: "Réponse", value: "sous 24h" },
    { label: "Mode", value: "Intervention solo" },
    { label: "Tarification", value: "Prix fixe" },
    { label: "Périmètre", value: "Google Maps + site" },
  ];

  return (
    /* Extra bottom padding creates room for the overlapping strip */
    <section id="about" className="relative w-full overflow-visible">
      {/* ── Full-bleed two-panel grid (intentionally no max-width) ── */}
      <div className="grid min-h-[600px] lg:min-h-[680px] lg:grid-cols-[44%_56%]">
        {/* LEFT: dark textured image panel */}
        <div
          className="relative min-h-[420px] overflow-hidden lg:min-h-0"
          style={{
            backgroundImage: "url('/main/photo_aboutsection2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Very light overlay — photo stays bright, text still readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-gray-900/10 to-transparent" />

          {/* Floating top-left label */}
          <div className="absolute left-8 top-10 z-10 sm:left-12 sm:top-14 lg:left-16 lg:top-16">
            <div className="rounded-xl bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm ring-1 ring-white/60">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-600" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                  À propos
                </span>
              </div>
              <p className="max-w-[220px] text-sm leading-relaxed text-gray-700">
                Spécialiste SEO local indépendant, basé à Orléans.
                <br />
                Je travaille directement avec vous.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: light editorial content panel */}
        <div className="flex flex-col justify-center bg-white px-8 py-14 sm:px-12 lg:px-16 lg:py-20 xl:px-20">
          <h2
            className="mb-8 font-black leading-[1.06] tracking-tight text-gray-900"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            Pas d&apos;agence.
            <br />
            <span className="text-blue-600">Des résultats</span>
            <br />
            mesurables.
          </h2>

          <div className="mb-10 max-w-[480px] space-y-4 text-[1rem] leading-relaxed text-gray-500">
            <p>
              Je travaille directement avec les propriétaires de TPE/PME dans la
              région orléanaise. Mon objectif est simple : que votre téléphone
              sonne davantage et que votre agenda se remplisse, grâce à une
              présence locale optimisée sur Google.
            </p>
          </div>

          {/* Industry list */}
          <div className="mb-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
              Je travaille surtout avec
            </p>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((name, i) => (
                <span
                  key={name}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold ${
                    i === 0
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : i % 2 === 0
                        ? "bg-gray-900 text-white"
                        : "border border-gray-200 bg-white text-gray-700 shadow-sm"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <p className="max-w-[440px] border-l-2 border-blue-200 pl-4 text-sm leading-relaxed text-gray-500">
            <strong className="text-gray-800">Intervention solo</strong> — vous
            traitez directement avec moi, pas avec un account manager ni un
            stagiaire.{" "}
            <strong className="text-blue-600">
              Réponse sous 24h, toujours.
            </strong>
          </p>
        </div>
      </div>

      {/* ── Overlapping bottom metadata strip ── */}
      {/* Positioned absolute so it bleeds into the next section */}
      <div className="absolute bottom-0 left-4 right-4 z-20 translate-y-1/2 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_48px_rgba(0,0,0,0.10)] ring-1 ring-gray-100">
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 sm:flex sm:divide-y-0">
            {metaStrip.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-1 flex-col gap-1 px-5 py-4 sm:min-w-0 sm:px-6 sm:py-5 lg:px-8 lg:py-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {label}
                </span>
                <span className="text-sm font-bold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — DIAGNOSTIC
   Split editorial layout:
   Left  = sticky headline + subtext + CTA
   Right = flowing problem list — icon + title + body,
           connected by a soft vertical guide line,
           no numbers, no cards, hover choreography.
════════════════════════════════════════════════════════ */
function DiagnosticSection() {
  const problems = [
    {
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
          />
        </svg>
      ),
      title: "Profil Google Business mal optimisé",
      body: "Catégories incorrectes, photos absentes, services non renseignés — Google ne vous montre pas en priorité.",
    },
    {
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h1.5"
          />
        </svg>
      ),
      title: "Site lent / pas adapté mobile",
      body: "La majorité de vos clients viennent du téléphone. Un site lent ou cassé = clients perdus immédiatement.",
    },
    {
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
      title: "Pas de bouton « Appeler » visible",
      body: "Si un visiteur doit chercher votre numéro, vous perdez la moitié des contacts potentiels.",
    },
    {
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ),
      title: "Manque de preuves : avis, réalisations",
      body: "Sans avis récents ni exemples de travaux, les visiteurs ne font pas confiance et vont chez un concurrent.",
    },
    {
      icon: (
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
      title: "Pages services confuses",
      body: "Si le visiteur ne comprend pas ce que vous faites en 5 secondes, il part. C'est aussi simple que ça.",
    },
  ];

  return (
    /* pt-40/52 accommodates the About section's overlapping metadata strip */
    <section
      id="diagnostic"
      className="relative overflow-hidden bg-[#F8F7F5] pb-16 pt-24 lg:pb-24 lg:pt-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full bg-blue-50/80"
        style={{ filter: "blur(90px)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] -translate-x-1/4 translate-y-1/3 rounded-full bg-blue-50/50"
        style={{ filter: "blur(70px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* ── Split layout ── */}
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-28">
          {/* LEFT: sticky headline + subtext + CTA */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-7 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Diagnostic
              </span>
              <span className="h-px w-10 bg-blue-200" />
            </div>

            <h2
              className="mb-7 font-black leading-[1.04] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Ce que
              <br />
              je corrige
              <br />
              le plus
              <br />
              souvent
            </h2>

            <p className="mb-10 max-w-[300px] text-base leading-relaxed text-gray-500">
              Ces 5 problèmes reviennent sur{" "}
              <strong className="font-semibold text-gray-800">
                90&nbsp;% des sites locaux
              </strong>{" "}
              que j&apos;audite.
            </p>

            {/* CTA */}
            <div className="space-y-3 border-t border-gray-200 pt-8">
              <p className="text-sm font-semibold text-gray-800">
                Je corrige tout ça
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3"
              >
                Découvrir les services
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT: flowing problem list */}
          <div className="relative">
            {/* Soft vertical connecting line behind icons */}
            <div
              aria-hidden="true"
              className="absolute left-[19px] top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-blue-200/70 via-blue-100/40 to-transparent"
            />

            <ul className="space-y-3" role="list">
              {problems.map((p, idx) => (
                <li
                  key={p.title}
                  className="group relative -mx-3 flex gap-4 rounded-2xl bg-white/60 px-4 py-5 ring-1 ring-gray-200/70 backdrop-blur-[2px] transition-all duration-300 ease-out hover:bg-white/85 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:ring-gray-200/90 sm:-mx-5 sm:px-6"
                >
                  {/* Left accent line — slides in on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-5 h-[calc(100%-2.5rem)] w-[3px] origin-top scale-y-0 rounded-full bg-blue-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-y-100 group-hover:opacity-100"
                  />

                  {/* Icon container */}
                  <div className="relative z-10 mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm ring-1 ring-gray-200/80 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:ring-blue-600">
                    {p.icon}
                  </div>

                  {/* Text block */}
                  <div className="flex-1">
                    <h3 className="mb-1.5 text-[0.98rem] font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-gray-950 lg:text-[1.02rem]">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-200 group-hover:text-gray-700">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — CONTACT
   Split layout:
   Left  = expanded trust points with descriptions + CTA
   Right = refined process timeline with durations
════════════════════════════════════════════════════════ */
function ContactSection() {
  const trustPoints = [
    {
      title: "Audit en 10–15 min",
      desc: "Analyse de votre fiche Google + votre site. Concret, sans jargon, sans prise de tête.",
    },
    {
      title: "Plan d'action clair",
      desc: "3–5 priorités classées par impact réel, avec une estimation du résultat attendu.",
    },
    {
      title: "Sans engagement",
      desc: "L'audit est 100% gratuit et sans obligation. Vous décidez librement de la suite.",
    },
  ];

  const process = [
    {
      num: "01",
      title: "Audit gratuit",
      duration: "10–15 min",
      detail: "Fiche Google + site · Gratuit",
    },
    {
      num: "02",
      title: "Plan d'action + prix fixe",
      duration: "Sous 24h",
      detail: "Priorités + estimation résultats",
    },
    {
      num: "03",
      title: "Mise en place",
      duration: "3–10 jours",
      detail: "Vous validez à chaque étape",
    },
    {
      num: "04",
      title: "Suivi & résultats",
      duration: "En continu",
      detail: "Rapport mensuel · Métriques réelles",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 lg:py-36"
    >
      {/* Ambient shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[560px] w-[560px] -translate-y-1/3 translate-x-1/3 bg-blue-50/60"
        style={{
          borderRadius: "55% 45% 60% 40% / 48% 52% 48% 52%",
          filter: "blur(72px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[340px] w-[340px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-50/50"
        style={{ filter: "blur(64px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 xl:gap-28">
          {/* ── Left: trust + CTA ── */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Contact
              </span>
              <span className="h-px w-10 bg-blue-200" />
            </div>

            <h2
              className="mb-6 font-black leading-[1.07] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}
            >
              Votre audit gratuit.
              <br />
              <span className="text-blue-600">10 minutes,</span>
              <br />
              pas plus.
            </h2>

            <p className="mb-12 max-w-[440px] leading-relaxed text-gray-500">
              Envoyez-moi un message et je reviens sous 24h avec un diagnostic
              de votre présence Google + 3 actions concrètes à prioriser
              immédiatement.
            </p>

            {/* Expanded trust points */}
            <div className="mb-12 space-y-7">
              {trustPoints.map(({ title, desc }, i) => (
                <div key={title} className="flex items-start gap-5">
                  {/* Step indicator */}
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <span className="text-[11px] font-black text-blue-600">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-bold text-gray-900">
                      {title}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/35 sm:inline-flex sm:w-auto"
            >
              Demander mon audit gratuit
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <p className="mt-4 text-xs text-gray-400">
              Réponse sous 24h&nbsp;·&nbsp;Aucun spam&nbsp;·&nbsp;Sans
              engagement
            </p>
          </div>

          {/* ── Right: process timeline ── */}
          <div className="relative lg:pt-[64px]">
            {/* Header */}
            <div className="mb-2">
              <p className="text-base font-black text-gray-900">
                Votre parcours
              </p>
              <p className="text-xs text-gray-400">
                De l&apos;audit aux résultats
              </p>
            </div>
            <div className="my-8 h-px bg-gray-100" />

            {/* Steps */}
            <div className="relative space-y-0">
              {/* Vertical guide */}
              <div
                aria-hidden="true"
                className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue-200 via-blue-100/60 to-transparent"
              />

              {process.map((step, idx) => (
                <div
                  key={step.num}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-100 bg-white shadow-sm">
                    <span className="text-[10px] font-black text-blue-600">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-0.5">
                    <div className="mb-0.5 flex items-center gap-2">
                      <p className="text-sm font-bold text-gray-900">
                        {step.title}
                      </p>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-400">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-8 flex items-center gap-2.5 rounded-xl bg-[#F8F7F5] px-4 py-3">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
              <p className="text-xs font-medium text-gray-600">
                Réponse garantie sous 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — SERVICES
   4-card grid: icon + title + short desc + benefits preview
   Each card routes to /services/[slug]
════════════════════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 lg:py-24"
    >
      {/* Ambient glow — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] -translate-y-1/3 translate-x-1/3 rounded-full bg-blue-50/70"
        style={{ filter: "blur(88px)" }}
      />
      {/* Ambient glow — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] -translate-x-1/4 translate-y-1/3 rounded-full bg-blue-50/50"
        style={{ filter: "blur(70px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* ── Header ── */}
        <div className="mb-14 grid items-end gap-6 lg:mb-16 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Services
              </span>
              <span className="h-px w-10 bg-blue-200" />
            </div>
            <h2
              className="mb-4 font-black leading-[1.04] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Ce que je fais
              <br />
              <span className="text-blue-600">pour votre entreprise</span>
            </h2>
            <p className="max-w-[460px] text-base leading-relaxed text-gray-500">
              Des interventions ciblées et mesurables pour que votre téléphone
              sonne davantage — sans jargon, sans agence intermédiaire.
            </p>
          </div>

          {/* "Voir tous" link — desktop */}
          <Link
            href="/services"
            className="group hidden items-center gap-2.5 text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600 lg:flex"
          >
            Voir tous les services SEO a Orleans
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-blue-400 group-hover:bg-blue-50">
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-[#F8F7F5] px-6 py-6 ring-1 ring-gray-200/70 transition-all duration-300 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:ring-blue-100"
            >
              {/* Left hover-accent line */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-6 h-[calc(100%-3rem)] w-[3px] origin-top scale-y-0 rounded-full bg-blue-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-y-100 group-hover:opacity-100"
              />

              {/* Icon */}
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20 transition-all duration-300 group-hover:bg-blue-700 group-hover:shadow-blue-600/30">
                <svg
                  className="h-[20px] w-[20px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.65}
                  aria-hidden="true"
                >
                  {service.iconPaths.map((d, i) => (
                    <path
                      key={i}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={d}
                    />
                  ))}
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col">
                <h3 className="mb-2 text-[0.98rem] font-bold leading-snug text-gray-900 transition-colors group-hover:text-gray-950">
                  {service.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                  {service.shortDescription}
                </p>

                {/* First benefit preview */}
                <p className="mb-5 flex items-start gap-2 text-[12px] text-gray-500">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="h-2.5 w-2.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  {service.benefits[0]}
                </p>

                {/* Arrow CTA */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  En savoir plus sur {service.title}
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Mobile "Voir tous" ── */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Voir tous les services SEO a Orleans
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════════════════════ */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sitnikov Web",
  description:
    "Spécialiste SEO local indépendant à Orléans. Optimisation Google Business Profile, référencement local et création de sites vitrine pour TPE/PME.",
  url: "https://eriksitnikov.fr",
  telephone: "+33780335490",
  email: "contact@eriksitnikov.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orléans",
    addressRegion: "Centre-Val de Loire",
    postalCode: "45000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.9029,
    longitude: 1.9039,
  },
  areaServed: { "@type": "City", name: "Orléans" },
  priceRange: "€€",
  sameAs: [
    "https://maps.app.goo.gl/Rbju1rQvQpfmUJDt8",
    "https://www.linkedin.com/in/erik-sitnikov-967227317/",
  ],
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <HeroSection />
      <AboutSection />
      <DiagnosticSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
