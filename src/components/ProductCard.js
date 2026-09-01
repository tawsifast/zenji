import Image from "next/image";

export default function ProductCard({
  p,
  className = "block w-[82vw] sm:w-[46vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] flex-shrink-0 snap-start",
  sizes = "(max-width: 640px) 82vw, (max-width: 768px) 46vw, (max-width: 1024px) 33vw, 25vw",
}) {
  const front = p.images ? p.images.front : p.front;
  const back = p.images ? p.images.back : p.back;
  const soldOut = p.inStock === false;

  return (
    <a href={p.href} className={`group ${className}`}>
      <div className="flex h-full flex-col overflow-hidden border border-black bg-surface">
        <div className="group flex aspect-[3/4] flex-col overflow-hidden">
          {/* Image area */}
          <div className="relative flex-1 overflow-hidden bg-surface">
            {p.sale && (
              <span
                className="absolute font-jetbrains font-bold uppercase z-20"
                style={{
                  top: 22,
                  left: -30,
                  width: 120,
                  transform: "rotate(-45deg)",
                  backgroundColor: "#bc0100",
                  color: "#fff",
                  padding: "4px 0",
                  textAlign: "center",
                  fontSize: 9,
                  letterSpacing: "0.5px",
                }}
              >
                SALE 15% OFF
              </span>
            )}

            {soldOut && (
              <span
                className="absolute right-0 top-0 z-20 bg-black px-2.5 py-1 font-jetbrains text-[10px] uppercase tracking-widest text-white"
                style={{ fontFamily: "var(--font-jetbrains), monospace", backgroundColor: "#000" }}
              >
                SOLD OUT
              </span>
            )}

            {/* Front image */}
            <Image
              src={front}
              alt={`ZENJI ${p.name} anime streetwear, front`}
              fill
              sizes={sizes}
              className="object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
              loading="lazy"
            />
            {/* Back image */}
            <Image
              src={back}
              alt={`ZENJI ${p.name} anime streetwear, back`}
              fill
              sizes={sizes}
              className="object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />

            {/* Quick view bar */}
            <div
              className="absolute bottom-0 left-0 z-20 flex h-11 w-full translate-y-full items-center justify-center transition-transform duration-300 group-hover:translate-y-0"
              style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
            >
              <span className="font-jetbrains text-[11px] uppercase tracking-widest text-white">QUICK VIEW →</span>
            </div>
          </div>

          {/* Info */}
          <div className="border-t border-black bg-surface px-4 py-4">
            <span
              className="block truncate text-sm uppercase tracking-widest text-black"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              {p.name}
            </span>
            <div className="mt-2 flex flex-col gap-1">
              {p.sale && (
                <div className="flex items-center gap-3">
                  <span className="font-jetbrains text-xs tracking-wider text-gray-400 line-through">
                    A${p.price.toFixed(2)}
                  </span>
                </div>
              )}
              <span
                className="text-2xl leading-none tracking-wide"
                style={{ fontFamily: "var(--font-anton), sans-serif", color: p.sale ? "#bc0100" : "inherit" }}
              >
                A${(p.sale ?? p.price).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
