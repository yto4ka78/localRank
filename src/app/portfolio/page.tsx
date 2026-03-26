import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio — Projets SEO Local & Sites Web | Sitnikov Web",
  description:
    "Découvrez les réalisations de Sitnikov Web : sites vitrines, optimisations SEO local et Google Business Profile pour TPE/PME à Orléans.",
  alternates: { canonical: "https://sitnikovweb.fr/portfolio" },
};

/* ═══════════════════════════════════════════════════════
   TYPES
════════════════════════════════════════════════════════ */
interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  result?: string;
}

interface MosaicProject {
  slug: string;
  title: string;
  category: string;
  image: string;
}

/* ═══════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════ */
const featured: Project = {
  slug: "gb-project-concept",
  title: "GB Project Concept",
  description:
    "Création complète d’un site vitrine pour une entreprise spécialisée dans les travaux extérieurs de maison en Île-de-France : terrasses, allées, clôtures, terrassement et aménagement paysager. Objectif : construire une présence en ligne professionnelle, claire et performante, avec une base SEO technique solide dès le départ.",
  tags: ["Site Vitrine", "SEO Technique", "Local SEO"],
  result: "Site vitrine créé en 1 semaine",
  image: "/portfolio/portfolio-of-gbprojectconcept.png",
};

const showcase: Project[] = [
  {
    slug: "website-analyzer",
    title: "Website Analyzer AI",
    description:
      "Analyse de performance de site web pour les entreprises avec l'IA. Objectif : améliorer la visibilité en ligne et la conversion des clients.",
    tags: ["SEO Technique", "AI"],
    result: "Analyse de performance en 1 minute",
    image: "/portfolio/portfolio-of-websiteanalyzer.webp",
  },
  {
    slug: "french-pizza",
    title: "French Pizza",
    description:
      "Refonte complète du site vitrine d'une pizzeria locale : nouvelle identité visuelle, menu en ligne, optimisation mobile et SEO local. Site reconstruit de zéro pour maximiser les commandes et la visibilité sur Google.",
    tags: ["Site Vitrine", "SEO Local", "Mobile"],
    result: "Site refait de zéro",
    image: "/portfolio/frenchpizza-portfolio.png",
  },
  {
    slug: "bolderiz",
    title: "Bolderiz",
    description:
      "Création complète du site vitrine de zéro : design sur-mesure, structure pensée pour la conversion et optimisation mobile. Un site pensé pour transformer les visiteurs en clients dès le premier clic.",
    tags: ["Site Vitrine", "Design", "Mobile SEO"],
    result: "Site créé de zéro",
    image: "/portfolio/bolderiz.webp",
  },
];

const mosaic: MosaicProject[] = [
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    category: "Visibilité locale Google Maps",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "seo-local",
    title: "SEO Local",
    category: "Référencement naturel local",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "optimisation-site-web",
    title: "Optimisation Site Web",
    category: "Performance & conversion mobile",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "gestion-reputation",
    title: "E-Réputation & Avis",
    category: "Avis Google & confiance client",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "optimisation-ia",
    title: "Optimisation IA",
    category: "Intelligence artificielle & automatisation",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
];

