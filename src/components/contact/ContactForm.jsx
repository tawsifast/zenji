"use client";

import { useState } from "react";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const inputCls =
    "w-full rounded-none border border-white/20 bg-black p-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={IBM}
    >
      <div className="mb-6">
        <label htmlFor="ct-name" style={JET} className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
          NAME
        </label>
        <input id="ct-name" required autoComplete="name" placeholder="YOUR NAME" name="name" className={inputCls} />
      </div>
      <div className="mb-6">
        <label htmlFor="ct-email" style={JET} className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
          EMAIL
        </label>
        <input id="ct-email" type="email" required autoComplete="email" placeholder="YOU@EMAIL.COM" name="email" className={inputCls} />
      </div>
      <div className="mb-6">
        <label htmlFor="ct-order" style={JET} className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
          ORDER NUMBER (OPTIONAL)
        </label>
        <input id="ct-order" placeholder="Leave blank if no order" name="orderNumber" className={inputCls} />
      </div>
      <div className="mb-6">
        <label htmlFor="ct-subject" style={JET} className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
          SUBJECT
        </label>
        <select id="ct-subject" name="subject" required defaultValue="" className={`${inputCls} appearance-none`}>
          <option value="" disabled>
            SELECT A SUBJECT
          </option>
          {["ORDER ENQUIRY", "RETURN REQUEST", "SIZING QUESTION", "COLLABORATION", "PRESS", "OTHER"].map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="ct-message" style={JET} className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
          MESSAGE
        </label>
        <textarea id="ct-message" name="message" required rows="5" placeholder="TELL US EVERYTHING." className={`${inputCls} resize-y leading-relaxed`} />
      </div>

      {sent ? (
        <div style={JET} className="w-full border border-primary-red/50 bg-[#0A0A0A] py-4 text-center text-sm uppercase tracking-widest text-white">
          MESSAGE SENT — WE&apos;LL GET BACK TO YOU.
          <span className="mt-1 block text-xs text-primary-red">SUPPORT: 2 DAYS · COLLABS: 3-5 DAYS</span>
        </div>
      ) : (
        <button
          type="submit"
          style={{ ...ANTON, backgroundColor: "#BC0100" }}
          className="w-full rounded-none py-4 text-base uppercase tracking-widest text-white transition-colors hover:!bg-[#930100]"
        >
          SEND MESSAGE →
        </button>
      )}
    </form>
  );
}