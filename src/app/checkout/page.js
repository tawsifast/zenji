import Splash from "@/components/Splash";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CheckoutClient from "./CheckoutClient";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };

export const metadata = {
  title: "Checkout — ZENJI",
  description: "Complete your ZENJI order.",
};

export default function CheckoutPage() {
  return (
    <>
      <Splash />
      <Marquee />
      <Nav />
      <main className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <h1
            style={ANTON}
            className="pb-2 pt-24 text-5xl uppercase tracking-widest text-black md:text-6xl"
          >
            CHECKOUT
          </h1>
          <p
            style={{ ...JET, color: "#4B5563" }}
            className="text-xs tracking-[0.3em]"
          >
            SECURE PAYMENT • AUSTRALIA-WIDE
          </p>
          <span
            aria-hidden="true"
            style={{ backgroundColor: "#BC0100" }}
            className="mb-12 mt-6 block h-px w-full"
          />
          <CheckoutClient />
        </div>
      </main>
      <Footer />
    </>
  );
}