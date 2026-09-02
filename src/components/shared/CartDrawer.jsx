"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };

export default function CartDrawer({ onClose }) {
  const { open, items, removeItem, updateQty, clearCart, subtotal, fmt } = useCart();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const drawer = (
    <div className="fixed inset-0 z-[200]" role="dialog" aria-modal="true" aria-label="Cart">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/15 bg-[#060606] text-white"
        style={{ animation: "cart-slide-in 0.3s ease-out" }}
      >
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h2 style={ANTON} className="text-xl uppercase tracking-widest">
            YOUR CART{" "}
            {items.length > 0 && (
              <span style={JET} className="align-middle text-[10px] text-white/40">
                ({items.reduce((s, i) => s + i.quantity, 0)})
              </span>
            )}
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary-red"
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
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p style={ANTON} className="text-[22px] uppercase text-white">
              YOUR CART IS EMPTY
            </p>
            <p style={JET} className="mt-3 text-[11px] uppercase tracking-widest text-white/40">
              ADD A PIECE TO START YOUR ARC
            </p>
            <a
              href="/collection"
              style={JET}
              className="mt-8 inline-block min-h-[44px] border border-white px-6 py-3 text-[11px] uppercase tracking-widest text-white transition-colors hover:border-primary-red hover:text-primary-red"
            >
              BROWSE THE COLLECTION →
            </a>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="space-y-6">
                {items.map((it) => (
                  <li key={it.key} className="flex gap-4">
                    <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-surface-warm">
                      <Image
                        src={it.image}
                        alt={it.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p style={ANTON} className="text-[13px] uppercase tracking-widest text-white">
                            {it.name}
                          </p>
                          <p style={JET} className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                            SIZE {it.size}
                            {it.sku ? ` · ${it.sku}` : ""}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(it.key)}
                          aria-label={`Remove ${it.name}`}
                          className="flex h-8 w-8 items-center justify-center text-white/50 transition-colors hover:text-primary-red"
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
                          >
                            <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-2 flex items-end justify-between gap-3">
                        <div
                          style={JET}
                          className="flex items-center border border-white/15"
                        >
                          <button
                            type="button"
                            onClick={() => updateQty(it.key, it.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-primary-red"
                          >
                            −
                          </button>
                          <span className="min-w-[32px] text-center text-[12px] text-white">
                            {it.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(it.key, it.quantity + 1)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-primary-red"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          {it.onSale && it.originalPrice ? (
                            <>
                              <span style={ANTON} className="block text-[10px] tracking-wide text-white/40 line-through">
                                {fmt(it.price)}
                              </span>
                              <span style={ANTON} className="block text-lg leading-none text-primary-red">
                                {fmt(it.originalPrice)}
                              </span>
                            </>
                          ) : (
                            <span style={ANTON} className="block text-lg leading-none text-white">
                              {fmt(it.price)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={clearCart}
                style={JET}
                className="mt-6 border-b border-white/40 pb-1 text-[10px] uppercase tracking-widest text-white/50 transition-colors hover:border-primary-red hover:text-primary-red"
              >
                CLEAR CART
              </button>
            </div>

            <footer className="border-t border-white/10 px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span style={JET} className="text-[11px] uppercase tracking-widest text-white/50">
                  SUBTOTAL
                </span>
                <span style={ANTON} className="text-2xl uppercase text-white">
                  {fmt(subtotal)}
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                style={{ ...ANTON, backgroundColor: "#BC0100" }}
                className="block w-full rounded-none py-4 text-center text-[14px] uppercase tracking-widest text-white transition-colors hover:!bg-[#930100]"
              >
                CHECKOUT →
              </Link>
              <p style={JET} className="mt-3 text-center text-[10px] uppercase tracking-widest text-white/30">
                SHIPPING &amp; TAX CALCULATED AT CHECKOUT
              </p>
            </footer>
          </>
        )}
      </div>
    </div>
  );

  return typeof document === "undefined" ? null : createPortal(drawer, document.body);
}