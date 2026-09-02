"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import CartDrawer from "./CartDrawer";
import { useCart } from "./CartProvider";

const LINKS = [
  { label: "DROP", href: "/drop" },
  { label: "COLLECTION", href: "/collection" },
  { label: "LOOKBOOK", href: "/lookbook" },
  { label: "OUR STORY", href: "/our-story" },
];

const MORE_LINKS = [
  { label: "COLLABORATION", href: "/collaboration" },
  { label: "REVIEW", href: "/review" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { open: cartOpen, setOpen: setCartOpen, count: cartCount } = useCart();
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const isActive = (href) => pathname === href;
  const linkClass = (href) =>
    `text-[11px] font-jetbrains font-medium uppercase tracking-[0.18em] transition-colors ${
      isActive(href) ? "text-primary" : "text-white/70 hover:text-primary"
    }`;

  const submitSearch = () => {
    const q = searchQuery.trim();
    setSearchOpen(false);
    router.push(q ? `/collection?search=${encodeURIComponent(q)}` : "/collection");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    searchInputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    const onDown = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [searchOpen]);

  return (
    <header
      id="main-nav"
      className="sticky top-0 z-50 transition-all duration-300 ease-in-out"
      style={{
        background: scrolled ? "rgba(6,6,6,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
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
              onClick={() => {
                setMoreOpen(false);
                setMobileOpen(false);
              }}
              className={linkClass(l.href)}
            >
              {l.label}
            </a>
          ))}
          <div className="relative" onMouseLeave={() => setMoreOpen(false)}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
              className={`text-[11px] font-jetbrains font-medium uppercase tracking-[0.18em] transition-colors ${
                MORE_LINKS.some((l) => isActive(l.href))
                  ? "text-primary"
                  : "text-white/70 hover:text-primary"
              }`}
            >
              MORE {moreOpen ? "∧" : "∨"}
            </button>
            {moreOpen && (
              <div className="absolute left-0 top-full z-50 min-w-[180px] border border-black bg-white">
                {MORE_LINKS.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className={`font-jetbrains block px-5 py-3 text-[12px] uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white ${
                      i < MORE_LINKS.length - 1 ? "border-b border-black/10" : ""
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div ref={searchRef} className="hidden items-center md:flex">
            {!searchOpen && (
              <button
                type="button"
                aria-label="Open search"
                aria-expanded={searchOpen}
                aria-controls="nav-search"
                onClick={() => setSearchOpen(true)}
                className="flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </button>
            )}
            <div
              className="flex items-center overflow-hidden transition-all duration-300 ease-in-out"
              style={{ width: searchOpen ? 200 : 0, opacity: searchOpen ? 1 : 0 }}
            >
              <label htmlFor="nav-search" className="sr-only">
                Search drops and collections
              </label>
              <input
                ref={searchInputRef}
                id="nav-search"
                type="search"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submitSearch();
                }}
                tabIndex={searchOpen ? 0 : -1}
                style={{
                  fontFamily: "var(--font-ibm-plex), monospace",
                  letterSpacing: "0.15em",
                  width: 156,
                }}
                className="shrink-0 border border-white/40 border-b-white/50 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white outline-none transition-colors placeholder:text-white/90 focus:border-white focus:border-b-white"
              />
              <button
                type="button"
                aria-label="Search"
                onClick={submitSearch}
                tabIndex={searchOpen ? 0 : -1}
                className="flex h-11 w-11 shrink-0 items-center justify-center text-white transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Wishlist */}
          <a
            href="/wishlist"
            aria-label="Wishlist"
            className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </a>

          {/* Cart */}
          <button
            type="button"
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
            className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 2h2l2.4 12h8.6l2-8H6" />
              <circle cx="10" cy="17" r="1.2" />
              <circle cx="15" cy="17" r="1.2" />
            </svg>
            {cartCount > 0 && (
              <span
                aria-hidden="true"
                style={{ ...{ fontFamily: "var(--font-jetbrains), monospace" }, backgroundColor: "#BC0100" }}
                className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Account */}
          <a
            href="/login"
            aria-label="Account"
            className={`hidden h-11 w-11 items-center justify-center transition-colors hover:text-primary md:flex ${
              pathname === "/login" ? "text-primary" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M2 21c0-4.4 4.5-8 10-8s10 3.6 10 8" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-white md:hidden"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-black px-[5%] py-6 space-y-4 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-[13px] font-jetbrains uppercase tracking-[0.18em] transition-colors ${
                  isActive(l.href) ? "text-primary" : "text-white/80 hover:text-primary"
                }`}
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
      <CartDrawer onClose={() => setCartOpen(false)} />
    </header>
  );
}
