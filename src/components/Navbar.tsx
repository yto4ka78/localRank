"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
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
          >
            Local<span className="text-blue-600">Rank</span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map(({ label, href }) =>
              href.startsWith("/") ? (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-900"
                >
                  {label}
                </a>
              ),
            )}
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
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="Ouvrir le menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
