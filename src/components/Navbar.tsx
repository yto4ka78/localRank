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

  // Close mobile menu when scrolling away
  useEffect(() => {
    if (mobileOpen && !scrolled) setMobileOpen(false);
  }, [scrolled, mobileOpen]);

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

        {/* ── Mobile drawer ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 bg-white/98 px-5 pb-6 pt-3">
            {/* Nav links */}
            <nav className="mb-4 flex flex-col">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-[15px] font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  {label}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="mb-4 h-px bg-gray-100" />

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 active:bg-blue-700"
            >
              Audit gratuit
              <span className="font-normal text-blue-200/90">(10 min)</span>
              <svg
                className="h-3.5 w-3.5"
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

            {/* Trust line */}
            <p className="mt-3 text-center text-[11px] text-gray-400">
              Réponse sous 24h&nbsp;·&nbsp;Sans engagement
            </p>
          </div>
        </div>
      </header>

      {/* ── Mobile backdrop ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