/* ═══════════════════════════════════════════════════════
   SHARED MICRO-COMPONENTS
════════════════════════════════════════════════════════ */
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function TagPill({
  label,
  variant = "light",
}: {
  label: string;
  variant?: "light" | "white";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        variant === "white"
          ? "bg-white text-gray-700 shadow-sm ring-1 ring-gray-200"
          : "bg-blue-50 text-blue-700"
      }`}
    >
      {label}
    </span>
  );
}

function MosaicItemLabel({ project }: { project: MosaicProject }) {
  return (
    <div className="absolute bottom-0 left-0 w-full p-5 translate-y-1.5 transition-transform duration-300 group-hover:translate-y-0">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
        {project.category}
      </p>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-bold text-white leading-snug">
          {project.title}
        </p>
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowRight className="h-3 w-3 text-white" />
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO (redesigned)
   Two-column layout:
   Left  = staggered "Port / folio" title + description + stats
   Right = browser-chrome mockup + three floating badge overlays
   The image overlaps slightly left into the title column.
   Title (z-20) sits above the image (z-auto) at the overlap.
   Floating badges (z-30) sit above everything.
════════════════════════════════════════════════════════ */
function HeroSection() {
  const stats = [
    { value: "5+", label: "Projets réalisés" },
    { value: "+52 %", label: "d'appels en moyenne" },
    { value: "Sur mesure", label: "Chaque projet est unique" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FDFCFA] pb-16 pt-28 lg:pb-20 lg:pt-36">
      {/* ── BG 1: large angled polygon shape — right side ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[54%] bg-blue-50/55"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 82%)" }}
      />

      {/* ── BG 2: soft ambient glow — left ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 h-[420px] w-[420px] rounded-full bg-blue-50/50"
        style={{ filter: "blur(80px)" }}
      />

      {/* ── BG 3: soft mid ambient glow — right center ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[22%] top-[38%] h-[260px] w-[260px] rounded-full bg-blue-100/22"
        style={{ filter: "blur(56px)" }}
      />

      {/* ── BG 4: dot grid — top right corner ── */}
      <div
        aria-hidden="true"
        className="absolute right-[5%] top-[76px] hidden select-none lg:grid lg:grid-cols-6 lg:gap-[10px]"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="h-[4px] w-[4px] rounded-full bg-blue-400/30"
            style={{ opacity: 0.1 + (i % 6) * 0.06 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* Label */}
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-blue-600" />
          <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
            Sitnikov Web
          </span>
        </div>

        {/* ── Two-column composition ── */}
        <div className="grid items-start gap-0 lg:grid-cols-[52%_48%]">
          {/* LEFT: title + description + stats */}
          {/* z-20 ensures title text sits above the overlapping image */}
          <div className="relative z-20 flex flex-col pb-16 lg:pb-24">
            {/* Staggered display title */}
            <h1 className="tracking-tight text-gray-900">
              <span
                className="block font-black leading-[0.86]"
                style={{ fontSize: "clamp(4.6rem, 10.5vw, 9rem)" }}
              >
                Port
              </span>
              {/* "folio" — slightly smaller + right-indent for editorial stagger */}
              <span
                className="block font-black leading-[0.86] text-blue-600"
                style={{
                  fontSize: "clamp(3.8rem, 8.8vw, 7.6rem)",
                  paddingLeft: "clamp(0.5rem, 2vw, 2rem)",
                }}
              >
                folio
              </span>
            </h1>

            {/* Description — larger weight and size than before */}
            <div className="mt-10 max-w-[430px] lg:mt-12">
              <p className="mb-3 text-[1.1rem] font-bold leading-snug text-gray-800 lg:text-[1.18rem]">
                Projets récents et réalisations.
              </p>
              <p className="text-[0.94rem] leading-relaxed text-gray-500 lg:text-base">
                Optimisation locale, référencement Google Maps, sites web
                performants. Voici quelques projets concrets pour des
                entreprises orléanaises — avec des résultats mesurables.
              </p>
            </div>

            {/* Stats — 3-col grid with animated hover accents */}
            <div className="mt-12 grid grid-cols-3 border-t border-gray-100/90 pt-8">
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className={`group cursor-default ${
                    i === 0
                      ? "pr-4 lg:pr-6"
                      : i === 1
                        ? "border-x border-gray-100/90 px-4 lg:px-6"
                        : "pl-4 lg:pl-6"
                  }`}
                >
                  <p className="text-[1.85rem] font-black leading-none tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600 lg:text-[2.2rem]">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium leading-snug text-gray-400 lg:text-xs">
                    {s.label}
                  </p>
                  {/* Animated underline on hover */}
                  <div
                    aria-hidden="true"
                    className="mt-2.5 h-[2px] w-0 rounded-full bg-blue-600 transition-all duration-300 ease-out group-hover:w-6"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: browser mockup + floating badges */}
          {/* No explicit z-index → sits behind left column's z-20 at the overlap */}
          <div className="relative hidden lg:block">
            {/* ── Browser chrome + screenshot ── */}
            <div
              className="group relative overflow-hidden shadow-[0_20px_64px_rgba(0,0,0,0.10)] ring-1 ring-gray-200/55"
              style={{
                borderRadius: "18px",
                marginLeft: "-28px" /* Slight left overlap into title column */,
                marginTop: "6px",
              }}
            >
              {/* macOS-style traffic light chrome bar */}
              <div className="flex items-center gap-[6px] bg-[#EBEBEA] px-4 py-[10px]">
                <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#FFBD2E]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#28C840]" />
                <div className="ml-3 flex max-w-[220px] flex-1 items-center gap-1.5 rounded-[6px] bg-white/60 px-3 py-[5px]">
                  <svg
                    className="h-[10px] w-[10px] flex-shrink-0 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="truncate text-[10px] text-gray-400">
                    https://eriksitnikov.fr/portfolio
                  </span>
                </div>
              </div>

              {/* Project screenshot */}
              <div className="relative">
                <img
                  src="/portfolio/portfolio-hero.png"
                  alt="Aperçu d'un projet"
                  className="block w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  style={{ height: "380px" }}
                />
                {/* Subtle bottom fade toward page background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FDFCFA]/50 to-transparent"
                />
              </div>
            </div>

            {/* ── Floating badge 1: left edge (bleeds into title column) ── */}
            <div className="absolute -left-1 top-[27%] z-30">
              <div className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-[10px] shadow-[0_8px_28px_rgba(0,0,0,0.09)] ring-1 ring-gray-100/90">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-md shadow-blue-600/30">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-black leading-none text-gray-900">
                    Réalisations
                  </p>
                  <p className="mt-[3px] text-[10px] leading-none text-gray-400">
                    SEO & Sites web
                  </p>
                </div>
              </div>
            </div>

            {/* ── Floating badge 2: projects count (top-right of image) ── */}
            <div className="absolute right-[5%] top-[5%] z-30">
              <div className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-[7px] shadow-lg shadow-black/8 ring-1 ring-gray-100/90">
                <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-green-500" />
                <span className="text-[11px] font-bold text-gray-700">
                  5 projets
                </span>
              </div>
            </div>

            {/* ── Floating badge 3: results (lower-right inside image) ── */}
            <div className="absolute bottom-[14%] right-[6%] z-30">
              <div className="rounded-xl bg-blue-600 px-5 py-[14px] shadow-xl shadow-blue-600/25">
                <p className="text-[1.6rem] font-black leading-none tracking-tight text-white">
                  Livraison
                </p>
                <p className="mt-[5px] text-[10px] font-medium text-blue-200">
                  sur mesure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2 — FEATURED PROJECT
   Contained editorial composition:
   Left  = text content (label · title · description · tags · CTA)
   Right = tall arch-shaped image (tombstone mask) + offset decorative ring
   Badge = floats left of arch, lifts on group-hover
   Breaks the full-bleed pattern of the sections above and below.
════════════════════════════════════════════════════════ */
function FeaturedSection() {
  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-[#F8F7F5] py-24 lg:py-36"
    >
      {/* ── BG: ambient glow — upper right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-0 h-[520px] w-[520px] rounded-full bg-blue-100/40"
        style={{ filter: "blur(110px)" }}
      />

      {/* ── BG: small accent dot cluster — lower left ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] left-[3%] hidden select-none lg:grid lg:grid-cols-5 lg:gap-[9px]"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="h-[4px] w-[4px] rounded-full bg-blue-300/25"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-10 xl:gap-16">
          {/* LEFT: text content */}
          <div className="flex flex-col lg:max-w-[500px]">
            {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Réalisation
              </span>
            </div>

            {/* Headline */}
            <h2
              className="mb-6 font-black leading-[1.0] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)" }}
            >
              {featured.title}
            </h2>

            {/* Thin rule */}
            <div className="mb-7 h-px w-14 bg-gray-200" />

            {/* Description */}
            <p className="mb-9 text-[0.97rem] leading-relaxed text-gray-500 lg:text-[1.04rem]">
              {featured.description}
            </p>

            {/* Tags */}
            <div className="mb-10 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <TagPill key={tag} label={tag} variant="white" />
              ))}
            </div>

            {/* CTA */}
            <Link
              href="https://gbprojetconcept.fr"
              target="_blank"
              className="group/btn inline-flex items-center gap-3 self-start rounded-full bg-gray-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
            >
              Voir le projet
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT: arch image + floating badge */}
          {/* `group` here powers image-zoom AND badge-lift on hover */}
          <div className="group relative flex flex-shrink-0 justify-center lg:justify-end">
            {/* ── Decorative offset ring — sits behind the arch ── */}
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 z-0 border-[2.5px] border-blue-100"
              style={{
                width: "clamp(390px, 48vw, 670px)",
                height: "clamp(386px, 48.5vw, 658px)",
                borderRadius: "999px 999px 36px 36px",
              }}
            />

            {/* ── Arch-shaped image (tombstone mask) ── */}
            <div
              className="relative z-10 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.13)]"
              style={{
                width: "clamp(410px, 50vw, 700px)",
                height: "clamp(400px, 50vw, 680px)",
                borderRadius: "999px 999px 40px 40px",
              }}
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                style={{ objectPosition: "top left" }}
              />
              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/40" />
              {/* Subtle blue tint top-right */}
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-950/20 via-transparent to-transparent" />

              {/* "Projet vedette" label — inside arch top */}
              <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800">
                    Projet vedette
                  </span>
                </div>
              </div>
            </div>

            {/* ── Floating metric badge — bleeds left of arch ── */}
            {/* group-hover lifts badge simultaneously with image zoom */}
            <div className="absolute bottom-14 -left-10 z-20 transition-transform duration-500 group-hover:-translate-y-2 lg:-left-14">
              <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_8px_36px_rgba(0,0,0,0.10)] ring-1 ring-gray-100/90">
                <p className="text-[1.65rem] font-black leading-none tracking-tight text-gray-900">
                  +63&nbsp;%
                </p>
                <p className="mt-1.5 text-[11px] text-gray-400">
                  d&apos;appels entrants
                </p>
                <p className="mt-0.5 text-[11px] font-bold text-blue-600">
                  en 3 mois
                </p>
              </div>
            </div>

            {/* ── Small accent pill — top-right corner ── */}
            <div className="absolute right-[4%] top-[7%] z-20 hidden lg:block">
              <div className="flex items-center gap-1.5 rounded-full bg-blue-600/10 px-3 py-[6px] ring-1 ring-blue-200/60">
                <span className="h-[6px] w-[6px] flex-shrink-0 rounded-full bg-blue-600" />
                <span className="text-[10px] font-bold text-blue-700">
                  Caen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — PROJECT SHOWCASE
   Three projects in alternating layouts:
   1. Full-bleed: left image (angled) + right text
   2. Full-bleed: left text + right image (angled)
   3. Contained: offset image right + floating card overlap
════════════════════════════════════════════════════════ */
function ShowcaseSection() {
  const [p1, p2, p3] = showcase;

  return (
    <div id="showcase">
      {/* ── Project 1: image left, text right ── */}
      <section className="relative w-full bg-white">
        <div className="grid min-h-[500px] lg:grid-cols-[58%_42%]">
          {/* Image left — parallelogram clip */}
          <div
            className="group relative min-h-[340px] overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 0 100%)" }}
          >
            <img
              src={p1.image}
              alt={p1.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 via-transparent to-transparent" />
          </div>

          {/* Content right */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:pl-10 lg:pr-16 xl:pl-14 xl:pr-20">
            <div className="mb-5 flex flex-wrap gap-2">
              {p1.tags.map((t) => (
                <TagPill key={t} label={t} />
              ))}
            </div>
            <h3
              className="mb-5 font-black leading-[1.05] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
            >
              {p1.title}
            </h3>
            {p1.result && (
              <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-4 py-1.5">
                <span className="text-xs font-bold text-white">
                  {p1.result}
                </span>
              </div>
            )}
            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-500">
              {p1.description}
            </p>
            <Link
              href="https://websiteanalyzer.fr/"
              target="_blank"
              className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-600 transition-all hover:gap-3"
            >
              Voir le projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Project 2: text left, image right ── */}
      <section className="relative w-full bg-[#F8F7F5]">
        <div className="grid min-h-[500px] lg:grid-cols-[42%_58%]">
          {/* Content left */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:pl-16 lg:pr-10 xl:pl-20 xl:pr-14">
            <div className="mb-5 flex flex-wrap gap-2">
              {p2.tags.map((t) => (
                <TagPill key={t} label={t} />
              ))}
            </div>
            <h3
              className="mb-5 font-black leading-[1.05] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
            >
              {p2.title}
            </h3>
            {p2.result && (
              <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-4 py-1.5">
                <span className="text-xs font-bold text-white">
                  {p2.result}
                </span>
              </div>
            )}
            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-500">
              {p2.description}
            </p>
            <Link
              href="https://frenchpizza.fly.dev/"
              target="_blank"
              className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-600 transition-all hover:gap-3"
            >
              Voir le projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image right — reverse parallelogram clip */}
          <div
            className="group relative min-h-[340px] overflow-hidden"
            style={{ clipPath: "polygon(7% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <img
              src={p2.image}
              alt={p2.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-gray-900/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Project 3: offset image + floating card ── */}
      <section className="relative overflow-hidden bg-white pb-28 pt-20 lg:pb-40 lg:pt-28">
        {/* Ambient blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 h-[440px] w-[440px] rounded-full bg-blue-50/60"
          style={{ filter: "blur(80px)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-blue-50/40"
          style={{ filter: "blur(60px)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          {/* Tags — top-left context */}
          <div className="mb-10 flex flex-wrap gap-2 lg:max-w-xs">
            {p3.tags.map((t) => (
              <TagPill key={t} label={t} />
            ))}
          </div>

          <div className="relative">
            {/* Large image — shifted right via margin-left auto */}
            <div
              className="group relative ml-auto w-full overflow-hidden lg:w-[78%]"
              style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 1.5% 100%)" }}
            >
              <img
                src={p3.image}
                alt={p3.title}
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:aspect-auto lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/30" />

              {/* Result overlay badge */}
              {p3.result && (
                <div className="absolute right-8 top-8 hidden lg:block">
                  <div className="rounded-xl bg-white/90 px-5 py-3 shadow-xl backdrop-blur-sm ring-1 ring-white/50">
                    <p className="text-lg font-black leading-none text-gray-900">
                      {p3.result}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      en 1 semaine
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ── Floating card — overlaps bottom-left of image ── */}
            <div className="relative z-10 mt-8 lg:absolute lg:-bottom-10 lg:left-0 lg:mt-0 lg:w-[420px]">
              {/* decorative card behind */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-blue-50 ring-1 ring-blue-100/60"
                style={{ transform: "rotate(-2.5deg) translateY(6px)", zIndex: -1 }}
              />
              <div className="rounded-2xl bg-white p-7 shadow-[0_16px_56px_rgba(0,0,0,0.09)] ring-1 ring-gray-100/80" style={{ transform: "rotate(-0.6deg)" }}>
                <h3
                  className="mb-3 font-black leading-tight tracking-tight text-gray-900"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                >
                  {p3.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {p3.description}
                </p>
                <Link
                  href={`/portfolio/${p3.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3"
                >
                  Voir le projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — PROJECT MOSAIC
   Asymmetric 12-col CSS grid:
   Row 1: [5 col] [4 col] [3 col ─ spans 2 rows]
   Row 2: [3 col] [6 col] [3 col — continues]
   Each item: image + dark overlay + slide-up label on hover.
   Mobile fallback: 2-col simple grid.
════════════════════════════════════════════════════════ */
function MosaicSection() {
  return (
    <section
      id="mosaic"
      className="relative overflow-hidden bg-[#F8F7F5] pb-24 pt-24 lg:pb-32 lg:pt-36"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-50/80"
        style={{ filter: "blur(70px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* ── Header ── */}
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Compétences
              </span>
            </div>
            <h2
              className="font-black tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Ce que je maîtrise
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 lg:text-right">
            Chaque levier est choisi
            <br />
            pour un impact concret et mesurable.
          </p>
        </div>

        {/* ── Mobile: 2-col grid ── */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {mosaic.map((p) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="group relative block h-[200px] overflow-hidden rounded-2xl"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <MosaicItemLabel project={p} />
            </Link>
          ))}
        </div>

        {/* ── Desktop: asymmetric 12-col mosaic ── */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4 [grid-template-rows:290px_290px]">
          {/* Item 1 — cols 1–5, row 1 */}
          <Link
            href={`/services/${mosaic[0].slug}`}
            className="group relative col-span-5 row-span-1 block overflow-hidden"
            style={{ clipPath: "polygon(0 0, 97% 0, 100% 100%, 3% 100%)" }}
          >
            <img
              src={mosaic[0].image}
              alt={mosaic[0].title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/15 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
            <MosaicItemLabel project={mosaic[0]} />
          </Link>

          {/* Item 2 — cols 6–9, row 1 */}
          <Link
            href={`/services/${mosaic[1].slug}`}
            className="group relative col-span-4 row-span-1 block overflow-hidden"
            style={{ clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)" }}
          >
            <img
              src={mosaic[1].image}
              alt={mosaic[1].title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/15 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
            <MosaicItemLabel project={mosaic[1]} />
          </Link>

          {/* Item 3 — cols 10–12, rows 1–2 (portrait) */}
          <Link
            href={`/services/${mosaic[2].slug}`}
            className="group relative col-span-3 row-span-2 block overflow-hidden"
            style={{ clipPath: "polygon(0 2%, 100% 0, 100% 98%, 0 100%)" }}
          >
            <img
              src={mosaic[2].image}
              alt={mosaic[2].title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/15 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
            <MosaicItemLabel project={mosaic[2]} />
          </Link>

          {/* Item 4 — cols 1–3, row 2 */}
          <Link
            href={`/services/${mosaic[3].slug}`}
            className="group relative col-span-3 row-span-1 block overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 3%, 100% 97%, 0 100%)" }}
          >
            <img
              src={mosaic[3].image}
              alt={mosaic[3].title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/15 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
            <MosaicItemLabel project={mosaic[3]} />
          </Link>

          {/* Item 5 — cols 4–9, row 2 */}
          <Link
            href={`/services/${mosaic[4].slug}`}
            className="group relative col-span-6 row-span-1 block overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 92%)" }}
          >
            <img
              src={mosaic[4].image}
              alt={mosaic[4].title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/15 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
            <MosaicItemLabel project={mosaic[4]} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════════════════════ */
export default function PortfolioPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturedSection />
      <ShowcaseSection />
      <MosaicSection />
    </main>
  );
}
