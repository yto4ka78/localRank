"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when user scrolls back to top
  useEffect(() => {
    if (!scrolled) setMobileOpen(false);
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-white/96 backdrop-blur-md shadow-[0_1px_32px_rgba(0,0,0,0.06)]"
            : "bg-[#FDFCFA]/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="flex h-16 lg:h-[72px] items-center justify-between">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="text-xl font-black tracking-tight text-gray-900 transition-opacity hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              Sitnikov <span className="text-blue-600">Web</span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden items-center gap-9 md:flex">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop tel ── */}
            <a
              href="tel:+33780335490"
              className="hidden items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 md:inline-flex"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +33 7 80 33 54 90
            </a>

            {/* ── Desktop CTA ── */}
            <a
              href="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-px hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 md:inline-flex"
            >
              Audit gratuit
              <span className="font-normal text-blue-200/90">(10 min)</span>
            </a>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className="relative flex h-5 w-5 items-center justify-center"
                aria-hidden="true"
              >
                {/* Bar top */}
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                {/* Bar middle */}
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-200 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "top-1/2 -translate-y-1/2"
                  }`}
                />
                {/* Bar bottom */}
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

      </header>

      {/* ── Mobile fullscreen drawer ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-white transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        {/* Header row — mirrors the navbar */}
        <div className="flex h-16 flex-shrink-0 items-center justify-between px-5">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-xl font-black tracking-tight text-gray-900"
          >
            Sitnikov <span className="text-blue-600">Web</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100"
            aria-label="Fermer le menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-gray-100" />

        {/* Nav links — take remaining space */}
        <nav className="flex flex-1 flex-col px-5 py-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-4 border-b border-gray-50 py-4 text-[17px] font-semibold text-gray-800 transition-colors hover:text-blue-600 active:text-blue-700"
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="flex-shrink-0 px-5 pb-10 pt-4">
          <a
            href="tel:+33780335490"
            onClick={() => setMobileOpen(false)}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-200 hover:text-blue-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +33 7 80 33 54 90
          </a>
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 active:bg-blue-700"
          >
            Audit gratuit
            <span className="font-normal text-blue-200/90">(10 min)</span>
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-3 text-center text-[11px] text-gray-400">
            Réponse sous 24h&nbsp;·&nbsp;Sans engagement
          </p>
        </div>
      </div>
    </>
  );
}
