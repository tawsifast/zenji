"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = node.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((t) => t.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Ethos() {
  const ref = useReveal();

  return (
    <section
      id="ethos-section"
      ref={ref}
      aria-label="The ZENJI Ethos"
      className="relative overflow-hidden bg-black"
      style={{ height: "100vh", width: "100%" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://zenji.shop/background_2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.75) contrast(1.05)" }}
          priority
        />
      </div>
      {/* Overlay: horizontal gradient darker on left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.03) 100%)",
        }}
      />

      {/* Content: vertically centered, anchored left ~6% */}
      <div
        className="absolute z-[2]"
        style={{ left: "6%", top: "50%", transform: "translateY(-50%)", maxWidth: "380px" }}
      >
        <span
          data-reveal
          className="a-label block text-[10px] uppercase"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#bc0100", letterSpacing: "0.3em" }}
        >
          MANIFESTO_001
        </span>

        <div
          data-reveal
          className="a-label"
          aria-hidden="true"
          style={{ width: "40px", height: "1px", background: "#bc0100", margin: "16px 0" }}
        />

        <h2
          data-reveal
          className="a-head text-[80px] uppercase leading-[0.85]"
          style={{ fontFamily: "var(--font-anton), sans-serif", margin: 0 }}
        >
          <span className="block text-white">THE</span>
          <span className="block text-[#bc0100]">ZENJI</span>
          <span className="block text-white">ETHOS</span>
        </h2>

        <p
          data-reveal
          className="a-sub text-[13px] leading-[1.8]"
          style={{
            fontFamily: "var(--font-ibm-plex), monospace",
            color: "hsla(0,0%,100%,0.6)",
            maxWidth: "420px",
            marginTop: "32px",
            marginBottom: "40px",
          }}
        >
          We exist at the intersection of technical precision and cultural expression.
          Our garments are engineered for those navigating an increasingly fragmented
          world, built from Japanese craftsmanship, anime culture and modern Australian
          streetwear.
        </p>
      </div>
    </section>
  );
}
