/* ═══════════════════════════════════════════════════════
   SECTION 5 — CONTACT / AUDIT
   Asymmetric split:
   Left  = label · headline · description · trust bullets · contact links
   Right = contact form inside organic-cornered card + decorative blob
   The form card uses alternating border-radius (8 / 64) for a non-rectangular
   editorial shape. group/form hover lifts the card shadow.
════════════════════════════════════════════════════════ */
function ContactSection() {
  const trustItems = [
    {
      title: "Audit en 10–15 min",
      desc: "Analyse de votre fiche Google + votre site.",
    },
    {
      title: "Plan d'action clair",
      desc: "3–5 priorités classées par impact réel.",
    },
    {
      title: "Sans engagement",
      desc: "Vous décidez librement de la suite.",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F7F5] py-24 lg:py-36"
    >
      {/* ── BG: organic blob — upper right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[640px] w-[640px]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(219,234,254,0.70) 0%, transparent 68%)",
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          filter: "blur(48px)",
        }}
      />

      {/* ── BG: soft glow — lower left ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[440px] w-[440px] rounded-full bg-blue-50/55"
        style={{ filter: "blur(80px)" }}
      />

      {/* ── BG: dot cluster — bottom right ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-12 right-[6%] hidden select-none lg:grid lg:grid-cols-6 lg:gap-[9px]"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="h-[3px] w-[3px] rounded-full bg-blue-300/20"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-start gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-24">
          {/* ══ LEFT: text content ══ */}
          <div className="flex flex-col lg:pt-4">
            {/* Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-600">
                Contact
              </span>
            </div>

            {/* Headline */}
            <h2
              className="mb-6 font-black leading-[1.04] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)" }}
            >
              Votre audit gratuit.
              <br />
              <span className="text-blue-600">10 minutes,</span>
              <br />
              pas plus.
            </h2>

            {/* Description */}
            <p className="mb-12 max-w-[410px] text-[0.97rem] leading-relaxed text-gray-500">
              Envoyez-moi un message et je reviens sous 24h avec un diagnostic
              rapide de votre présence Google et 3 actions concrètes à prioriser
              immédiatement.
            </p>

            {/* Trust items */}
            <div className="mb-11 space-y-6">
              {trustItems.map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  {/* Check badge */}
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-[6px] bg-blue-600/10">
                    <svg
                      className="h-3 w-3 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 text-[13px] font-bold text-gray-900">
                      {title}
                    </p>
                    <p className="text-[13px] leading-relaxed text-gray-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Thin rule */}
            <div className="mb-8 h-px w-14 bg-gray-200" />

            {/* Alternative contact links */}
            <div className="space-y-[14px]">
              {/* Email */}
              <a
                href="mailto:contact@localrank.fr"
                className="group flex items-center gap-3 text-[13px] font-medium text-gray-600 transition-colors duration-150 hover:text-blue-600"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-100/90 transition-shadow duration-150 group-hover:shadow-md">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400 transition-colors duration-150 group-hover:text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                contact@localrank.fr
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[13px] font-medium text-gray-600 transition-colors duration-150 hover:text-blue-600"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-100/90 transition-shadow duration-150 group-hover:shadow-md">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400 transition-colors duration-150 group-hover:text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                LinkedIn
              </a>

              {/* Malt */}
              <a
                href="https://malt.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[13px] font-medium text-gray-600 transition-colors duration-150 hover:text-blue-600"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-100/90 transition-shadow duration-150 group-hover:shadow-md">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400 transition-colors duration-150 group-hover:text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
                Profil Malt
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/localrank"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[13px] font-medium text-gray-600 transition-colors duration-150 hover:text-blue-600"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-100/90 transition-shadow duration-150 group-hover:shadow-md">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400 transition-colors duration-150 group-hover:text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </span>
                Telegram
              </a>
            </div>
          </div>

          {/* ══ RIGHT: form ══ */}
          <div className="relative">
            {/* ── Decorative offset blob behind the form card ── */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-5 h-full w-full"
              style={{
                background:
                  "linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 60%, transparent 100%)",
                borderRadius: "8px 80px 8px 80px",
                opacity: 0.45,
              }}
            />

            {/* ── Form card — organic alternating corners ── */}
            {/* borderRadius alternates tight (8px) / wide (64px) for editorial shape */}
            <div
              className="relative bg-white shadow-[0_20px_70px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0_24px_90px_rgba(0,0,0,0.10)]"
              style={{ borderRadius: "8px 64px 8px 64px" }}
            >
              {/* ── Disponible indicator — top-left corner area ── */}
              <div className="flex items-center gap-2 px-8 pt-8 sm:px-10">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                <span className="text-[11px] font-semibold text-gray-400 tracking-wide">
                  Disponible · Réponse sous 24h
                </span>
              </div>

              <div className="px-8 pb-10 pt-7 sm:px-10 sm:pb-12">
                <form action="#" noValidate>
                  {/* ── Name ── */}
                  <div className="mb-5">
                    <label
                      htmlFor="cf-nom"
                      className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-600"
                    >
                      Nom
                    </label>
                    <input
                      id="cf-nom"
                      type="text"
                      name="nom"
                      placeholder="Votre nom"
                      autoComplete="name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#FDFCFA] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/[0.08]"
                    />
                  </div>

                  {/* ── Email ── */}
                  <div className="mb-5">
                    <label
                      htmlFor="cf-email"
                      className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#FDFCFA] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/[0.08]"
                    />
                  </div>

                  {/* ── Website (optional) ── */}
                  <div className="mb-5">
                    <label
                      htmlFor="cf-site"
                      className="mb-2 flex items-center gap-2"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-600">
                        Site web
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-[2px] text-[10px] font-medium text-gray-400">
                        Optionnel
                      </span>
                    </label>
                    <input
                      id="cf-site"
                      type="url"
                      name="site"
                      placeholder="https://votre-site.fr"
                      autoComplete="url"
                      className="w-full rounded-xl border border-gray-200 bg-[#FDFCFA] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/[0.08]"
                    />
                  </div>

                  {/* ── Message ── */}
                  <div className="mb-8">
                    <label
                      htmlFor="cf-message"
                      className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows={4}
                      placeholder="Décrivez votre activité et vos objectifs locaux..."
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-[#FDFCFA] px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 hover:border-gray-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/[0.08]"
                    />
                  </div>

                  {/* ── Submit ── */}
                  <button
                    type="submit"
                    className="group/btn w-full rounded-xl bg-blue-600 px-6 py-[14px] text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Demander mon audit gratuit
                      <svg
                        className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
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
                    </span>
                  </button>

                  {/* ── Reassurance ── */}
                  <p className="mt-5 text-center text-[11px] tracking-wide text-gray-400">
                    Réponse sous 24h&nbsp;·&nbsp;Aucun spam&nbsp;·&nbsp;Sans
                    engagement
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <ContactSection />
    </main>
  );
}
