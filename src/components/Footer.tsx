import Link from 'next/link'

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ]

  const values = [
    'Prix fixe',
    'Résultats mesurables',
    'Sans engagement',
  ]

  return (
    <footer className="relative overflow-hidden bg-gray-950">

      {/* Subtle ambient glow — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-900/20"
        style={{ filter: 'blur(100px)' }}
      />
      {/* Subtle ambient glow — top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-950/30"
        style={{ filter: 'blur(80px)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        {/* ── Top gradient rule ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* ── Main grid ── */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16 xl:gap-20">

          {/* ── Col 1: Brand ── */}
          <div>
            <Link
              href="/"
              className="mb-5 block text-xl font-black tracking-tight text-white transition-opacity hover:opacity-80"
            >
              Sitnikov <span className="text-blue-500">Web</span>
            </Link>

            <p className="mb-7 max-w-[280px] text-sm leading-relaxed text-gray-400">
              SEO local &amp; optimisation Google Maps pour les TPE/PME de la région
              orléanaise. Plus d&apos;appels, plus de clients — sans jargon.
            </p>

            <ul className="space-y-2.5">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-gray-600">
              Navigation
            </p>
            <nav>
              <ul className="space-y-3.5">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-blue-500 transition-all group-hover:w-3" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Col 3: CTA ── */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-gray-600">
              Commencer
            </p>

            <a
              href="/contact"
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Audit gratuit
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="tel:+33780335490"
              className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +33 7 80 33 54 90
            </a>
            <p className="max-w-[180px] text-xs leading-relaxed text-gray-600">
              Réponse sous 24h<br />
              Sans engagement<br />
              Diagnostic gratuit
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-start justify-between gap-2 border-t border-gray-800/60 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-700">
            &copy; 2026 Sitnikov Web&nbsp;&middot;&nbsp;Orléans&nbsp;&middot;&nbsp;Tous droits réservés
          </p>
          <p className="text-xs text-gray-700">
            Fait avec soin pour les entreprises locales
          </p>
        </div>
      </div>
    </footer>
  )
}
