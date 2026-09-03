import Image from "next/image";

export default function FourWorlds() {
  return (
    <section id="four-worlds" className="relative overflow-hidden bg-black text-white" style={{ height: "100vh" }}>
      <div className="flex h-full flex-col md:flex-row">
        {/* Image half */}
        <div className="relative h-1/2 w-full overflow-hidden md:h-full md:w-1/2">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/background_2.webp"
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-center"
              style={{ filter: "brightness(0.6) contrast(1.1)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, rgba(0,0,0,0.9) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)",
              }}
            />
          </div>
        </div>

        {/* Text half */}
        <div className="flex w-full flex-1 flex-col justify-center px-[8%] py-10 md:w-1/2 md:py-16">
          <div className="max-w-[440px]">
            <span
              className="block text-[10px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#bc0100" }}
            >
              ABOUT // ZENJI
            </span>
            <span
              aria-hidden="true"
              className="my-4 block h-px w-10"
              style={{ backgroundColor: "#bc0100" }}
            />
            <h2
              className="mb-8 text-[40px] uppercase leading-[0.85] text-white md:text-[56px]"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              <span className="block">BORN FROM THE</span>
              <span className="block">WARRIOR SPIRIT.</span>
            </h2>
            <p
              className="mb-4 text-[13px] leading-relaxed"
              style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.7)" }}
            >
              ZENJI began with one belief: what you wear should tell a story.
            </p>
            <p
              className="mb-4 text-[12px] leading-relaxed"
              style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.5)" }}
            >
              Inspired by samurai discipline, anime art and modern street culture, we create
              premium streetwear for those who choose their own path.
            </p>
            <p
              className="mb-6 text-[12px] leading-relaxed"
              style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.5)" }}
            >
              Every ZENJI piece combines Japanese-inspired artwork, powerful symbolism and
              oversized silhouettes to express courage, creativity and individuality.
            </p>
            <blockquote
              className="mb-6 border-l-2 pl-4 text-[13px] italic leading-relaxed"
              style={{
                fontFamily: "var(--font-ibm-plex), monospace",
                color: "rgba(255,255,255,0.6)",
                borderLeftColor: "#bc0100",
              }}
            >
              &quot;The warrior within refuses to fade into the crowd.&quot;
            </blockquote>
            <p
              className="mb-8 text-[10px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgba(255,255,255,0.6)" }}
            >
              For the dreamers. Fighters. Creators. Outsiders.
            </p>
            <a
              href="/collection"
              className="inline-block border-b border-white pb-1 text-[11px] uppercase tracking-widest text-white transition-colors hover:border-[#bc0100] hover:text-[#bc0100]"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              EXPLORE THE COLLECTION →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
