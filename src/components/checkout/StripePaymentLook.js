"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { fmtMoney } from "@/data/shop";

const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

const METHODS = [
  { id: "card", label: "Credit / Debit Card", available: true },
  { id: "afterpay", label: "Afterpay", available: true },
  { id: "klarna", label: "Klarna", available: true },
  { id: "zip", label: "Zip — Flexible payments", available: true },
  { id: "paypal", label: "PayPal", available: false },
];

const FIELD_CLS =
  "w-full rounded-[6px] border border-black/20 bg-white px-3 py-3 text-sm text-black placeholder:text-black/30 focus:border-black focus:outline-none";

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg width="26" height="17" viewBox="0 0 26 17">
      <rect width="26" height="17" rx="2.5" fill="#1A1F71" />
      <text x="13" y="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="bold" fontStyle="italic" fill="#ffffff">
        VISA
      </text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg width="26" height="17" viewBox="0 0 26 17">
      <rect width="26" height="17" rx="2.5" fill="#ffffff" stroke="#e0e0e0" strokeWidth="0.5" />
      <circle cx="10.5" cy="8.5" r="5" fill="#EB001B" />
      <circle cx="15.5" cy="8.5" r="5" fill="#F79E1B" fillOpacity="0.9" />
      <path d="M13 4.2a5 5 0 0 1 0 8.6 5 5 0 0 1 0-8.6z" fill="#FF5F00" />
    </svg>
  );
}

function AmexIcon() {
  return (
    <svg width="26" height="17" viewBox="0 0 26 17">
      <rect width="26" height="17" rx="2.5" fill="#2E77BC" />
      <text x="13" y="11.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="bold" fill="#ffffff">
        AMEX
      </text>
    </svg>
  );
}

function CardPanel() {
  const [showLink, setShowLink] = useState(true);
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <div className="px-4 pb-4">
      {showLink && (
        <div className="mb-3 rounded-[8px] border border-black/10 bg-white px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <span className="mt-[3px]"><LockIcon /></span>
              <div>
                <p style={IBM} className="text-[13px] font-semibold text-black">
                  Secure, fast checkout with Link
                </p>
                <p style={IBM} className="mt-1 text-[12px] leading-relaxed text-gray-600">
                  Securely pay with your saved info, or create a Link account for faster checkout next time.
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setShowLink(false)}
              className="shrink-0 opacity-60 hover:opacity-100"
            >
              <CloseIcon />
            </button>
          </div>

          <label style={IBM} className="mt-3 block text-[12px] font-medium text-black/80">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            className={`mt-1 w-full rounded-[6px] border ${
              emailFocused ? "border-[#BC0100] ring-1 ring-[#BC0100]" : "border-[#BC0100]/70"
            } bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/30 focus:outline-none`}
          />

          <button
            type="button"
            style={IBM}
            className="mt-2 flex w-full items-center gap-1.5 border-t border-black/5 pt-2 text-[13px] text-black/30"
          >
            <ChevronIcon />
            link
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <label style={IBM} className="mb-1 block text-[12px] font-medium text-black/80">
            Card number
          </label>
          <div className="flex items-center rounded-[6px] border border-black/20 bg-white pr-3 focus-within:border-black">
            <input
              type="text"
              inputMode="numeric"
              aria-label="Card number"
              placeholder="1234 1234 1234 1234"
              autoComplete="cc-number"
              className="w-full flex-1 bg-transparent px-3 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none"
            />
            <div className="flex shrink-0 items-center gap-1">
              <VisaIcon />
              <MastercardIcon />
              <AmexIcon />
            </div>
          </div>
        </div>

        <div>
          <label style={IBM} className="mb-1 block text-[12px] font-medium text-black/80">
            Expiration date
          </label>
          <input
            type="text"
            inputMode="numeric"
            aria-label="Expiration date"
            placeholder="MM / YY"
            autoComplete="cc-exp"
            className={FIELD_CLS}
          />
        </div>

        <div>
          <label style={IBM} className="mb-1 block text-[12px] font-medium text-black/80">
            Security code
          </label>
          <div className="flex items-center rounded-[6px] border border-black/20 bg-white pr-3 focus-within:border-black">
            <input
              type="text"
              inputMode="numeric"
              aria-label="Security code"
              placeholder="CVC"
              autoComplete="cc-csc"
              className="w-full flex-1 bg-transparent px-3 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none"
            />
            <svg width="18" height="14" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.4" className="shrink-0 text-black/40">
              <rect x="1" y="1" width="22" height="16" rx="2" />
              <path d="M1 6h22" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <label style={IBM} className="mb-1 block text-[12px] font-medium text-black/80">
          Country
        </label>
        <select
          defaultValue="Bangladesh"
          className={`${FIELD_CLS} appearance-none bg-[right_0.75rem_center] bg-no-repeat pr-8`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          }}
        >
          <option>Bangladesh</option>
          <option>Australia</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
        </select>
      </div>
    </div>
  );
}

function BnplNote({ brand, accent, stacks }) {
  const { total } = useCart();
  return (
    <div className="px-4 pb-4">
      <div className="flex items-center justify-between gap-4 rounded-[8px] border border-black/10 bg-white px-4 py-3">
        <p style={IBM} className="text-xs leading-relaxed text-gray-600">
          {stacks} — {fmtMoney(total / stacks)} every fortnight. Nothing today.
        </p>
        <span
          style={{ ...JET, fontSize: 9, letterSpacing: 1, padding: "2px 6px", border: `1px solid ${accent}`, borderRadius: 2, color: accent, whiteSpace: "nowrap" }}
        >
          PART OF ORDER
        </span>
      </div>
    </div>
  );
}

export default function StripePaymentLook() {
  const [active, setActive] = useState("card");

  const panelFor = (id) => {
    switch (id) {
      case "card":
        return <CardPanel />;
      case "afterpay":
        return <BnplNote brand="Afterpay" accent="#00A3BF" stacks={4} />;
      case "klarna":
        return <BnplNote brand="Klarna" accent="#FFB3C7" stacks={3} />;
      case "zip":
        return <BnplNote brand="Zip — Flexible payments" accent="#009AFF" stacks={4} />;
      default:
        return null;
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Payment method"
      style={{ border: "1px solid #EFD9D9", borderRadius: 8, overflow: "hidden"}}
      
    >
      {METHODS.map((m, i) => {
        const isActive = active === m.id;
        return (
          <div
            key={m.id}
            style={{
              borderLeft: isActive ? "3px solid #BC0100" : "3px solid transparent",
              background: isActive ? "rgba(188,1,0,0.02)" : "#ffffff",
              borderTop: i === 0 ? "none" : "1px solid #EFD9D9",
            }}
          >
            <button
              type="button"
              role="radio"
              aria-checked={isActive}
              disabled={!m.available}
              onClick={() => m.available && setActive(m.id)}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
              style={{ opacity: m.available ? 1 : 0.45, cursor: m.available ? "pointer" : "not-allowed" }}
            >
              <span className="flex items-center gap-3">
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                  style={{ borderColor: isActive ? "#BC0100" : "#999999", borderWidth: isActive ? 5 : 1.5 }}
                />
                <span style={IBM} className="text-sm text-black">
                  {m.label}
                </span>
              </span>
              {!m.available && (
                <span
                  style={{ ...JET, fontSize: 9, letterSpacing: 1, padding: "2px 6px", border: "1px solid #ddd", borderRadius: 2, color: "#999999", whiteSpace: "nowrap" }}
                >
                  COMING SOON
                </span>
              )}
            </button>
            {isActive && panelFor(m.id)}
          </div>
        );
      })}
    </div>
  );
}