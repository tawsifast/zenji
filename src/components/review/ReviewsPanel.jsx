"use client";

import { useState } from "react";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };
const AMBER = "#EAB308";
const UNLIT = "#374151";

const STAR_PATH =
  "M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z";

function Stars({
  value,
  ariaLabel,
  className = "",
  size = "h-[1em] w-[1em]",
}) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-0.5 leading-none ${className}`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 24 24"
          fill={n <= value ? AMBER : UNLIT}
          aria-hidden="true"
          className={`${size} shrink-0`}
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </span>
  );
}

const DISTRIBUTION = [5, 4, 3, 2, 1];
const FILTERS = ["ALL", "5★", "4★", "3★", "VERIFIED"];

export default function ReviewsPanel() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [sort, setSort] = useState({ label: "NEWEST FIRST", dir: "↓" });

  return (
    <>
      {/* Rating summary */}
      <section
        aria-label="Rating summary"
        aria-busy="false"
        className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[auto_1fr_auto] lg:gap-16"
      >
        <div>
          <p style={ANTON} aria-hidden="true" className="text-8xl leading-none text-white">
            —
          </p>
          <p style={JET} className="mt-2 text-xs tracking-widest text-gray-400">
            OUT OF 5
          </p>
          <Stars value={0} ariaLabel="0 out of 5 stars" className="mt-4 text-2xl" />
          <p style={IBM} className="mt-3 text-xs text-gray-500">
            No reviews published yet. Be the first.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3">
          {DISTRIBUTION.map((n) => (
            <div key={n} className="flex items-center gap-4">
              <span style={JET} className="w-8 shrink-0 text-xs text-gray-400">
                {n}★
              </span>
              <div
                role="progressbar"
                aria-label={`${n} star reviews`}
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-1.5 flex-1 bg-white/10"
              >
                <div
                  className="h-full transition-[width] duration-500"
                  style={{ width: "0%", backgroundColor: AMBER }}
                />
              </div>
              <span style={JET} className="w-10 shrink-0 text-right text-xs text-gray-400">
                0%
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            ["0", "PUBLISHED REVIEWS"],
            ["—", "AVERAGE RATING"],
            ["0%", "FIVE STAR"],
            ["0%", "RECOMMEND"],
          ].map(([value, label]) => (
            <div key={label} className="border border-white/20 px-6 py-5 lg:min-w-[140px]">
              <p style={ANTON} className="text-3xl leading-none text-white">
                {value}
              </p>
              <p style={JET} className="mt-2 text-[9px] tracking-widest text-gray-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filters + list */}
      <section className="border-t border-white/10 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = activeFilter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(f)}
                  style={JET}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                    active
                      ? "bg-white text-black"
                      : "border border-white/20 text-white hover:border-white/50"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() =>
              setSort((s) =>
                s.dir === "↓" ? { label: "OLDEST FIRST", dir: "↑" } : { label: "NEWEST FIRST", dir: "↓" }
              )
            }
            style={JET}
            className="text-xs uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
          >
            {sort.label} {sort.dir}
          </button>
        </div>

        <p style={JET} className="mt-4 text-[10px] tracking-widest text-gray-500">
          SHOWING 0 OF 0
        </p>
        <p style={IBM} className="mt-12 text-sm text-gray-500">
          No reviews published yet. Be the first.
        </p>
      </section>
    </>
  );
}