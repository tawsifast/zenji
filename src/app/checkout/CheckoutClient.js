"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartProvider";
import StripePaymentLook from "@/components/checkout/StripePaymentLook";
import {
  AU_STATES,
  DELIVERY_ESTIMATE,
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_FLAT,
  fmtMoney,
} from "@/data/shop";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

const INPUT_CLS =
  "w-full rounded-[8px] border border-black/20 bg-white p-3 text-sm text-black placeholder:text-black/40 focus:border-black focus:outline-none";
const ERROR_CLS = "!border-primary-red";
const LABEL_CLS = "mb-2 block text-[10px] uppercase tracking-widest text-gray-600";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POSTCODE_RE = /^\d{4}$/;

const INITIAL_DELIVERY = {
  email: "",
  subscribe: true,
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
  phone: "",
};

const INITIAL_BILLING = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
};

function StepTitle({ n, children }) {
  return (
    <p
      style={{
        ...JET,
        borderLeft: "3px solid #BC0100",
        paddingLeft: 12,
        fontSize: 14,
        letterSpacing: "0.2em",
      }}
      className="mb-4 uppercase text-primary-red"
    >
      {n} — {children}
    </p>
  );
}

function FieldError({ msg }) {
  return msg ? (
    <p style={JET} role="alert" className="mt-1 text-[10px] text-primary-red">
      {msg}
    </p>
  ) : null;
}

