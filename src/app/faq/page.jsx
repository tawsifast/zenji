import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import FaqAccordion from "@/components/faq/FaqAccordion";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "FAQ — ZENJI Anime Streetwear Australia",
  description: "Answers to common questions about ZENJI orders, shipping, sizing, and returns.",
};

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };

export default function FaqPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="bg-black text-white">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <h1
            style={ANTON}
            className="pb-4 pt-24 text-6xl uppercase tracking-widest text-white"
          >
            FAQ
          </h1>
          <p style={{ ...JET, color: "#BC0100" }} className="text-xs tracking-[0.3em]">
            EVERYTHING YOU NEED TO KNOW
          </p>
          <span aria-hidden="true" style={{ backgroundColor: "#BC0100" }} className="mt-6 block h-px w-full" />

          <FaqAccordion />

          <div className="mt-24 border-t border-white/10 pt-16 text-center">
            <h2 style={ANTON} className="text-2xl uppercase tracking-widest text-white">
              STILL HAVE QUESTIONS?
            </h2>
            <a
              href="mailto:support@zenji.shop"
              style={JET}
              className="mt-4 inline-block text-xs tracking-widest text-primary transition-colors hover:text-white"
            >
              EMAIL US AT SUPPORT@ZENJI.SHOP
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}