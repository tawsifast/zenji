export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative"
      style={{ height: "min(62vh, 140vw)", minHeight: "100%" }}
    >
      <div className="relative overflow-hidden w-full h-full">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://zenji.shop/hero-poster.webp"
        >
          <source src="https://zenji.shop/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="absolute bottom-[10%] left-[5%] md:left-[6%] text-white"
          style={{ maxWidth: "700px" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-block w-2 h-2 rounded-full bg-primary loading-pulse"
              style={{ backgroundColor: "#bc0100" }}
            />
            <p className="text-[13px] md:text-sm font-jetbrains uppercase tracking-[0.25em] text-white/80">
              WEAR YOUR STORY<span className="hero-cursor">|</span>
            </p>
          </div>

          <h1 className="font-anton uppercase leading-[0.9] tracking-tight text-white" style={{ fontSize: "clamp(52px, 8vw, 80px)" }}>
            WEAR YOUR
            <br />
            STORY
          </h1>

          <a
            href="/drop"
            className="mt-8 inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-sm font-jetbrains font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-black"
          >
            SHOP THE DROP
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
