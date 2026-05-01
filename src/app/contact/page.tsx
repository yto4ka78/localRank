import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Audit SEO Gratuit | Sitnikov Web",
  description:
    "Demandez un audit SEO local gratuit. Analyse de votre fiche Google + site en 10 min. Réponse sous 24h, sans engagement.",
  alternates: { canonical: "https://eriksitnikov.fr/contact" },
};

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
                href="mailto:contact@eriksitnikov.fr"
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
                contact@eriksitnikov.fr
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/erik-sitnikov-967227317/"
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
                href="https://www.malt.fr/profile/eriksitnikov"
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
                href="https://t.me/sitnikovweb"
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

          {/* ══ RIGHT: CTA block (no form) ══ */}
          <div className="relative flex flex-col gap-4">

            {/* ── Floating chat card ── */}
            <div className="rounded-2xl bg-white px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
              <div className="mb-4 flex items-start gap-3">
                {/* Avatar */}
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-md shadow-blue-600/20">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                {/* Bubble */}
                <div className="rounded-2xl rounded-tl-none bg-gray-50 px-4 py-3 ring-1 ring-gray-100">
                  <p className="text-sm font-medium leading-snug text-gray-800">
                    Bonjour&nbsp;! Vous souhaitez plus de clients locaux&nbsp;?
                  </p>
                </div>
              </div>
              <a
                href="tel:+33780335490"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/30"
              >
                Oui, je veux un audit
                <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* ── Main CTA card ── */}
            <div
              className="relative bg-white shadow-[0_20px_70px_rgba(0,0,0,0.07)] transition-shadow duration-500 hover:shadow-[0_24px_90px_rgba(0,0,0,0.10)]"
              style={{ borderRadius: "8px 64px 8px 64px" }}
            >
              {/* Decorative blob */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-4 h-full w-full"
                style={{
                  background: "linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 60%, transparent 100%)",
                  borderRadius: "8px 80px 8px 80px",
                  opacity: 0.4,
                  zIndex: -1,
                }}
              />

              {/* Available pill */}
              <div className="flex items-center gap-2 px-8 pt-8 sm:px-10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-gray-400">
                  Disponible · Réponse sous 24h
                </span>
              </div>

              <div className="px-8 pb-10 pt-7 sm:px-10 sm:pb-12">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                  Choisissez votre canal
                </p>
                <h3 className="mb-8 text-xl font-black leading-snug tracking-tight text-gray-900">
                  Parlons de votre<br />
                  <span className="text-blue-600">visibilité Google</span>
                </h3>

                {/* Action buttons */}
                <div className="space-y-3">
                  {/* Phone */}
                  <a
                    href="tel:+33780335490"
                    className="group flex w-full items-center gap-4 rounded-2xl bg-blue-600 px-6 py-4 text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Appeler directement</p>
                      <p className="text-xs font-medium text-blue-200">+33 7 80 33 54 90</p>
                    </div>
                    <svg className="h-4 w-4 text-blue-300 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/33780335490?text=Bonjour%2C%20je%20souhaite%20un%20audit%20SEO%20gratuit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center gap-4 rounded-2xl bg-[#25D366]/10 px-6 py-4 ring-1 ring-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#25D366]/15 hover:shadow-lg"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15">
                      <svg className="h-4 w-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-800">WhatsApp</p>
                      <p className="text-xs text-gray-500">Message rapide, réponse sous 1h</p>
                    </div>
                    <svg className="h-4 w-4 text-gray-300 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@eriksitnikov.fr?subject=Demande%20d%27audit%20SEO%20gratuit"
                    className="group flex w-full items-center gap-4 rounded-2xl bg-gray-50 px-6 py-4 ring-1 ring-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100/80 hover:shadow-md"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-200/60">
                      <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-700">Envoyer un email</p>
                      <p className="text-xs text-gray-400">contact@eriksitnikov.fr</p>
                    </div>
                    <svg className="h-4 w-4 text-gray-300 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Trust line */}
                <p className="mt-7 text-center text-[11px] tracking-wide text-gray-400">
                  Réponse sous 24h&nbsp;·&nbsp;Aucun spam&nbsp;·&nbsp;Sans engagement
                </p>
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
