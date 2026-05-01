import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/faq/FaqAccordion";

/* ─────────────────────────────────────────────────────────
   METADATA
───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | Sitnikov Web",
  description:
    "Réponses aux questions les plus fréquentes sur mes services : création de sites web, SEO local, optimisation des performances, outils IA et conditions de collaboration.",
  alternates: { canonical: "https://eriksitnikov.fr/faq" },
};

/* ─────────────────────────────────────────────────────────
   SECTION 1 — HERO
   Dark full-width section with asymmetric text/visual split.
   Right side: abstract editorial cluster with stat card.
───────────────────────────────────────────────────────── */
function HeroSection() {
  const categoryPills: { label: string; count: number }[] = [
    { label: "Travailler ensemble", count: 4 },
    { label: "Création de sites", count: 4 },
    { label: "Optimisation & SEO", count: 2 },
    { label: "Tarifs & délais", count: 3 },
    { label: "IA & automatisation", count: 2 },
    { label: "Support & révisions", count: 1 },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FDFCFA] pb-20 pt-36 lg:pb-28 lg:pt-44">
      {/* Ambient glow top-right */}
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
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
          {/* ── LEFT: text content ── */}
          <div>
            {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                FAQ
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-7 font-black leading-[1.02] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
            >
              Toutes les réponses
              <br />
              <span className="text-blue-600">avant de se lancer.</span>
            </h1>

            {/* Intro */}
            <p className="mb-10 max-w-[480px] text-[1rem] leading-relaxed text-gray-500 lg:text-[1.06rem]">
              Avant qu&apos;on se parle, vous avez peut-être des questions.
              C&apos;est tout à fait normal. Voici les réponses directes aux
              interrogations les plus fréquentes de mes clients — sans détour et
              sans jargon inutile.
            </p>

            {/* Quick stats */}
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[2rem] font-black leading-none tracking-tight text-gray-900">
                  16
                </p>
                <p className="mt-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                  Réponses
                </p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <p className="text-[2rem] font-black leading-none tracking-tight text-gray-900">
                  6
                </p>
                <p className="mt-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                  Catégories
                </p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <p className="text-[2rem] font-black leading-none tracking-tight text-gray-900">
                  &lt;&nbsp;24h
                </p>
                <p className="mt-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                  De réponse
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: editorial visual cluster ── */}
          <div className="relative hidden lg:flex lg:justify-end">
            {/* Main card — category pill grid */}
            <div className="relative">
              {/* Decorative ring behind main card */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 h-full w-full border border-blue-500/15"
                style={{ borderRadius: "48px 16px 48px 16px" }}
              />

              {/* Card */}
              <div
                className="relative bg-white ring-1 ring-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
                style={{
                  borderRadius: "16px 48px 16px 48px",
                  padding: "40px 36px",
                  minWidth: "340px",
                }}
              >
                {/* Ghost "?" */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-4 select-none font-black leading-none text-gray-900/[0.04]"
                  style={{ fontSize: "9rem" }}
                >
                  ?
                </div>

                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
                  Sujets couverts
                </p>

                {/* Category pills grid */}
                <div className="flex flex-col gap-2.5">
                  {categoryPills.map(({ label, count }, i) => (
                    <div
                      key={label}
                      className="flex items-center gap-3"
                      style={{
                        opacity: 0,
                        animation: `faqHeroItem 0.4s ease ${0.1 + i * 0.07}s forwards`,
                      }}
                    >
                      <span
                        className={`h-[5px] w-[5px] flex-shrink-0 rounded-full ${
                          i === 0 ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          i === 0 ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {label}
                      </span>
                      <span
                        className={`ml-auto rounded-full px-2 py-[2px] text-[10px] font-bold ${
                          i === 0
                            ? "bg-blue-50 text-blue-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {count} question{count !== 1 ? "s" : ""}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Separator */}
                <div className="my-7 h-px bg-gray-100" />

                {/* Availability note */}
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500 shadow-sm shadow-green-500/50" />
                  <span className="text-xs font-medium text-gray-500">
                    Disponible · Réponse sous 24h
                  </span>
                </div>
              </div>
            </div>

            {/* Floating small accent badge — lower left */}
            <div
              className="absolute -bottom-4 -left-8 rounded-xl bg-white ring-1 ring-gray-200 px-4 py-3 shadow-xl"
              style={{
                opacity: 0,
                animation: "faqHeroItem 0.5s ease 0.6s forwards",
              }}
            >
              <p className="text-xs font-semibold text-gray-900">
                Devis gratuit
              </p>
              <p className="text-[10px] text-gray-400">Sans engagement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero item animation keyframes */}
      <style>{`
        @keyframes faqHeroItem {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION 2 — FAQ BODY
   Dark contained section: sticky counter sidebar + accordion.
───────────────────────────────────────────────────────── */
function FaqBodySection() {
  return (
    <section className="relative bg-[#F8F7F5] pb-28 pt-6 lg:pb-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[30%] h-[380px] w-[380px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-50/60"
        style={{ filter: "blur(60px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 xl:grid-cols-[320px_1fr] xl:gap-24">
          {/* ── LEFT: sticky info column ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Section label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Questions fréquentes
              </span>
            </div>

            <h2
              className="mb-5 font-black leading-[1.06] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)" }}
            >
              Tout ce que vous voulez savoir
            </h2>

            <p className="mb-10 text-sm leading-relaxed text-gray-500">
              Cliquez sur une question pour révéler la réponse. Utilisez les
              filtres par catégorie pour naviguer rapidement.
            </p>

            {/* Count card */}
            <div
              className="mb-8 bg-white ring-1 ring-gray-200 shadow-sm p-6"
              style={{ borderRadius: "8px 32px 8px 32px" }}
            >
              <p className="mb-1 text-[2.4rem] font-black leading-none tracking-tight text-gray-900">
                16
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Questions & réponses
              </p>
              <div className="my-5 h-px bg-gray-100" />
              <p className="text-[11px] leading-relaxed text-gray-500">
                Organisées en 6 catégories pour vous aider à trouver rapidement
                ce que vous cherchez.
              </p>
            </div>

            {/* CTA link */}
            <Link
              href="#contact-cta"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:text-blue-700"
            >
              Poser une autre question
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

          {/* ── RIGHT: accordion ── */}
          <div>
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION 3 — FINAL CTA
   Dark section with large headline, two action buttons,
   soft radial glow background.
───────────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-[#FDFCFA] pb-28 pt-24 lg:pb-36 lg:pt-32"
    >
      {/* Top border line */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/80"
        style={{ filter: "blur(80px)" }}
      />

      <div className="relative z-10 mx-auto max-w-[700px] px-5 text-center sm:px-8 lg:px-14">
        {/* Label */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-blue-200" />
          <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
            Une question non répondue ?
          </span>
          <span className="h-px w-10 bg-blue-200" />
        </div>

        {/* Headline */}
        <h2
          className="mb-6 font-black leading-[1.04] tracking-tight text-gray-900"
          style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}
        >
          Parlons de votre projet
          <br />
          <span className="text-blue-600">directement.</span>
        </h2>

        {/* Body */}
        <p className="mx-auto mb-12 max-w-[420px] text-[0.97rem] leading-relaxed text-gray-500">
          Si vous ne trouvez pas la réponse que vous cherchez ici, envoyez-moi
          un message. Je réponds personnellement en moins de 24 heures.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
          >
            Poser ma question
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

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-bold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:text-gray-900"
          >
            Voir le portfolio
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

        {/* Reassurance */}
        <p className="mt-7 text-[11px] tracking-wide text-gray-400">
          Réponse sous 24h&nbsp;·&nbsp;Devis gratuit&nbsp;·&nbsp;Sans engagement
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────────────────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Avec quel type d'entreprises travaillez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je travaille principalement avec des TPE et PME — artisans, restaurateurs, professions libérales, commerces locaux — qui veulent développer leur présence en ligne sérieusement.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte un site web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un site vitrine sur mesure démarre généralement à partir de 290 €. Je travaille avec un devis précis et un prix fixe — pas de facturation à l'heure, pas de surprises en cours de route.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure un projet en général ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un site vitrine, comptez entre 2 et 4 semaines selon la complexité. Les missions d'optimisation SEO sont souvent réalisées en 1 à 2 semaines.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous du SEO technique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le SEO technique fait partie intégrante de mon travail : structure des URL, balisage sémantique HTML, Core Web Vitals, sitemap XML, données structurées Schema.org, optimisation des images.",
      },
    },
    {
      "@type": "Question",
      name: "Pouvez-vous intégrer l'IA dans un site ou un processus métier ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Je conçois des intégrations pratiques basées sur l'IA : chatbots, génération automatique de contenus ciblés, réponses clients intelligentes.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="overflow-x-hidden bg-[#FDFCFA]">
        <HeroSection />
        <FaqBodySection />
        <CtaSection />
      </main>
    </>
  );
}
