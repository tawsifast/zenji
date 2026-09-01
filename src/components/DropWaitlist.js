"use client";

import { useState } from "react";
import WordReveal from "@/components/WordReveal";

export default function DropWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="scroll-mt-24 bg-white" style={{ padding: "80px 6%", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
      <div className="mx-auto max-w-[600px] text-center">
        <p
          className="mb-4 text-xs uppercase"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#bc0100", letterSpacing: "0.3em" }}
        >
          GET EARLY ACCESS
        </p>

        <h2
          className="mb-4 text-[40px] uppercase text-black md:text-[64px]"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          <WordReveal words={[["JOIN", "THE", "WAITLIST."]]} className="inline-block" />
        </h2>

        <p
          className="mb-10 text-[13px] text-gray-500"
          style={{ fontFamily: "var(--font-ibm-plex), monospace", lineHeight: 1.7 }}
        >
          Be first to shop Awakening. Exclusive early access + pre-drop discount for waitlist members.
        </p>

        {submitted ? (
          <p
            className="border border-black bg-white px-6 py-5 text-[13px] uppercase tracking-widest text-black"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            YOU&apos;RE ON THE LIST.
          </p>
        ) : (
          <form noValidate className="flex flex-col gap-0 sm:flex-row" onSubmit={handleSubmit}>
            <label htmlFor="waitlist-email" className="sr-only">
              Your email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="waitlist-input flex-1 rounded-none border border-black bg-white text-[13px] text-black placeholder:text-black/35 focus:outline-none sm:border-r-0"
              style={{ fontFamily: "var(--font-ibm-plex), monospace", height: 56, padding: "0 20px" }}
            />
            <button
              type="submit"
              className="drop-cta rounded-none text-[16px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-anton), sans-serif", height: 56, padding: "0 32px" }}
            >
              JOIN THE WAITLIST →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
