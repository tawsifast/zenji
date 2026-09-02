"use client";

import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import ProductCard from "@/components/shared/ProductCard";
import { useCart } from "@/components/shared/CartProvider";
import { PRODUCTS } from "@/data/products";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };
const RED = { color: "#BC0100" };

export default function WishlistPage() {
  const { wishlist } = useCart();
  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.slug));

  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="min-h-screen bg-white">
        <section className="bg-black text-white" style={{ padding: "120px 6% 60px" }}>
          <span style={{ ...JET, ...RED }} className="mb-4 block text-[10px] tracking-widest">
            SAVED // THIS DEVICE
          </span>
          <h1 style={ANTON} className="text-[48px] uppercase leading-none md:text-[72px]">
            WISHLIST
          </h1>
          <p style={IBM} className="mt-6 max-w-[52ch] text-[13px] text-white/40">
            Saved on this device only. Log in and these move to your account, so they follow you
            everywhere.
          </p>
          <a
            href="/login?next=/wishlist"
            style={JET}
            className="mt-6 inline-block border-b border-white pb-1 text-[11px] tracking-widest text-white transition-colors hover:border-primary hover:text-primary"
          >
            LOG IN TO KEEP THEM →
          </a>
        </section>

        <section style={{ padding: "48px 6% 80px" }}>
          {savedProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p style={ANTON} className="text-[24px] uppercase text-black">
                NO SAVED PIECES YET
              </p>
              <p style={JET} className="mt-3 text-[11px] uppercase tracking-widest text-black/40">
                TAP THE HEART ON ANY PIECE TO SAVE IT
              </p>
              <a
                href="/collection"
                style={JET}
                className="mt-8 inline-block min-h-[44px] border border-black px-6 py-3 text-[11px] uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
              >
                BROWSE THE COLLECTION →
              </a>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 md:gap-[1.125rem]">
              {savedProducts.map((p) => (
                <ProductCard
                  key={p.slug}
                  p={p}
                  className="block w-[44vw] sm:w-[30vw] md:w-[calc(25%-0.875rem)] flex-shrink-0"
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}