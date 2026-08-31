export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative h-[min(62vh,140vw)] w-full overflow-hidden bg-black md:h-[calc(100vh-40px)] md:min-h-[85vh]"
      style={{ marginTop: "-68px" }}
    >
      <div className="relative overflow-hidden w-full h-full">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://zenji.shop/hero-poster.webp"
        >
          <source src="https://zenji.shop/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute bottom-12 left-[6%] z-10 max-w-[90%] text-white">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full loading-pulse"
              style={{ backgroundColor: "#bc0100" }}
            />
            <span
              className="font-jetbrains text-[11px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "#bc0100" }}
            >
              <span className="hero-cursor" style={{ color: "#bc0100" }}>
                |
              </span>
            </span>
          </div>

          <h1
            className="font-anton uppercase leading-[0.85] tracking-tight text-white"
            style={{ fontSize: "clamp(52px, 8vw, 80px)" }}
          >
            WEAR YOUR
            <br />
            STORY
          </h1>

          <a
            href="/drop"
            className="mt-8 inline-flex items-center gap-3 rounded-none bg-[#bc0100] px-8 py-4 text-[16px] font-anton uppercase text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            SHOP THE DROP
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
