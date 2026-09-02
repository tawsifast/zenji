import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function LatestDrops() {
  return (
    <section id="latest-drops" className="bg-surface py-16 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="px-[5%] md:px-[6%] mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[13px] font-jetbrains uppercase tracking-[0.2em] text-primary mb-3">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <h2 className="font-anton uppercase tracking-tight leading-none text-5xl md:text-7xl">
            LATEST_DROPS
          </h2>
        </div>
        <Link
          href="/drop"
          className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-jetbrains font-bold uppercase tracking-[0.15em] border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
        >
          VIEW_ALL
        </Link>
      </div>

      {/* Horizontal scroller */}
      <div className="relative">
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-16"
          style={{
            background:
              "linear-gradient(to right, rgba(250,248,244,1) 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-16"
          style={{
            background:
              "linear-gradient(to left, rgba(250,248,244,1) 0%, transparent 100%)",
          }}
        />

        <div className="flex gap-4 md:gap-[1.125rem] overflow-x-auto snap-x snap-mandatory no-scrollbar px-[5%] md:px-[6%] pb-2 pt-1">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
