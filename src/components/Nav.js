"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "DROP", href: "/drop" },
  { label: "COLLECTION", href: "/collection" },
  { label: "LOOKBOOK", href: "/lookbook" },
  { label: "OUR STORY", href: "/our-story" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="main-nav"
      className="sticky top-0 z-50 transition-all duration-300 ease-in-out border-b border-white/10"
      style={{
        background: scrolled ? "rgba(255,255,255,0.02)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <nav className="relative flex items-center justify-between px-[5%] md:px-[6%] h-16 md:h-[68px]">
        {/* Logo */}
        <Link
          href="/"
          className="clip-logo inline-flex items-center justify-center bg-white px-3 py-1"
          aria-label="ZENJI home"
        >
          <span
            className="font-anton text-lg md:text-xl tracking-tight text-black"
            style={{ clipPath: "none" }}
          >
            ZENJI
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] font-jetbrains font-medium uppercase tracking-[0.18em] text-white/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
              className="text-[11px] font-jetbrains font-medium uppercase tracking-[0.18em] text-white/70 hover:text-primary transition-colors"
            >
              MORE ∨
            </button>
            {moreOpen && (
              <div
                className="absolute right-0 top-8 w-56 border border-white/10 bg-black p-4 space-y-2"
                onMouseLeave={() => setMoreOpen(false)}
              >
                {[
                  ["FAQ", "/faq"],
                  ["Review", "/review"],
                  ["Contact Us", "/contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-[11px] font-jetbrains uppercase tracking-[0.18em] text-white/70 hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <form
            className="hidden md:flex items-center gap-2 border-b border-white/30 focus-within:border-primary pb-1"
            action=""
            role="search"
          >
            <input
              type="text"
              placeholder="SEARCH..."
              aria-label="Search drops and collections"
              className="w-[160px] bg-transparent text-[11px] font-jetbrains font-bold uppercase tracking-widest placeholder-white/50 text-white outline-none"
            />
            <button
              type="submit"
              className="font-anton text-lg leading-none text-white/80 hover:text-primary transition-colors"
            >
              ⌕
            </button>
          </form>

          <a
            href="/login"
            aria-label="Account"
            className="hidden md:block text-white/80 hover:text-primary transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
            </svg>
          </a>

          <a
            href="javascript:void(0)"
            aria-label="Cart"
            className="text-white/80 hover:text-primary transition-colors"
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 8h12l1 13H5L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white flex flex-col gap-[5px] p-1"
          >
            <span
              className="block h-[2px] w-6 bg-white transition-transform"
              style={{ transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-[2px] w-6 bg-white transition-opacity"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-6 bg-white transition-transform"
              style={{ transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-black px-[5%] py-6 space-y-4 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-[13px] font-jetbrains uppercase tracking-[0.18em] text-white/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <form className="flex items-center gap-2 border-b border-white/30 pb-2" role="search">
                <input
                  type="text"
                  placeholder="SEARCH..."
                  aria-label="Search drops and collections"
                  className="flex-1 bg-transparent text-[11px] font-jetbrains font-bold uppercase tracking-widest placeholder-white/50 text-white outline-none"
                />
                <button type="submit" className="text-white/80">
                  ⌕
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
