import Image from "next/image";
import WordReveal from "@/components/WordReveal";

export default function DropHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: "70vh", minHeight: "460px", marginTop: "-68px" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://zenji.shop/bg_2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.25) contrast(1.1)" }}
          priority
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[6%] text-center">
        <span
          className="mb-6 flex items-center gap-3 text-[10px] uppercase"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#bc0100", letterSpacing: "0.4em" }}
        >
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ backgroundColor: "#bc0100" }}
          />
          INCOMING TRANSMISSION
        </span>

        <h1 className="uppercase text-white" style={{ fontFamily: "var(--font-anton), sans-serif", lineHeight: 0.8 }}>
          <WordReveal
            words={[["AWAKENING"], ["IS", "COMING."]]}
            lineClass={["text-white", "text-[#bc0100]"]}
            className="text-[56px] leading-[0.8] md:text-[120px]"
          />
        </h1>

        <p
          className="mt-6 text-[14px]"
          style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.5)" }}
        >
          The next chapter begins. Are you ready?
        </p>
        <p
          className="mt-4 text-[11px] tracking-widest"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgba(255,255,255,0.3)" }}
        >
          DROP DATE: 01 SEPT 2026
        </p>
      </div>
    </section>
  );
}
