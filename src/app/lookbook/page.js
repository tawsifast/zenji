import Splash from "@/components/Splash";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import WordReveal from "@/components/WordReveal";
import LookbookGrid from "@/components/LookbookGrid";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Lookbook — ZENJI Neo Tokyo Streetwear",
  description: "See the full ZENJI editorial for The Origin Drop. Neo-tokyo anime streetwear from Australia.",
};

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

export default function LookbookPage() {
  return (
    <>
      <Splash />
      <Marquee />
      <Nav />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white" style={{ padding: "120px 6% 80px" }}>
          <div className="relative z-10">
            <span style={JET} className="mb-4 block text-[10px] tracking-widest text-primary">
              THE_ORIGIN_DROP // EDITORIAL
            </span>
            <h1 style={ANTON} className="text-[64px] uppercase leading-none md:text-[120px]">
              <WordReveal words={[["ANIME", "STREETWEAR", "-"], ["LOOK"], ["BOOK"]]} />
            </h1>
            <p style={IBM} className="mt-6 text-[14px] text-white/40">
              The Origin Drop, The Full Visual Archive
            </p>
          </div>

          <span
            aria-hidden="true"
            style={{ ...ANTON, color: "rgba(255,255,255,0.03)" }}
            className="pointer-events-none absolute right-[6%] top-1/2 z-0 hidden -translate-y-1/2 select-none text-[200px] leading-none md:block"
          >
            2024
          </span>

          <div
            className="relative z-10 mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:justify-between"
            style={JET}
          >
            <span className="text-[11px] text-white/30">{PRODUCTS.length} PIECES // THE_ORIGIN_DROP</span>
            <span className="text-[11px] text-white/30">ANIME STREETWEAR // AUSTRALIA</span>
          </div>
        </section>

        <LookbookGrid />

        {/* CTA */}
        <section className="bg-black text-center text-white" style={{ padding: "80px 6%" }}>
          <h2 style={ANTON} className="mb-4 text-[40px] uppercase md:text-[64px]">
            <WordReveal words={[["SHOP", "THE", "COLLECTION"]]} />
          </h2>
          <p style={IBM} className="mb-8 text-[14px] text-white/40">
            Every piece from The Origin Drop, limited stock.
          </p>
          <a
            href="/collection"
            style={{ ...ANTON, backgroundColor: "#bc0100" }}
            className="notify-cta inline-block px-12 py-4 text-[16px] uppercase text-white"
          >
            SHOP NOW
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
