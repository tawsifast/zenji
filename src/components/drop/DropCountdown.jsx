"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-01T00:00:00+10:00").getTime();

function getCountdown() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

const UNITS = [
  { key: "days", label: "DAYS" },
  { key: "hours", label: "HOURS" },
  { key: "minutes", label: "MINUTES" },
  { key: "seconds", label: "SECONDS" },
];

export default function DropCountdown() {
  const [time, setTime] = useState(getCountdown);

  useEffect(() => {
    const id = window.setInterval(() => setTime(getCountdown()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white" style={{ padding: "100px 6%" }}>
      {/* Decorative overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(188,1,0,0.08) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      <div className="relative">
        <p
          className="mb-12 flex items-center justify-center gap-3 text-xs uppercase"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#bc0100", letterSpacing: "0.3em" }}
        >
          <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: "#bc0100" }} />
          AWAKENING // IS LIVE
        </p>

        <div
          className="mx-auto grid max-w-[640px] grid-cols-2 justify-center gap-3 md:flex md:max-w-none md:gap-6"
          role="timer"
          aria-live="off"
          aria-label="Time remaining until the Awakening drop"
        >
          {UNITS.map((u, i) => (
            <div key={u.key} className="flex items-center justify-center">
              <div
                className="w-full px-3 py-4 sm:px-4 sm:py-7 md:w-[160px]"
                style={{
                  borderRadius: 0,
                  background: "transparent",
                  border: "1px solid #bc0100",
                  boxShadow: "0 0 20px rgba(188,1,0,0.3)",
                }}
              >
                <span className="block text-center text-4xl leading-none text-black sm:text-5xl md:text-7xl" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
                  {pad(time[u.key])}
                </span>
                <span
                  className="mt-3 block text-center text-xs uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {u.label}
                </span>
              </div>
              {i < UNITS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-2 hidden self-center text-4xl md:inline"
                  style={{ fontFamily: "var(--font-anton), sans-serif", color: "#bc0100" }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p
            style={{ fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.25em" }}
            className="text-xs uppercase text-black"
          >
            THE DROP IS COMING
          </p>
          <p
            style={{ fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.15em" }}
            className="mt-2 text-[11px] uppercase text-gray-400"
          >
            01 SEPTEMBER 2026 — AUSTRALIA
          </p>
          <a
            href="/collection"
            className="drop-cta mt-10 inline-block rounded-none px-10 py-4 text-[14px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            THE WAIT IS OVER — ENTER THE ARCHIVE →
          </a>
        </div>
      </div>
    </section>
  );
}
