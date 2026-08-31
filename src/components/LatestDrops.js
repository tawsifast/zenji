import Image from "next/image";

const PRODUCTS = [
  {
    name: "BLUE FLAME TEE",
    href: "/drop/blue-flame-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-2.webp",
    price: 39.99,
    sale: 33.99,
  },
  {
    name: "BUSHIDO TEE",
    href: "/drop/bushido-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-2.webp",
    price: 39.99,
  },
  {
    name: "DEMON BLOOD TEE",
    href: "/drop/demon-blood-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-2.webp",
    price: 39.99,
    sale: 33.99,
  },
  {
    name: "DOMAIN EXPANSION TEE",
    href: "/drop/domain-expansion-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-2.webp",
    price: 39.99,
  },
  {
    name: "FREE SOUL TEE",
    href: "/drop/free-soul-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Free-soul-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Free-soul-2.webp",
    price: 39.99,
  },
  {
    name: "LIMITLESS TEE",
    href: "/drop/limitless-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Limitless-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Limitless-2.webp",
    price: 39.99,
  },
  {
    name: "PARADISE SPIRIT TEE",
    href: "/drop/paradise-spirit-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Paradise-spirit-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Paradise-spirit-2.webp",
    price: 39.99,
  },
  {
    name: "WARRIOR SPIRIT TEE",
    href: "/drop/warrior-spirit-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-2.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-4.webp",
    price: 39.99,
    sale: 33.99,
  },
  {
    name: "WATER BREATHING TEE",
    href: "/drop/water-breathing-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-2.webp",
    price: 39.99,
  },
  {
    name: "WILL OF THE SUN TEE",
    href: "/drop/will-of-the-sun-tee",
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-2.webp",
    price: 39.99,
    sale: 33.99,
  },
];

function ProductCard({ p }) {
  return (
    <a
      href={p.href}
      className="group block w-[82vw] sm:w-[46vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] flex-shrink-0 snap-start"
    >
      <div className="relative aspect-[3/4] overflow-hidden border border-black bg-surface">
        {p.sale && (
          <span
            className="absolute font-jetbrains font-bold text-[11px] uppercase tracking-widest text-white z-10"
            style={{
              top: 22,
              left: -30,
              width: 120,
              transform: "rotate(-45deg)",
              backgroundColor: "#bc0100",
              padding: "5px 0",
              textAlign: "center",
            }}
          >
            SALE 15% OFF
          </span>
        )}

        {/* Front image */}
        <Image
          src={p.front}
          alt={`ZENJI ${p.name} anime streetwear, front`}
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 768px) 46vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
          loading="lazy"
        />
        {/* Back image */}
        <Image
          src={p.back}
          alt={`ZENJI ${p.name} anime streetwear, back`}
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 768px) 46vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Quick view bar */}
        <div className="absolute inset-x-0 bottom-0 bg-black text-white text-sm font-jetbrains font-bold uppercase tracking-[0.15em] py-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          QUICK VIEW →
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 border-t border-black mt-4">
        <h3 className="font-anton uppercase text-[18px] leading-none truncate">{p.name}</h3>
        <div className="mt-2 flex items-baseline gap-3">
          {p.sale && (
            <span className="font-jetbrains text-sm text-gray-400 line-through">
              A${p.price.toFixed(2)}
            </span>
          )}
          <span
            className="font-anton text-2xl leading-none"
            style={{ color: p.sale ? "#bc0100" : "inherit" }}
          >
            A${(p.sale ?? p.price).toFixed(2)}
          </span>
        </div>
      </div>
    </a>
  );
}

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
        <a
          href="/drop"
          className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-jetbrains font-bold uppercase tracking-[0.15em] border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
        >
          VIEW_ALL
        </a>
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