function OrderSummary({ promo, onApplyPromo }) {
  const { items, subtotal, shipping, total } = useCart();
  const [code, setCode] = useState("");

  const discount = promo ? promo.discount : 0;
  const finalTotal = Math.max(0, total - discount);

  return (
    <aside className="border border-black/10 bg-[#F5F5F5] p-6 lg:sticky lg:top-24">
      <p style={JET} className="text-xs tracking-widest text-primary-red">
        ORDER SUMMARY
      </p>
      <ul className="mt-5 flex flex-col gap-4">
        {items.map((it) => (
          <li key={it.key} className="flex gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-surface-warm">
              <Image
                src={it.image}
                alt={`${it.name} anime graphic tee — ZENJI`}
                fill
                sizes="56px"
                className="border border-black/10 object-cover object-top"
              />
            </div>
            <div className="flex flex-grow items-start justify-between gap-3">
              <div>
                <p style={IBM} className="text-sm leading-tight text-black">
                  {it.name}
                </p>
                <p style={JET} className="mt-1 text-xs text-gray-600">
                  SIZE {it.size} · QTY {it.quantity}
                </p>
              </div>
              <span className="flex items-baseline gap-2 whitespace-nowrap">
                {it.onSale && it.originalPrice > it.price && (
                  <span style={JET} className="text-xs text-gray-500 line-through">
                    {fmtMoney(it.originalPrice * it.quantity)}
                  </span>
                )}
                <span style={IBM} className="text-sm text-black">
                  {fmtMoney(it.price * it.quantity)}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-black/10 pt-4">
        <label htmlFor="co-promo" style={JET} className="mb-2 block text-[10px] uppercase tracking-widest text-gray-600">
          DISCOUNT CODE
        </label>
        {promo && promo.applied ? (
          <div className="flex items-center justify-between gap-3 rounded-[8px] border border-primary-red/40 bg-primary-red/5 p-3">
            <span style={JET} className="text-xs tracking-widest text-primary-red">
              {promo.applied} APPLIED
            </span>
            <button
              type="button"
              onClick={onApplyPromo({ clear: true })}
              style={JET}
              className="text-[10px] tracking-widest text-gray-600 underline hover:text-black"
            >
              REMOVE
            </button>
          </div>
        ) : (
          <div>
            <div className="flex gap-2">
              <input
                id="co-promo"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="ENTER CODE"
                aria-invalid={Boolean(promo && promo.error)}
                className={`${INPUT_CLS} ${promo && promo.error ? ERROR_CLS : ""} flex-1`}
              />
              <button
                type="button"
                disabled={!code.trim()}
                onClick={() => onApplyPromo({ apply: code.trim() })}
                style={JET}
                className="shrink-0 rounded-[8px] border border-black bg-black px-4 text-xs uppercase tracking-widest text-white transition-colors hover:border-primary-red hover:bg-primary-red disabled:opacity-40"
              >
                APPLY
              </button>
            </div>
            {promo && promo.error && (
              <p style={JET} role="alert" className="mt-1 text-[10px] text-primary-red">
                {promo.error}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 border-t border-black/10 pt-4">
        <div className="flex items-center justify-between">
          <span style={JET} className="text-xs text-gray-600">
            SUBTOTAL
          </span>
          <span style={IBM} className="text-sm text-black">
            {fmtMoney(subtotal)}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span style={JET} className="text-xs text-gray-600">
            SHIPPING
          </span>
          {shipping === 0 ? (
            <span style={JET} className="text-xs text-[#EAB308]">
              FREE
            </span>
          ) : (
            <span style={IBM} className="text-sm text-black">
              {fmtMoney(shipping)}
            </span>
          )}
        </div>
        {discount > 0 && (
          <div className="mt-2 flex items-center justify-between">
            <span style={JET} className="text-xs text-primary-red">
              DISCOUNT {promo && promo.applied ? `(${promo.applied})` : ""}
            </span>
            <span style={IBM} className="text-sm text-primary-red">
              −{fmtMoney(discount)}
            </span>
          </div>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
          <span style={JET} className="text-xs tracking-widest text-black">
            TOTAL
          </span>
          <span style={ANTON} className="text-xl text-black">
            {fmtMoney(finalTotal)}
          </span>
        </div>
        <p style={JET} className="mt-2 text-[10px] text-gray-500">
          GST INCLUDED · AU
        </p>
      </div>
    </aside>
  );
}

export default function CheckoutClient() {
  const { items, subtotal, shipping, total, hydrated, clearCart } = useCart();
  const [delivery, setDelivery] = useState(INITIAL_DELIVERY);
  const [billing, setBilling] = useState(INITIAL_BILLING);
  const [errors, setErrors] = useState({});
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [promo, setPromo] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [error, setError] = useState("");
  const [hoverPay, setHoverPay] = useState(false);

  const setDeliveryField = (key, value) => {
    setDelivery((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const setBillingField = (key, value) =>
    setBilling((prev) => ({ ...prev, [key]: value }));

  const handlePromo = ({ apply, clear }) => {
    if (clear) {
      setPromo(null);
      return;
    }
    if (apply === "ZENJI10") {
      const discount = Math.round(total * 10) / 100;
      setPromo({ applied: apply, discount, error: "" });
    } else {
      setPromo({ applied: null, discount: 0, error: "That code is not valid." });
    }
  };

  const discount = promo ? promo.discount : 0;
  const finalTotal = Math.max(0, total - discount);
  const shippingFree = shipping === 0;

  const validateDelivery = () => {
    const next = {};
    if (!EMAIL_RE.test(delivery.email)) next.email = "Enter a valid email address.";
    if (!delivery.firstName.trim()) next.firstName = "Required.";
    if (!delivery.lastName.trim()) next.lastName = "Required.";
    if (!delivery.address1.trim()) next.address1 = "Required.";
    if (!delivery.city.trim()) next.city = "Required.";
    if (!AU_STATES.includes(delivery.state)) next.state = "Select a state.";
    if (!POSTCODE_RE.test(delivery.postcode)) next.postcode = "4 digits.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validateDelivery()) return;
    setProcessing(true);
    setError("");
    window.setTimeout(() => {
      setProcessing(false);
      setPlaced(true);
      clearCart();
    }, 1200);
  };

  if (!hydrated) {
    return (
      <p style={JET} className="py-24 text-center text-xs tracking-widest text-gray-500">
        LOADING CART…
      </p>
    );
  }

  if (items.length === 0 && !placed) {
    return (
      <div className="py-24 text-center">
        <p style={ANTON} className="text-2xl uppercase tracking-widest text-black">
          NOTHING TO CHECK OUT
        </p>
        <p style={JET} className="mt-2 text-xs tracking-[0.3em] text-primary-red">
          THE ARC AWAITS.
        </p>
        <Link
          href="/collection"
          style={ANTON}
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[8px] bg-primary-red px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-[#EB0000]"
        >
          SHOP COLLECTION →
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="py-24 text-center">
        <p style={ANTON} className="text-3xl uppercase tracking-widest text-black">
          ORDER CONFIRMED
        </p>
        <p style={JET} className="mt-3 text-xs tracking-[0.3em] text-primary-red">
          WELCOME TO THE LORE.
        </p>
        <p style={IBM} className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-gray-600">
          Your order has been placed. This is a design clone — no payment was
          taken and nothing will be shipped. Thank you for browsing the Arc.
        </p>
        <Link
          href="/"
          style={ANTON}
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[8px] border border-black px-6 py-3 text-sm uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
        >
          RETURN TO BASE →
        </Link>
      </div>
    );
  }

  const inputCls = (key) =>
    `${INPUT_CLS}${errors[key] ? ` ${ERROR_CLS}` : ""}`;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
      <form onSubmit={submit} style={IBM} noValidate>
        <fieldset className="mb-10">
          <StepTitle n="01">DELIVERY ADDRESS</StepTitle>
          <label htmlFor="co-email" style={JET} className={LABEL_CLS}>
            EMAIL
          </label>
          <input
            id="co-email"
            type="email"
            autoComplete="email"
            value={delivery.email}
            onChange={(e) => setDeliveryField("email", e.target.value)}
            placeholder="YOU@EMAIL.COM"
            aria-invalid={Boolean(errors.email)}
            className={inputCls("email")}
          />
          <FieldError msg={errors.email} />
          <label className="mt-4 flex items-start gap-3">
            <input
              type="checkbox"
              checked={delivery.subscribe}
              onChange={(e) => setDeliveryField("subscribe", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 !rounded-[4px] border border-black/20 accent-primary-red"
            />
            <span style={IBM} className="text-xs text-gray-600">
              Subscribe to ZENJI drops. Limited runs, no restocks — you hear first.
            </span>
          </label>
        </fieldset>

        <fieldset className="mb-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="co-first" style={JET} className={LABEL_CLS}>
                FIRST NAME
              </label>
              <input
                id="co-first"
                autoComplete="given-name"
                value={delivery.firstName}
                onChange={(e) => setDeliveryField("firstName", e.target.value)}
                aria-invalid={Boolean(errors.firstName)}
                className={inputCls("firstName")}
              />
              <FieldError msg={errors.firstName} />
            </div>
            <div>
              <label htmlFor="co-last" style={JET} className={LABEL_CLS}>
                LAST NAME
              </label>
              <input
                id="co-last"
                autoComplete="family-name"
                value={delivery.lastName}
                onChange={(e) => setDeliveryField("lastName", e.target.value)}
                aria-invalid={Boolean(errors.lastName)}
                className={inputCls("lastName")}
              />
              <FieldError msg={errors.lastName} />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="co-addr1" style={JET} className={LABEL_CLS}>
              ADDRESS LINE 1
            </label>
            <input
              id="co-addr1"
              autoComplete="address-line1"
              value={delivery.address1}
              onChange={(e) => setDeliveryField("address1", e.target.value)}
              placeholder="STREET ADDRESS"
              aria-invalid={Boolean(errors.address1)}
              className={inputCls("address1")}
            />
            <FieldError msg={errors.address1} />
          </div>
          <div className="mt-4">
            <label htmlFor="co-addr2" style={JET} className={LABEL_CLS}>
              ADDRESS LINE 2 (OPTIONAL)
            </label>
            <input
              id="co-addr2"
              autoComplete="address-line2"
              value={delivery.address2}
              onChange={(e) => setDeliveryField("address2", e.target.value)}
              placeholder="UNIT / LEVEL"
              className={INPUT_CLS}
            />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label htmlFor="co-city" style={JET} className={LABEL_CLS}>
                CITY / SUBURB
              </label>
              <input
                id="co-city"
                autoComplete="address-level2"
                value={delivery.city}
                onChange={(e) => setDeliveryField("city", e.target.value)}
                aria-invalid={Boolean(errors.city)}
                className={inputCls("city")}
              />
              <FieldError msg={errors.city} />
            </div>
            <div>
              <label htmlFor="co-postcode" style={JET} className={LABEL_CLS}>
                POSTCODE
              </label>
              <input
                id="co-postcode"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={4}
                value={delivery.postcode}
                onChange={(e) => setDeliveryField("postcode", e.target.value)}
                placeholder="2000"
                aria-invalid={Boolean(errors.postcode)}
                className={inputCls("postcode")}
              />
              <FieldError msg={errors.postcode} />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="co-state" style={JET} className={LABEL_CLS}>
                STATE
              </label>
              <select
                id="co-state"
                autoComplete="address-level1"
                value={delivery.state}
                onChange={(e) => setDeliveryField("state", e.target.value)}
                aria-invalid={Boolean(errors.state)}
                className={`${inputCls("state")} appearance-none`}
              >
                <option value="" disabled>
                  SELECT STATE
                </option>
                {AU_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
              <FieldError msg={errors.state} />
            </div>
            <div>
              <label htmlFor="co-country" style={JET} className={LABEL_CLS}>
                COUNTRY
              </label>
              <input
                id="co-country"
                value="AUSTRALIA"
                disabled
                className={`${INPUT_CLS} text-gray-500`}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="co-phone" style={JET} className={LABEL_CLS}>
              PHONE (OPTIONAL)
            </label>
            <input
              id="co-phone"
              type="tel"
              autoComplete="tel"
              value={delivery.phone}
              onChange={(e) => setDeliveryField("phone", e.target.value)}
              placeholder="FOR DELIVERY UPDATES"
              className={INPUT_CLS}
            />
          </div>
        </fieldset>

        <fieldset className="mb-10">
          <StepTitle n="02">SHIPPING METHOD</StepTitle>
          <label className="flex items-center justify-between rounded-[8px] border border-black/20 p-4">
            <span className="flex items-center gap-3">
              <input
                type="radio"
                name="shippingMethod"
                checked
                readOnly
                className="h-4 w-4 accent-primary-red"
              />
              <span>
                <span style={JET} className="block text-xs tracking-widest text-black">
                  {shippingFree ? "FREE SHIPPING" : "STANDARD SHIPPING"}
                </span>
                <span style={IBM} className="mt-1 block text-xs text-gray-600">
                  {DELIVERY_ESTIMATE} · Australia-wide
                </span>
              </span>
            </span>
            <span style={IBM} className="text-sm text-black">
              {fmtMoney(shipping)}
            </span>
          </label>
          {!shippingFree && (
            <p style={JET} className="mt-2 text-[10px] text-gray-500">
              {fmtMoney(FREE_SHIPPING_THRESHOLD - subtotal)} MORE FOR FREE SHIPPING
            </p>
          )}
        </fieldset>

        <fieldset className="mb-10">
          <StepTitle n="03">PAYMENT</StepTitle>
          <StripePaymentLook />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <p style={IBM} className="text-xs text-gray-500">
              Secured by Stripe. Card details never touch our servers.
            </p>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MASTERCARD", "AMEX", "AFTERPAY"].map((b) => (
                <span key={b} style={{ ...JET, fontSize: 9, padding: "2px 6px", border: "1px solid #ddd", borderRadius: 2 }} className="tracking-widest text-gray-500">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-10">
          <StepTitle n="04">BILLING ADDRESS</StepTitle>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={(e) => setSameAsShipping(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 !rounded-[4px] border border-black/20 accent-primary-red"
            />
            <span style={IBM} className="text-xs text-gray-600">
              Same as shipping address
            </span>
          </label>
          {!sameAsShipping && (
            <div className="mt-5 border-l-2 border-primary-red/30 pl-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="bill-first" style={JET} className={LABEL_CLS}>
                    FIRST NAME
                  </label>
                  <input id="bill-first" autoComplete="billing given-name" value={billing.firstName} onChange={(e) => setBillingField("firstName", e.target.value)} className={INPUT_CLS} />
                </div>
                <div>
                  <label htmlFor="bill-last" style={JET} className={LABEL_CLS}>
                    LAST NAME
                  </label>
                  <input id="bill-last" autoComplete="billing family-name" value={billing.lastName} onChange={(e) => setBillingField("lastName", e.target.value)} className={INPUT_CLS} />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="bill-addr1" style={JET} className={LABEL_CLS}>
                  ADDRESS LINE 1
                </label>
                <input id="bill-addr1" autoComplete="billing address-line1" value={billing.address1} onChange={(e) => setBillingField("address1", e.target.value)} placeholder="STREET ADDRESS" className={INPUT_CLS} />
              </div>
              <div className="mt-4">
                <label htmlFor="bill-addr2" style={JET} className={LABEL_CLS}>
                  ADDRESS LINE 2 (OPTIONAL)
                </label>
                <input id="bill-addr2" autoComplete="billing address-line2" value={billing.address2} onChange={(e) => setBillingField("address2", e.target.value)} placeholder="UNIT / LEVEL" className={INPUT_CLS} />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label htmlFor="bill-city" style={JET} className={LABEL_CLS}>
                    CITY / SUBURB
                  </label>
                  <input id="bill-city" autoComplete="billing address-level2" value={billing.city} onChange={(e) => setBillingField("city", e.target.value)} className={INPUT_CLS} />
                </div>
                <div>
                  <label htmlFor="bill-postcode" style={JET} className={LABEL_CLS}>
                    POSTCODE
                  </label>
                  <input id="bill-postcode" inputMode="numeric" maxLength={4} value={billing.postcode} onChange={(e) => setBillingField("postcode", e.target.value)} placeholder="2000" className={INPUT_CLS} />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="bill-state" style={JET} className={LABEL_CLS}>
                  STATE
                </label>
                <select id="bill-state" autoComplete="billing address-level1" value={billing.state} onChange={(e) => setBillingField("state", e.target.value)} className={`${INPUT_CLS} appearance-none`}>
                  <option value="" disabled>
                    SELECT STATE
                  </option>
                  {AU_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </fieldset>

        {error && (
          <p style={IBM} role="alert" className="mb-4 rounded-[8px] border border-primary-red p-3 text-xs leading-relaxed text-primary-red">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={processing}
          onMouseEnter={() => setHoverPay(true)}
          onMouseLeave={() => setHoverPay(false)}
          style={{ ...ANTON, width: "100%", background: hoverPay ? "#EB0000" : "#BC0100", padding: "18px 24px", fontSize: 16, letterSpacing: 2 }}
          className="flex w-full items-center justify-center gap-3 rounded-[8px] uppercase text-white transition-colors disabled:opacity-60"
        >
          {processing ? (
            <>
              <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              PROCESSING…
            </>
          ) : (
            <>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              PLACE ORDER — {fmtMoney(finalTotal)} →
            </>
          )}
        </button>
        <p style={IBM} className="mt-3 text-center text-xs text-gray-500">
          By placing this order you accept our{" "}
          <a href="/terms" className="text-primary-red underline hover:no-underline">
            terms
          </a>{" "}
          and{" "}
          <a href="/return-policy" className="text-primary-red underline hover:no-underline">
            return policy
          </a>
          .
        </p>
      </form>

      <OrderSummary promo={promo} onApplyPromo={handlePromo} />
    </div>
  );
}