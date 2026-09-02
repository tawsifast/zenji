import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/contact/ContactForm";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

export const metadata = {
  title: "Contact — ZENJI",
  description: "Get in touch with ZENJI — support, collabs, press and general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="bg-black pb-24 text-stark-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1
            style={ANTON}
            className="pb-2 pt-24 text-5xl uppercase tracking-widest text-white md:text-6xl"
          >
            CONTACT
          </h1>
          <p style={JET} className="text-xs tracking-[0.3em] text-primary-red">
            WE READ EVERY MESSAGE.
          </p>
          <span aria-hidden="true" style={{ backgroundColor: "#BC0100" }} className="mt-6 block h-px w-full" />

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {/* LEFT */}
            <div className="space-y-6">
              <section
                className="rounded-none border border-white/10 bg-[#0A0A0A] p-6 transition-colors duration-200 hover:border-[#BC0100]/50"
                aria-labelledby="ct-support"
              >
                <p id="ct-support" style={JET} className="text-xs tracking-widest text-primary-red">
                  <span aria-hidden="true" className="mr-2">?</span>SUPPORT
                </p>
                <p style={ANTON} className="mt-3 text-lg uppercase tracking-wide text-white">
                  support@zenji.shop
                </p>
                <p style={IBM} className="mt-2 text-sm text-gray-400">
                  Orders, returns, sizing questions
                </p>
                <p style={JET} className="mt-3 text-xs text-gray-500">
                  RESPONSE: 2 BUSINESS DAYS
                </p>
                <a
                  href="mailto:support@zenji.shop"
                  style={{ ...ANTON, backgroundColor: "#BC0100" }}
                  className="mt-5 inline-flex min-h-[44px] items-center rounded-none px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:!bg-[#930100]"
                >
                  EMAIL US →
                </a>
              </section>

              <section
                className="rounded-none border border-white/10 bg-[#0A0A0A] p-6 transition-colors duration-200 hover:border-[#BC0100]/50"
                aria-labelledby="ct-collabs"
              >
                <p id="ct-collabs" style={JET} className="text-xs tracking-widest text-primary-red">
                  <span aria-hidden="true" className="mr-2">?</span>COLLABS &amp; PRESS
                </p>
                <p style={ANTON} className="mt-3 text-lg uppercase tracking-wide text-white">
                  collabs@zenji.shop
                </p>
                <p style={IBM} className="mt-2 text-sm text-gray-400">
                  Brand deals, creator partnerships, press enquiries
                </p>
                <p style={JET} className="mt-3 text-xs text-gray-500">
                  RESPONSE: 3-5 BUSINESS DAYS
                </p>
                <a
                  href="mailto:collabs@zenji.shop"
                  style={ANTON}
                  className="mt-5 inline-flex min-h-[44px] items-center rounded-none border border-white px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                >
                  GET IN TOUCH →
                </a>
              </section>

              <section
                className="rounded-none border border-white/10 bg-[#0A0A0A] p-6 transition-colors duration-200 hover:border-[#BC0100]/50"
                aria-labelledby="ct-social"
              >
                <p id="ct-social" style={JET} className="text-xs tracking-widest text-primary-red">
                  FOLLOW THE LORE
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    { label: "INSTAGRAM", value: "@zenji_.shop", href: "https://www.instagram.com/zenji_.shop?igsh=a3ppYnA3YnJqMHk%3D" },
                    { label: "TIKTOK", value: "@zenji_.shop", href: "https://www.tiktok.com/@zenji_.shop" },
                    { label: "FACEBOOK", value: "ZENJI", href: "https://www.facebook.com/people/ZENJI/61592433253702/" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={IBM}
                        className="inline-flex min-h-[44px] items-center gap-3 text-sm text-stark-white transition-colors hover:text-primary-red"
                      >
                        <span style={JET} className="text-xs text-gray-500">
                          {s.label}
                        </span>
                        {s.value}
                      </a>
                    </li>
                  ))}
                </ul>
                <p style={IBM} className="mt-3 text-sm text-gray-400">
                  DMs open on Instagram
                </p>
              </section>
            </div>

            {/* RIGHT: FORM */}
            <div>
              <h2 style={ANTON} className="mb-6 text-2xl uppercase tracking-widest text-white">
                SEND A MESSAGE
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* BEFORE YOU EMAIL */}
          <div className="mt-20 border-t border-white/10 pt-10">
            <p style={JET} className="text-xs tracking-widest text-white">
              BEFORE YOU EMAIL -
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { label: "FAQ →", href: "/faq" },
                { label: "RETURN POLICY →", href: "/return-policy" },
                { label: "SIZE GUIDE →", href: "/faq" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={IBM}
                  className="inline-flex min-h-[44px] items-center rounded-none border border-white/20 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:support@zenji.shop?subject=TRACK%20ORDER%20%E2%80%94%20%5BOrder%20Number%5D"
                style={IBM}
                className="inline-flex min-h-[44px] items-center rounded-none border border-white/20 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-white hover:text-black"
              >
                TRACK ORDER →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}