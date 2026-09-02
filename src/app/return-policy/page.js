import Splash from "@/components/Splash";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

const SECTIONS = [
  {
    id: "the-short-version",
    num: "01",
    title: "THE SHORT VERSION",
    lists: [
      { type: "accepted", items: ["Accepted: 14 days to return unworn, unwashed items.", "Accepted: Faulty items: we cover return shipping."] },
      { type: "notaccepted", items: ["Not accepted: Sale items: final sale, no change-of-mind returns.", "Not accepted: Worn, washed or damaged items: not accepted."] },
    ],
  },
  {
    id: "eligibility",
    num: "02",
    title: "ELIGIBILITY",
    intro: "To qualify for a return:",
    list: [
      "The item must be returned within 14 days of the delivery date.",
      "The item must be unworn and unwashed.",
      "Original tags must still be attached.",
      "The item must be in its original packaging where possible.",
      "Proof of purchase is required - your order number or order email.",
    ],
    outro: "Not eligible for a change-of-mind return:",
    outroList: [
      "Items marked as final sale.",
      "Items that have been worn, washed or altered.",
      "Items damaged by customer misuse.",
      "Items returned after 14 days.",
    ],
  },
  {
    id: "how-to-return",
    num: "03",
    title: "HOW TO RETURN",
    steps: [
      {
        head: "Step 1 - email us.",
        body: "Write to support@zenji.shop with the subject RETURN - [Your Order Number]. Include photos of the item and your reason for returning it.",
      },
      {
        head: "Step 2 - wait for approval.",
        body: "We reply within 2 business days with the return address and instructions. Do not ship anything back before you have them.",
      },
      {
        head: "Step 3 - ship the item back.",
        body: "Pack it securely and use tracked shipping. Return shipping is paid by you, except on faulty or incorrect items.",
      },
      {
        head: "Step 4 - refund is processed.",
        body: "Within 5-10 business days of us receiving the item, back to your original payment method.",
      },
    ],
  },
  {
    id: "faulty-or-wrong-items",
    num: "04",
    title: "FAULTY OR WRONG ITEMS",
    list: [
      "Email support@zenji.shop within 7 days of delivery.",
      "Include your order number and clear photos of the fault.",
      "We will replace or refund the item, and we cover return shipping.",
    ],
    outro: "This is your right under the Australian Consumer Law, not a goodwill gesture.",
  },
  {
    id: "refunds",
    num: "05",
    title: "REFUNDS",
    list: [
      "Refunds are issued to the original payment method.",
      "Processing time: 5-10 business days after we receive the return.",
      "The original shipping fee is non-refundable.",
      "Return shipping is your cost, except on faulty or incorrect items.",
    ],
  },
  {
    id: "exchanges",
    num: "06",
    title: "EXCHANGES",
    body: [
      "We do not offer direct exchanges. Return your item, then place a new order in the correct size.",
      "Every drop is limited and there are no restocks, so we cannot hold stock while a return is in transit.",
    ],
  },
  {
    id: "australian-consumer-law",
    num: "07",
    title: "AUSTRALIAN CONSUMER LAW",
    body: [
      "Your statutory rights under the Australian Consumer Law are not affected by this policy. Our goods come with guarantees that cannot be excluded.",
      "Major fault: you choose a refund, a replacement or a repair.",
      "Minor fault: we may choose to repair, replace or refund.",
    ],
  },
  {
    id: "contact",
    num: "08",
    title: "CONTACT",
    body: ["Email: support@zenji.shop. Subject: RETURN - [Order Number]. Response time: within 2 business days."],
  },
];

export const metadata = {
  title: "Return Policy — ZENJI",
  description: "ZENJI's 14-day returns policy, refunds, exchanges and rights under the Australian Consumer Law.",
};

export default function ReturnPolicyPage() {
  return (
    <>
      <Splash />
      <Marquee />
      <Nav />
      <main className="bg-black pb-24 text-stark-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 style={ANTON} className="pb-2 pt-24 text-5xl uppercase tracking-widest text-white md:text-6xl">
            Return Policy
          </h1>
          <p style={JET} className="text-xs tracking-[0.3em] text-primary-red">
            NO DRAMA. JUST RULES.
          </p>
          <span aria-hidden="true" style={{ backgroundColor: "#BC0100" }} className="mt-6 block h-px w-full" />

          <div style={IBM} className="mt-10 space-y-4 text-sm leading-relaxed text-gray-300">
            <p>You have 14 days from delivery to return an unworn, unwashed item. Faulty or incorrect items are on us, including return shipping.</p>
            <p>
              This policy sits alongside our{" "}
              <a href="/terms" className="text-primary-red underline transition-all hover:no-underline">
                Terms &amp; Conditions
              </a>{" "}
              and does not limit your rights under the Australian Consumer Law.
            </p>
          </div>

          {SECTIONS.map((s) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id} style={{ ...ANTON, borderLeft: "3px solid #BC0100" }} className="mb-4 mt-12 pl-4 text-xl uppercase tracking-widest text-white">
                <span style={JET} className="mr-3 align-middle text-xs tracking-[0.25em] text-primary-red">
                  {s.num}
                </span>
                {s.title}
              </h2>

              {/* THE SHORT VERSION: accepted / not list */}
              {s.lists && (
                <div style={IBM} className="space-y-2 text-sm leading-relaxed text-gray-300">
                  {s.lists.map((grp) =>
                    grp.items.map((item, i) => (
                      <p key={i}>
                        {item.startsWith("Accepted") ? <span className="mr-2 text-green-500">✓</span> : <span className="mr-2 text-primary-red">✗</span>}
                        {item}
                      </p>
                    ))
                  )}
                </div>
              )}

              {/* steps */}
              {s.steps && (
                <div style={IBM} className="space-y-5 text-sm leading-relaxed text-gray-300">
                  {s.steps.map((st, i) => (
                    <div key={i}>
                      <p className="font-bold text-white">{st.head}</p>
                      <p className="mt-1">{st.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* intro + list + outro */}
              {s.intro && (
                <div style={IBM} className="text-sm leading-relaxed text-gray-300">
                  <p className="mb-3">{s.intro}</p>
                  <ul className="list-disc space-y-2 pl-5">
                    {s.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                  <p className="mt-4 mb-3">{s.outro}</p>
                  <ul className="list-disc space-y-2 pl-5">
                    {s.outroList.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* plain list */}
              {s.list && !s.intro && (
                <ul style={IBM} className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                  {s.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}

              {/* outro after plain list */}
              {s.outro && !s.outroList && (
                <p style={IBM} className="mt-4 text-sm leading-relaxed text-gray-300">
                  {s.outro}
                </p>
              )}

              {/* plain body */}
              {s.body && (
                <div style={IBM} className="space-y-4 text-sm leading-relaxed text-gray-300">
                  {s.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* CTA */}
          <div className="mt-16 border-t border-white/10 pt-10">
            <a href="mailto:support@zenji.shop" style={ANTON} className="inline-block text-2xl uppercase tracking-widest text-white transition-colors hover:text-primary-red">
              QUESTIONS? EMAIL SUPPORT@ZENJI.SHOP
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}