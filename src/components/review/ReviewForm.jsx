"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };
const AMBER = "#EAB308";
const UNLIT = "#374151";

const STAR_PATH =
  "M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z";

const TAGS = [
  "TRUE TO SIZE",
  "RUNS SMALL",
  "RUNS LARGE",
  "PREMIUM QUALITY",
  "FAST SHIPPING",
  "GREAT PACKAGING",
  "WORTH THE WAIT",
];

const FIELD =
  "w-full border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none";
const LABEL =
  "mb-2 block text-[10px] uppercase tracking-widest text-gray-400";

export default function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) =>
    setSelectedTags((curr) => (curr.includes(tag) ? curr.filter((t) => t !== tag) : [...curr, tag]));

  return (
    <section className="mb-24 mt-16 border border-primary bg-[#0A0A0A] p-8">
      <h2 style={ANTON} className="text-2xl uppercase tracking-widest text-white">
        LEAVE YOUR VERDICT
      </h2>
      <p style={JET} className="mt-2 text-xs tracking-widest text-gray-400">
        VERIFIED PURCHASES ONLY
      </p>

      <form
        style={IBM}
        className="mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {submitted ? (
          <p style={JET} className="border-b border-white/30 py-3 text-[13px] uppercase tracking-widest text-white">
            YOUR VERDICT IS IN.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="rv-name" style={JET} className={LABEL}>
                  NAME
                </label>
                <input id="rv-name" required placeholder="FIRST L." className={FIELD} />
              </div>

              <div>
                <label htmlFor="rv-email" style={JET} className={LABEL}>
                  EMAIL
                </label>
                <input id="rv-email" type="email" required placeholder="YOU@EMAIL.COM" className={FIELD} />
              </div>

              <div>
                <label htmlFor="rv-product" style={JET} className={LABEL}>
                  PRODUCT PURCHASED
                </label>
                <select
                  id="rv-product"
                  name="product"
                  required
                  defaultValue=""
                  className={`${FIELD} appearance-none`}
                >
                  <option value="" disabled>
                    SELECT A PIECE
                  </option>
                  {PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rv-order" style={JET} className={LABEL}>
                  ORDER NUMBER
                </label>
                <input id="rv-order" required placeholder="ZJ-000000" className={FIELD} />
              </div>
            </div>

            <div className="mt-6">
              <span style={JET} className={LABEL}>
                STAR RATING
              </span>
              <div className="flex items-center gap-3">
                <div className="flex gap-1 text-2xl">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`Rate ${n} out of 5`}
                      aria-pressed={rating === n}
                      onClick={() => setRating(rating === n ? 0 : n)}
                      className="leading-none transition-transform hover:scale-110 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill={n <= rating ? AMBER : UNLIT}
                        aria-hidden="true"
                        className="h-[1em] w-[1em] shrink-0"
                      >
                        <path d={STAR_PATH} />
                      </svg>
                    </button>
                  ))}
                </div>
                <span style={JET} className="text-[10px] tracking-widest text-gray-500">
                  SELECT A RATING
                </span>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="rv-title" style={JET} className={LABEL}>
                REVIEW TITLE
              </label>
              <input id="rv-title" name="title" required placeholder="SUM IT UP IN A LINE" className={FIELD} />
            </div>

            <div className="mt-6">
              <label htmlFor="rv-text" style={JET} className={LABEL}>
                YOUR REVIEW
              </label>
              <textarea
                id="rv-text"
                rows={5}
                required
                placeholder="FIT, FABRIC, PRINT, SHIPPING — TELL US EVERYTHING."
                className={`${FIELD} resize-y leading-relaxed`}
              />
            </div>

            <div className="mt-6">
              <span style={JET} className={LABEL}>
                TAGS (OPTIONAL)
              </span>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleTag(tag)}
                      style={JET}
                      className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors ${
                        active
                          ? "border border-white bg-white text-black"
                          : "border border-white/20 text-gray-400 hover:border-white/50 hover:text-white"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              tabIndex={0}
              style={{ ...ANTON, backgroundColor: "#BC0100" }}
              className="mt-8 w-full py-4 text-base uppercase tracking-widest text-white transition-colors hover:!bg-[#930100] disabled:cursor-not-allowed disabled:opacity-60"
            >
              SUBMIT REVIEW →
            </button>
          </>
        )}
      </form>
    </section>
  );
}