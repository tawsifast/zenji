"use client";

import Image from "next/image";
import { useCart } from "./CartProvider";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };

export default function ProductCard({
  p,
  className = "block w-[82vw] sm:w-[46vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] flex-shrink-0 snap-start",
  sizes = "(max-width: 640px) 82vw, (max-width: 768px) 46vw, (max-width: 1024px) 33vw, 25vw",
}) {
  const front = p.images ? p.images.front : p.front;
  const back = p.images ? p.images.back : p.back;
  const soldOut = p.inStock === false;
  const { addItem, isWishlisted, toggleWishlist } = useCart();
  const saved = isWishlisted(p.slug);

  return (
    <div className={`group ${className}`}>
      <div className="flex h-full flex-col overflow-hidden border border-deep-black bg-stark-white">
        <a href={p.href} className="group flex aspect-[3/4] flex-col overflow-hidden">
          {/* Image area */}
          <div className="relative flex-1 overflow-hidden bg-surface-warm">
            {p.onSale && (
              <span
                style={{
                  ...JET,
                  position: "absolute",
                  top: 22,
                  left: -30,
                  width: 120,
                  padding: "4px 0",
                  transform: "rotate(-45deg)",
                  textAlign: "center",
                  fontSize: 9,
                  fontWeight: "bold",
                  backgroundColor: "#BC0100",
                  color: "#fff",
                  letterSpacing: "0.5px",
                  zIndex: 20,
                }}
                className="uppercase"
              >
                SALE {p.discountPercent || 15}% OFF
              </span>
            )}

            {soldOut && (
              <div className="absolute right-0 top-0 z-20 flex flex-col items-end">
                <span style={JET} className="bg-deep-black px-2.5 py-1 text-[10px] uppercase tracking-widest text-stark-white">
                  SOLD OUT
                </span>
              </div>
            )}

            {/* Front image */}
            <Image
              src={front}
              alt={`ZENJI ${p.name} anime streetwear, front`}
              fill
              sizes={sizes}
              className="object-cover object-top opacity-100 transition-opacity duration-300 group-hover:opacity-0"
              loading="lazy"
            />
            {/* Back image */}
            <Image
              src={back}
              alt={`ZENJI ${p.name} anime streetwear, back`}
              fill
              sizes={sizes}
              className="object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />

            {/* Quick view bar */}
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
              className="absolute bottom-0 left-0 z-20 flex h-11 w-full translate-y-full items-center justify-center transition-transform duration-300 group-hover:translate-y-0"
            >
              <span style={JET} className="text-[11px] uppercase tracking-widest text-stark-white">
                QUICK VIEW →
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="border-t border-deep-black bg-stark-white px-4 py-4">
            <span
              style={ANTON}
              className="block truncate text-sm uppercase tracking-widest text-black"
            >
              {p.name}
            </span>
            {p.onSale && p.salePrice ? (
              <div className="mt-2 flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span style={JET} className="text-xs tracking-wider text-gray-400 line-through">
                    A${p.price.toFixed(2)}
                  </span>
                </div>
                <span style={ANTON} className="text-2xl leading-none tracking-wide text-primary-red">
                  {p.salePrice}
                </span>
              </div>
            ) : (
              <span style={ANTON} className="mt-2 block text-2xl leading-none tracking-wide text-black">
                A${p.price.toFixed(2)}
              </span>
            )}
          </div>
        </a>

        {/* Footer buttons */}
        <div className="px-4 pb-4">
          {p.inStock ? (
            <div className="flex w-full gap-0">
              <button
                type="button"
                onClick={() => toggleWishlist(p.slug)}
                aria-pressed={saved}
                style={ANTON}
                className="w-1/2 rounded-none border border-black bg-white py-3 text-[13px] uppercase tracking-widest text-black transition-none hover:bg-gray-100"
              >
                {saved ? "♥ SAVED" : "♡ WISHLIST"}
              </button>
              <button
                type="button"
                onClick={() => addItem(p)}
                style={ANTON}
                className="w-1/2 rounded-none border border-black bg-black py-3 text-[13px] uppercase tracking-widest text-white transition-none hover:bg-primary-red"
              >
                ADD TO CART →
              </button>
            </div>
          ) : (
            <button type="button" disabled style={ANTON} className="w-full rounded-none bg-black/30 py-3 text-[13px] uppercase tracking-widest text-white">
              SOLD OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}