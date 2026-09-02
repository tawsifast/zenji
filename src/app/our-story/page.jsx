import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import WordReveal from "@/components/shared/WordReveal";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Our Story — ZENJI Anime Streetwear Australia",
  description:
    "The vision behind Australia's darkest anime streetwear brand. Born from bushido and neo-tokyo culture.",
};

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };
const RED = { color: "#BC0100" };

const HERO_LINES = [
  ["ANIME", "STREETWEAR", "AUSTRALIA", "—"],
  ["BORN", "FROM", "THE"],
  ["WARRIOR", "SPIRIT."],
];

const TAGLINE_LINES = [
  ["Wear", "your", "story.", "Wear", "your", "spirit.", "Wear", "ZENJI."],
];

const EYEBROW_LINES = [["ABOUT", "//", "ZENJI"]];

const P1_LINES = [
  ["ZENJI", "began", "with", "one", "belief:", "what", "you", "wear", "should", "tell", "a", "story."],
];

const P2_LINES = [
  [
    "Inspired",
    "by",
    "samurai",
    "discipline,",
    "anime",
    "art",
    "and",
    "modern",
    "street",
    "culture,",
    "we",
    "create",
    "premium",
    "streetwear",
    "for",
    "those",
    "who",
    "choose",
    "their",
    "own",
    "path.",
  ],
];

const P3_LINES = [
  [
    "Every",
    "ZENJI",
    "piece",
    "combines",
    "Japanese-inspired",
    "artwork,",
    "powerful",
    "symbolism",
    "and",
    "oversized",
    "silhouettes",
    "to",
    "express",
    "courage,",
    "creativity",
    "and",
    "individuality.",
  ],
];

const QUOTE_LINES = [
  [
    "ZENJI",
    "is",
    "more",
    "than",
    "a",
    "name",
    "on",
    "a",
    "shirt.",
    "It",
    "represents",
    "the",
    "warrior",
    "within,",
    "the",
    "part",
    "of",
    "us",
    "that",
    "keeps",
    "moving",
    "forward,",
    "stays",
    "true",
    "to",
    "itself",
    "and",
    "refuses",
    "to",
    "fade",
    "into",
    "the",
    "crowd.",
  ],
];

const CLOSING_LINES = [
  [
    "We",
    "design",
    "for",
    "the",
    "dreamers,",
    "fighters,",
    "creators",
    "and",
    "outsiders",
    "shaping",
    "their",
    "own",
    "future.",
  ],
];

const FACTS = [
  ["What ZENJI is", "ZENJI is an Australian anime streetwear brand."],
  ["Founded", "ZENJI was founded in 2024."],
  [
    "What we make",
    "ZENJI makes limited-edition anime-inspired graphic tees in 100% heavyweight 240gsm cotton.",
  ],
  [
    "Shipping",
    "ZENJI ships Australia-wide, with free shipping on orders over A$100 and standard delivery in 5-10 business days.",
  ],
  [
    "Restocks",
    "ZENJI products are limited edition. There are no restocks, ever — once a piece sells out it is gone for good.",
  ],
  ["Pricing", "ZENJI tees are A$39.99, with selected pieces on sale at A$33.99."],
  ["Influences", "ZENJI draws on samurai discipline, Japanese iconography and modern anime art."],
  [
    "Based in",
    "ZENJI is based in Australia and ships to every Australian state and territory, including Sydney, Melbourne, Brisbane, Perth and Adelaide.",
  ],
  [
    "Anime inspiration",
    "ZENJI designs are inspired by series including Jujutsu Kaisen, Demon Slayer, Naruto, One Piece and Dragon Ball, alongside original samurai artwork. Every design is ZENJI's own — no artwork is licensed from a studio.",
  ],
  [
    "Next drop",
    "The Origin Drop is in stock and shipping now, with selected pieces on sale at 15% off.",
  ],
];

export default function OurStoryPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="bg-black">
        <section className="px-[5%] py-24 md:px-[6%]">
          <div className="mx-auto max-w-[720px]">
            <span style={JET} className="block text-[0.7rem] tracking-widest text-primary">
              <WordReveal className="word-reveal-wrap" words={EYEBROW_LINES} />
            </span>

            <span
              aria-hidden="true"
              style={{ backgroundColor: "#BC0100" }}
              className="my-4 block h-px w-10"
            />

            <h1
              style={ANTON}
              className="mb-10 text-[51px] uppercase leading-none text-white md:text-[83px]"
            >
              <WordReveal className="word-reveal-wrap" words={HERO_LINES} />
            </h1>

            <div>
              <p style={IBM} className="mb-6 text-[0.9rem] leading-relaxed text-white/70">
                <WordReveal className="word-reveal-wrap" words={P1_LINES} />
              </p>
              <p style={IBM} className="mb-6 text-[0.9rem] leading-relaxed text-white/70">
                <WordReveal className="word-reveal-wrap" words={P2_LINES} />
              </p>
              <p style={IBM} className="mb-6 text-[0.9rem] leading-relaxed text-white/70">
                <WordReveal className="word-reveal-wrap" words={P3_LINES} />
              </p>
            </div>

            <blockquote
              style={IBM}
              className="my-10 border-l-2 border-primary pl-6 text-[0.95rem] italic leading-relaxed text-white/60"
            >
              <WordReveal className="word-reveal-wrap" words={QUOTE_LINES} />
            </blockquote>

            <div>
              <p style={IBM} className="mb-10 text-[0.9rem] leading-relaxed text-white/70">
                <WordReveal className="word-reveal-wrap" words={CLOSING_LINES} />
              </p>
            </div>

            <p
              style={ANTON}
              className="mb-12 text-[31px] uppercase leading-none text-white md:text-[40px]"
            >
              <WordReveal className="word-reveal-wrap" words={TAGLINE_LINES} />
            </p>

            <p className="">
              <span
                style={JET}
                className="mb-8 block text-[0.65rem] uppercase tracking-widest text-white/35"
              >
                For the dreamers. Fighters. Creators. Outsiders.
              </span>
            </p>

            <a
              tabIndex="0"
              href="/collection"
              style={JET}
              className="inline-block border-b border-white pb-1 text-[0.75rem] tracking-widest text-white transition-colors hover:border-primary hover:text-primary"
            >
              EXPLORE THE COLLECTION →
            </a>

            <section aria-labelledby="zenji-facts" className="mt-16 border-t border-white/10 pt-10">
              <h2
                id="zenji-facts"
                style={ANTON}
                className="mb-6 text-[24px] uppercase tracking-wide text-white md:text-[30px]"
              >
                About ZENJI
              </h2>
              <dl style={IBM} className="space-y-4 text-[0.85rem] leading-relaxed text-white/70">
                {FACTS.map(([label, value]) => (
                  <div key={label}>
                    <dt
                      style={{ ...JET, ...RED }}
                      className="mb-1 text-[0.6rem] uppercase tracking-[0.25em]"
                    >
                      {label}
                    </dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}