import ProductCard from "@/components/shared/ProductCard";
import { SALE_PRODUCTS } from "@/data/products";

export default function DropCollection() {
  return (
    <section className="bg-white" style={{ padding: "80px 6%" }}>
      <div>
        <p
          className="mb-4 text-xs uppercase"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#bc0100", letterSpacing: "0.3em" }}
        >
          THE_ORIGIN_DROP // STILL AVAILABLE
        </p>
        <h2 className="mb-2 text-[36px] uppercase text-black md:text-[48px]" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
          WHILE YOU WAIT.
        </h2>
        <p className="text-[13px] text-gray-500" style={{ fontFamily: "var(--font-ibm-plex), monospace" }}>
          Shop The Origin Drop, our current collection.
        </p>
      </div>

      <section className="relative mt-12">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24"
          style={{ background: "linear-gradient(to right, rgba(250,248,244,1) 0%, rgba(250,248,244,0) 100%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24"
          style={{ background: "linear-gradient(to left, rgba(250,248,244,1) 0%, rgba(250,248,244,0) 100%)" }}
        />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[6%] pb-6 [justify-content:safe_center] md:gap-6 no-scrollbar">
          {SALE_PRODUCTS.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      <div className="mt-12 text-left">
        <a
          href="/collection"
          className="inline-block border-b border-black pb-1 text-[11px] tracking-widest text-black transition-colors hover:border-primary-red hover:text-primary-red"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          VIEW FULL COLLECTION →
        </a>
      </div>
    </section>
  );
}
