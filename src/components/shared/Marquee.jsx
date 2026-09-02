const ITEMS = [
  "NEW DROP: BLUE FLAME TEE NOW AVAILABLE",
  "LIMITED STOCK",
  "THE_ORIGIN_DROP COLLECTION LIVE",
  "FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$100",
];

export default function Marquee() {
  // Two identical halves so the -50% translate loops seamlessly
  const row = [...ITEMS, ...ITEMS];
  const content = (
    <div className="flex shrink-0 items-center">
      {row.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center">
          <span className="px-6 whitespace-nowrap text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-white">
            {item}
          </span>
          <span className="text-white/80">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative z-40 h-10 overflow-hidden bg-primary flex items-center"
      style={{
        backgroundColor: "#bc0100",
      }}
    >
      <div className="marquee-track items-center">
        {content}
        {content}
      </div>
    </div>
  );
}
