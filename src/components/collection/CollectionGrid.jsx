"use client";

import { useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { PRODUCTS } from "@/data/products";

const FILTERS = ["ALL", "SALE", "NEW_ARRIVAL", "LIMITED", "ZANGETSU"];

export default function CollectionGrid() {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();
  const filtered = PRODUCTS.filter((p) => {
    const matchFilter =
      filter === "ALL" ? true : filter === "SALE" ? p.onSale : p.badge === filter;
    const matchSearch =
      !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  const clear = () => {
    setSearch("");
    setFilter("ALL");
  };

  return (
    <>
      {/* Sticky filter bar */}
      <div
        className="sticky top-[69px] z-40 flex flex-col items-start gap-2 border-b border-black bg-white sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        style={{ padding: "20px 6%" }}
      >
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                style={{ fontFamily: "var(--font-jetbrains), monospace", borderColor: active ? "#000" : "rgba(0,0,0,0.2)" }}
                className={`flex min-h-[44px] items-center border px-4 py-2 text-[11px] uppercase transition-colors duration-150 ${
                  active ? "bg-black text-white" : "bg-transparent text-black hover:border-black"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="flex w-full items-center gap-3 sm:w-auto">
          <label htmlFor="collection-search" className="sr-only">
            Search the collection
          </label>
          <input
            id="collection-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="SEARCH..."
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            className="min-h-[44px] w-full border border-black/20 bg-transparent px-3 py-2 text-[11px] uppercase text-black placeholder:text-black/30 focus:border-black focus:outline-none sm:w-[180px]"
          />
          <span
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            className="whitespace-nowrap text-[11px] text-black/40"
          >
            {filtered.length} ITEMS
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-white" style={{ padding: "32px 6% 48px" }}>
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[24px] uppercase text-black" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
              NO MATCHES
            </p>
            <p
              className="mt-3 text-[11px] uppercase text-black/40"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              {q
                ? `NOTHING IN THE ARCHIVE FOR "${search.trim()}"`
                : "NOTHING IN THE ARCHIVE FOR THIS FILTER"}
            </p>
            <button
              type="button"
              onClick={clear}
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              className="mt-6 min-h-[44px] border border-black px-5 py-2 text-[11px] uppercase text-black transition-colors hover:bg-black hover:text-white"
            >
              CLEAR SEARCH
            </button>
          </div>
        ) : (
          <div key={`${filter}-${q}`} className="grid grid-cols-2 items-start gap-6 lg:grid-cols-4">
            {filtered.map((p, i) => (
              <div key={p.slug} className="grid-reveal" style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}>
                <ProductCard
                  p={p}
                  className="group block"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
