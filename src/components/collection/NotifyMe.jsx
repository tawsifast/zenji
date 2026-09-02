"use client";

import { useState } from "react";

const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const ANTON = { fontFamily: "var(--font-anton), sans-serif" };

export default function NotifyMe() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p
        style={JET}
        className="mx-auto max-w-[480px] border-b border-white/30 py-3 text-[13px] uppercase tracking-widest text-white"
      >
        YOU&apos;RE ON THE LIST.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mx-auto flex max-w-[480px] items-center gap-4"
    >
      <input
        type="email"
        required
        placeholder="ENTER_EMAIL //"
        style={JET}
        className="flex-1 border-b border-white/30 bg-transparent py-3 text-[13px] text-white placeholder:text-white/30 focus:border-white focus:outline-none"
      />
      <button
        type="submit"
        style={{ ...ANTON, backgroundColor: "#bc0100" }}
        className="drop-cta-dark px-4 md:px-6 py-2 md:py-3 text-[12px] md:text-[14px] uppercase text-white"
      >
        NOTIFY ME
      </button>
    </form>
  );
}
