"use client";

import Image from "next/image";

const STACK_PRODUCTS = [
  {
    name: "DEMON BLOOD TEE",
    href: "/drop/demon-blood-tee",
    img: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-4.webp",
  },
  {
    name: "BLUE FLAME TEE",
    href: "/drop/blue-flame-tee",
    img: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-4.webp",
  },
  {
    name: "WILL OF THE SUN TEE",
    href: "/drop/will-of-the-sun-tee",
    img: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-4.webp",
  },
  {
    name: "WARRIOR SPIRIT TEE",
    href: "/drop/warrior-spirit-tee",
    img: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-5.webp",
  },
];

export default function DropShowcase() {
  return (
    <section id="drop-showcase" className="bg-white text-black">
      {/* Header */}
      <div className="px-[5%] md:px-[6%] pt-14 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[13px] font-jetbrains uppercase tracking-[0.2em] text-primary mb-3">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <h2 className="font-anton uppercase tracking-tight leading-none text-5xl md:text-7xl">
            SALE
          </h2>
        </div>
        <a
          href="/collection"
          className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-jetbrains font-bold uppercase tracking-[0.15em] border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
        >
          VIEW_ALL
        </a>
      </div>

      {/* Scroll stack: each card tracks one viewport-height, pinning
          in place while you scroll past it so the next card slides over */}
      <div className="scroll-stack-scroller bg-white">
        {STACK_PRODUCTS.map((p, i) => (
          <div
            key={p.name}
            className="scroll-stack-track bg-white"
            style={{ height: "100vh", position: "relative" }}
          >
            <div
              className="scroll-stack-card"
              style={{ position: "sticky", top: "12vh" }}
            >
              <a
                href={p.href}
                className="group block overflow-hidden border border-black/10 bg-white"
                style={{
                  borderTopWidth: "4px",
                  borderTopStyle: "solid",
                  borderTopColor: "#bc0100",
                  width: "1000px",
                  maxWidth: "calc(100% - 2rem)",
                  margin: "0 auto",
                  height: "min(800px, 74vh)",
                  position: "relative",
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={p.img}
                    alt={`ZENJI ${p.name} anime streetwear graphic`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1000px) 100vw, 1000px"
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 40%, transparent 70%)",
                  }}
                >
                  <p className="text-[12px] font-jetbrains uppercase tracking-[0.18em] text-[#bc0100] mb-2">
                    COLLECTION // THE_ORIGIN_DROP
                  </p>
                  <h3 className="font-anton uppercase text-white text-[32px] md:text-[40px] leading-none group-hover:text-[#bc0100] transition-colors">
                    {p.name}
                  </h3>
                  <span className="mt-3 text-[13px] font-jetbrains uppercase tracking-[0.15em] text-white border-b border-white/50 pb-1 inline-flex items-center gap-2 w-max group-hover:border-[#bc0100] group-hover:text-[#bc0100] transition-colors">
                    SHOP {p.name.replace(" TEE", "")} →
                  </span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
