"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/shared/CartProvider";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

const VIEWS = [
  { key: "front", label: "FRONT" },
  { key: "side", label: "SIDE" },
  { key: "graphic", label: "GRAPHIC" },
  { key: "back", label: "BACK" },
  { key: "model", label: "MODEL" },
];

const DETAIL_LINES = [
  "240gsm heavyweight cotton.",
  "Oversized fit. Garment washed.",
  "Anime graphic screenprint.",
];

const SIZE_GUIDE = [
  ["SIZE", "CHEST (CM)", "LENGTH (CM)"],
  ["S", "99", "68"],
  ["M", "104", "71"],
  ["L", "109", "74"],
  ["XL", "114", "77"],
  ["XXL", "119", "80"],
];

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const GALLERY_THROTTLE_MS = 600;

function isSizeAvailable(p, size) {
  if (p.sizeStock && p.sizeStock[size] !== undefined) return p.sizeStock[size];
  return p.inStock !== false;
}

export default function ProductDetail({ p }) {
  const { addItem, isWishlisted, toggleWishlist } = useCart();
  const [activeView, setActiveView] = useState("front");
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeAlert, setSizeAlert] = useState(false);
  const [openDetails, setOpenDetails] = useState(true);
  const [openSizeGuide, setOpenSizeGuide] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);

  const galleryRef = useRef(null);
  const hoverRef = useRef(false);
  const lastWheelRef = useRef(0);

  useEffect(() => {
    const onWheel = (e) => {
      if (!hoverRef.current) return;
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelRef.current < GALLERY_THROTTLE_MS) return;
      lastWheelRef.current = now;
      setActiveView((current) => {
        const idx = VIEWS.findIndex((v) => v.key === current);
        const next =
          e.deltaY > 0
            ? (idx + 1) % VIEWS.length
            : (idx - 1 + VIEWS.length) % VIEWS.length;
        return VIEWS[next].key;
      });
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const soldOut = p.inStock === false;
  const saved = isWishlisted(p.slug);

  const price = p.onSale && p.sale ? p.sale : p.price;

  const addToCart = () => {
    if (!selectedSize) {
      setSizeAlert(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    addItem(p, selectedSize);
  };

  const toggleView = (key) => {
    setActiveView(key);
    setSizeAlert(false);
  };

  return (
    <main className="min-h-screen bg-white pb-16 md:pb-20">
      <div className="px-[5%] md:px-[6%] py-6">
        <Link
          href="/#latest-drops"
          style={JET}
          className="inline-flex items-center text-[10px] uppercase tracking-widest text-black/40 transition-colors hover:text-black"
        >
          ← BACK
        </Link>
      </div>

      <div className="mx-auto max-w-350 px-[5%] md:px-[6%]">
        <div className="md:grid md:grid-cols-[55%_45%] md:gap-10">
          {/* ------- LEFT: GALLERY ------- */}
          <div>
            <div
              ref={galleryRef}
              onMouseEnter={() => (hoverRef.current = true)}
              onMouseLeave={() => (hoverRef.current = false)}
              className="group relative aspect-[4/5] overflow-hidden bg-surface-warm"
            >
              {p.onSale && (
                <span
                  style={{
                    ...JET,
                    position: "absolute",
                    top: 26,
                    left: -36,
                    width: 150,
                    padding: "6px 0",
                    transform: "rotate(-45deg)",
                    textAlign: "center",
                    fontSize: 11,
                    fontWeight: "bold",
                    backgroundColor: "#BC0100",
                    color: "#fff",
                    letterSpacing: "0.5px",
                    zIndex: 30,
                  }}
                  className="uppercase"
                >
                  SALE {p.discountPercent || 15}% OFF
                </span>
              )}
              {soldOut && (
                <div className="absolute right-3 top-3 z-30">
                  <span
                    style={JET}
                    className="bg-deep-black px-3 py-1.5 text-xs uppercase tracking-widest text-stark-white"
                  >
                    SOLD OUT
                  </span>
                </div>
              )}

              {VIEWS.map((v) => (
                <Image
                  key={v.key}
                  src={p.images[v.key]}
                  alt={`ZENJI ${p.name} — ${v.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className={`object-cover object-top transition-opacity duration-300 ${
                    v.key === activeView ? "opacity-100" : "opacity-0"
                  }`}
                  priority={v.key === "front"}
                />
              ))}

              <div className="pointer-events-none absolute bottom-4 right-4 z-20">
                <span
                  style={{ ...JET, backgroundColor: "rgba(0,0,0,0.5)" }}
                  className="px-2.5 py-1 text-[9px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  SCROLL TO BROWSE ↕
                </span>
              </div>
            </div>

            {/* thumbnails */}
            <div className="mt-4 flex flex-wrap gap-3">
              {VIEWS.map((v) => (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => toggleView(v.key)}
                  aria-pressed={v.key === activeView}
                  className={`relative h-20 w-20 overflow-hidden border bg-surface-warm ${
                    v.key === activeView
                      ? "border-2 border-black"
                      : "border-black/20"
                  }`}
                >
                  <Image
                    src={p.images[v.key]}
                    alt={`${p.name} ${v.label} thumbnail`}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ------- RIGHT: DETAILS ------- */}
          <div className="mt-10 md:mt-0 md:sticky md:top-20 md:self-start md:pl-12">
            <p
              style={JET}
              className="text-xs uppercase tracking-widest text-primary-red"
            >
              DROP / {p.name.replace(" TEE", "")}
            </p>
            <h1
              style={ANTON}
              className="mt-3 text-[32px] uppercase leading-none tracking-wide text-black md:text-[52px]"
            >
              {p.name}
            </h1>
            <p
              style={JET}
              className="mt-3 text-xs uppercase tracking-widest text-black/50"
            >
              COLORWAY: {p.colorway}
            </p>

            {/* price */}
            <div className="mt-5 flex items-baseline gap-4">
              {p.onSale && p.sale ? (
                <>
                  <span
                    style={ANTON}
                    className="text-2xl leading-none tracking-wide text-gray-400 line-through md:text-3xl"
                  >
                    A${p.price.toFixed(2)}
                  </span>
                  <span
                    style={ANTON}
                    className="text-3xl leading-none tracking-wide text-primary-red md:text-4xl"
                  >
                    {p.salePrice}
                  </span>
                </>
              ) : (
                <span
                  style={ANTON}
                  className="text-3xl leading-none tracking-wide text-black md:text-4xl"
                >
                  A${p.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* stock */}
            <div className="mt-4 flex items-center gap-2">
              {soldOut ? (
                <span
                  style={JET}
                  className="text-xs uppercase tracking-widest text-primary-red"
                >
                  SOLD OUT
                </span>
              ) : (
                <span
                  style={JET}
                  className="text-xs uppercase tracking-widest text-green-700"
                >
                  <span className="mr-1 text-yellow-500">★</span>IN STOCK
                </span>
              )}
            </div>

            {/* size selector */}
            <div className="mt-8">
              <p
                style={JET}
                className="mb-3 text-xs uppercase tracking-widest text-black/60"
              >
                SELECT SIZE
              </p>
              <div className="mb-3 flex flex-wrap gap-2">
                {ALL_SIZES.map((s) => {
                  const unavailable = !isSizeAvailable(p, s);
                  const active = selectedSize === s && !unavailable;
                  return (
                    <button
                      key={s}
                      type="button"
                      disabled={unavailable}
                      aria-pressed={active}
                      onClick={() => {
                        setSelectedSize(s);
                        setSizeAlert(false);
                      }}
                      style={JET}
                      className={`flex h-[52px] w-[52px] items-center justify-center border text-[11px] transition-colors duration-150 ${
                        unavailable
                          ? "border-black/20 text-black/25 line-through"
                          : active
                            ? "border-black bg-black text-white"
                            : "border-black bg-transparent text-black hover:border-primary-red hover:bg-primary-red hover:text-stark-white"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
              {sizeAlert && (
                <p
                  style={JET}
                  className="text-xs uppercase tracking-widest text-primary-red"
                >
                  SELECT A SIZE
                </p>
              )}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => toggleWishlist(p.slug)}
                aria-pressed={saved}
                style={ANTON}
                className="w-full rounded-none border border-black bg-white py-4 text-[16px] uppercase tracking-widest text-black transition-none hover:bg-gray-100 sm:w-1/2"
              >
                {saved ? "♥ SAVED" : "♡ WISHLIST"}
              </button>
              <button
                type="button"
                onClick={addToCart}
                style={{ ...ANTON, backgroundColor: "#BC0100" }}
                className="w-full rounded-none py-4 text-[16px] uppercase tracking-widest text-white transition-colors hover:!bg-[#930100] sm:w-1/2"
              >
                ADD TO CART →
              </button>
            </div>

            {/* accordions */}
            <div className="mt-10 border-t border-deep-black">
              {/* PRODUCT DETAILS */}
              <div className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenDetails((v) => !v)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span
                    style={ANTON}
                    className="text-xs uppercase tracking-widest text-black"
                  >
                    PRODUCT DETAILS
                  </span>
                  <span style={ANTON} className="text-base text-black">
                    {openDetails ? "−" : "+"}
                  </span>
                </button>
                {openDetails && (
                  <div className="pb-6">
                    <p
                      style={IBM}
                      className="text-sm leading-relaxed text-black/70"
                    >
                      {p.description}
                    </p>
                    <p
                      style={IBM}
                      className="mt-4 text-sm leading-relaxed text-black/70"
                    >
                      {DETAIL_LINES.join(" ")}
                    </p>
                  </div>
                )}
              </div>

              {/* SIZE GUIDE */}
              <div className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenSizeGuide((v) => !v)}
                  className="flex w-full items-center justify-between py-8 text-left"
                >
                  <span
                    style={ANTON}
                    className="text-sm uppercase tracking-widest text-black"
                  >
                    SIZE GUIDE
                  </span>
                  <span style={ANTON} className="text-base text-black">
                    {openSizeGuide ? "−" : "+"}
                  </span>
                </button>
                {openSizeGuide && (
                  <div className="pb-6">
                    <div className="overflow-x-auto">
                      <table
                        style={IBM}
                        className="w-full text-left text-xs text-black/70"
                      >
                        <tbody>
                          {SIZE_GUIDE.map((row, i) => (
                            <tr
                              key={i}
                              className={
                                i === 0
                                  ? "border-b border-black/20"
                                  : "border-b border-black/5"
                              }
                            >
                              {row.map((cell, j) => (
                                <td
                                  key={j}
                                  className={`px-2 py-2 ${i === 0 ? "font-bold uppercase tracking-widest" : ""} ${j !== 0 ? "text-center" : ""}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p style={IBM} className="mt-3 text-xs text-black/50">
                      Fits oversized. Size down for a closer fit.
                    </p>
                  </div>
                )}
              </div>

              {/* SHIPPING & RETURNS */}
              <div className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenShipping((v) => !v)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span
                    style={ANTON}
                    className="text-xs uppercase tracking-widest text-black"
                  >
                    SHIPPING &amp; RETURNS
                  </span>
                  <span style={ANTON} className="text-base text-black">
                    {openShipping ? "−" : "+"}
                  </span>
                </button>
                {openShipping && (
                  <div className="pb-6">
                    <ul
                      style={IBM}
                      className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-black/70"
                    >
                      <li>Australia Post standard: 2–5 business days.</li>
                      <li>Express: 1–3 business days.</li>
                      <li>International: 7–14 business days.</li>
                      <li>
                        14-day returns on unworn items. See the return policy.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* SKU (standalone, after accordions) */}
              <p
                style={IBM}
                className="pb-2 pt-4 text-xs uppercase tracking-widest text-black/40"
              >
                SKU: {p.sku}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile sticky add-to-cart */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black bg-stark-white px-6 md:hidden">
        <div className="flex items-center justify-between gap-4 py-3">
          <span style={ANTON} className="text-lg text-black">
            {p.onSale && p.sale ? p.salePrice : `A$${p.price.toFixed(2)}`}
          </span>
          <button
            type="button"
            onClick={addToCart}
            style={{ ...ANTON, backgroundColor: "#BC0100" }}
            className="rounded-none px-6 py-3 text-[14px] uppercase tracking-widest text-white transition-colors hover:!bg-[#930100]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </main>
  );
}
