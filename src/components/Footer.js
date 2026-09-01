import Image from "next/image";

const SOCIALS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@zenji_.shop",
    className: "bg-white text-black border-white hover:bg-[#010101] hover:text-white hover:border-[#010101]",
    inline: {},
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zenji_.shop",
    className: "text-white border-transparent",
    inline: {
      background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    },
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/ZENJI/61592433253702/",
    className: "text-white border-transparent",
    inline: {
      background: "#1877F2",
    },
  },
];

const COLUMNS = [
  {
    title: "DROPS",
    links: [
      ["Home", "/"],
      ["Drop", "/drop"],
      ["Collection", "/collection"],
    ],
  },
  {
    title: "EXPLORE",
    links: [
      ["Lookbook", "/lookbook"],
      ["Our Story", "/our-story"],
      ["Collection", "/collection"],
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      ["TikTok", "https://www.tiktok.com/@zenji_.shop"],
      ["Instagram", "https://www.instagram.com/zenji_.shop"],
      ["Facebook", "https://www.facebook.com/people/ZENJI/61592433253702/"],
    ],
  },
  {
    title: "CONTACT",
    links: [
      ["FAQ", "/faq"],
      ["Review", "/review"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms", "/terms"],
      ["Help", "/faq"],
      ["Return Policy", "/return-policy"],
      ["Contact Us", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative flex min-h-screen flex-col bg-black text-white overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="font-anton uppercase text-center leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(120px, 24vw, 300px)",
          color: "rgba(255,255,255,0.04)",
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          lineHeight: 0.8,
        }}
      >
        ZENJI
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-[5%] md:px-[6%] pt-30 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-10">
          {/* Left: logo + tagline + socials */}
          <div>
            <Image
              src="https://zenji.shop/wm_logo.webp"
              alt="ZENJI anime streetwear brand logo"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <p className="mt-6 text-[15px] leading-relaxed text-white/60 font-ibm-plex max-w-xs">
              Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop
              limited. No restocks. Ever.
            </p>
            <p className="mt-8 text-[11px] font-jetbrains uppercase tracking-[0.2em] text-white/50 mb-4">
              FOLLOW THE LORE
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`min-h-[44px] px-5 inline-flex items-center justify-center border text-[11px] font-jetbrains font-bold uppercase tracking-widest transition-colors duration-200 ${s.className}`}
                  style={s.inline}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-jetbrains font-bold uppercase tracking-[0.25em] text-white/50 mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[13px] font-jetbrains text-white/70 hover:text-primary transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-auto pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-jetbrains">
          <p className="text-white/45">© 2026 ZENJI. All drops are final. No restocks. Ever.</p>
          <div className="flex items-center gap-5 text-white/45">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="/privacy-policy#cookies" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
          <p className="text-white/45">
            <span style={{ color: "#eab308" }}>●</span> Anime-inspired. Gamer-built.
            Community-owned.
          </p>
        </div>
      </div>
    </footer>
  );
}
