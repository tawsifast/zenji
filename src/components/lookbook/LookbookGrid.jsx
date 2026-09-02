"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";

const VIEWS = ["ALL", "FRONT", "BACK", "ON MODEL"];

const VIEW_KEY = {
  FRONT: "front",
  BACK: "back",
  "ON MODEL": "model",
};

function buildCards() {
  const cards = [];
  PRODUCTS.forEach((p) => {
    cards.push({ p, view: "FRONT", key: "front", image: p.images.front });
    cards.push({ p, view: "BACK", key: "back", image: p.images.back });
    cards.push({ p, view: "ON MODEL", key: "model", image: p.images.model });
  });
  return cards;
}

const ALL_CARDS = buildCards();

export default function LookbookGrid() {
  const [view, setView] = useState("ALL");

  const cards =
    view === "ALL" ? ALL_CARDS : ALL_CARDS.filter((c) => VIEW_KEY[view] === c.key);

  return (
    <>
      {/* Sticky filter bar */}
      <div
        className="sticky top-[69px] z-40 flex flex-col items-start gap-2 border-b border-black bg-white sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        style={{ padding: "20px 6%" }}
      >
        <div className="flex flex-wrap gap-2">
          {VIEWS.map((v) => {
            const active = view === v;
            return (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                style={{ fontFamily: "var(--font-jetbrains), monospace", borderColor: active ? "#000" : "rgba(0,0,0,0.2)" }}
                className={`flex min-h-[44px] items-center border px-4 py-2 text-[11px] uppercase transition-colors duration-150 ${
                  active ? "bg-black text-white" : "bg-transparent text-black hover:border-black"
                }`}
              >
                {v}
              </button>
            );
          })}
        </div>
        <span
          className="whitespace-nowrap text-[11px] text-black/40"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          {cards.length} IMAGES
        </span>
      </div>

      {/* Masonry grid */}
      <section className="bg-white" style={{ padding: "48px 6%" }}>
        <div key={view} className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {cards.map((c, i) => (
            <a
              key={`${c.p.slug}-${c.key}`}
              href={c.p.href}
              className="group relative block overflow-hidden"
              style={{ breakInside: "avoid", marginBottom: 16 }}
            >
              <Image
                src={c.image}
                alt={`ZENJI ${c.p.name} anime streetwear, ${c.view.toLowerCase()}`}
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-4 transition-colors duration-300 group-hover:bg-black/70">
                <span
                  className="text-[10px] uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {c.p.badge}
                </span>
                <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p style={{ fontFamily: "var(--font-anton), sans-serif" }} className="text-[20px] uppercase text-white">
                    {c.p.name}
                  </p>
                  <p className="text-[10px] text-white/50" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                    {c.view}
                  </p>
                  <p className="mt-2 text-[11px] text-primary" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                    VIEW PRODUCT →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
