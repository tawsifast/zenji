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
      className="relative overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://zenji.shop/background_2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(6,6,6,0.55)" }}
      />

      {/* Ethos label + invisible image left (implicit via bg) */}
      <span className="sr-only">ZENJI</span>

      {/* Content */}
      <div className="relative z-10 px-[5%] md:px-[6%] py-20 md:py-32 md:pl-[46%] text-white">
        <p
          data-reveal
          className="a-label text-[13px] font-jetbrains uppercase tracking-[0.2em] text-primary mb-5"
        >
          MANIFESTO_001
        </p>

        <div
          data-reveal
          className="a-label w-12 h-[2px] bg-primary mb-8"
          style={{ backgroundColor: "#bc0100" }}
        />

        <h2
          data-reveal
          className="a-head font-anton uppercase tracking-tight leading-[0.95] text-5xl md:text-7xl mb-8 max-w-[520px]"
        >
          THE ZENJI <span className="text-primary">ETHOS</span>
        </h2>

        <p
          data-reveal
          className="a-sub max-w-[520px] text-[15px] md:text-base font-ibm-plex leading-relaxed text-white/70"
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
