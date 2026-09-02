import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import WordReveal from "@/components/shared/WordReveal";
import CollectionGrid from "@/components/collection/CollectionGrid";
import NotifyMe from "@/components/collection/NotifyMe";
import Footer from "@/components/shared/Footer";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Shop Anime Graphic Tees Australia — ZENJI",
  description:
    "Browse 10 limited anime graphic tees from A$39.99, with selected pieces on sale at A$33.99. In stock, shipping Australia-wide.",
};

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

export default function CollectionPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white" style={{ padding: "120px 6% 80px" }}>
          <div className="relative z-10">
            <span style={JET} className="mb-4 block text-[10px] tracking-widest text-primary">
              THE_ORIGIN_DROP // COMPLETE ARCHIVE
            </span>
            <h1
              style={ANTON}
              className="text-[56px] uppercase leading-none md:text-[96px]"
            >
              <WordReveal words={[["ANIME", "GRAPHIC", "TEES", "—"], ["THE", "FULL", "COLLECTION"]]} />
            </h1>
            <p style={IBM} className="mt-6 text-[14px] text-white/40">
              Every drop. Every arc. Documented.
            </p>
          </div>

          <span
            aria-hidden="true"
            style={{ ...ANTON, color: "rgba(255,255,255,0.04)" }}
            className="pointer-events-none absolute right-[6%] top-1/2 z-0 hidden -translate-y-1/2 select-none text-[200px] leading-none md:block"
          >
            {PRODUCTS.length}
          </span>

          <div
            className="relative z-10 mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:justify-between"
            style={JET}
          >
            <span className="text-[11px] text-white/30">
              {PRODUCTS.length} PIECES // THE_ORIGIN_DROP // EST_2024
            </span>
            <span className="text-[11px] text-white/30">AUSTRALIA-WIDE SHIPPING</span>
          </div>
        </section>

        <CollectionGrid />

        {/* CTA */}
        <section className="bg-black text-center text-white" style={{ padding: "80px 6%" }}>
          <h2 style={ANTON} className="mb-4 text-[25px] uppercase md:text-[64px]">
            <WordReveal words={[["MORE", "DROPS", "COMING"]]} />
          </h2>
          <p style={JET} className="mb-8 text-[12px] tracking-widest text-primary">
            AWAKENING // REDACTED
          </p>
          <NotifyMe />
        </section>
      </main>
      <Footer />
    </>
  );
}
