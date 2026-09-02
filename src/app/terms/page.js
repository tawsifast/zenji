import Splash from "@/components/Splash";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

const SECTIONS = [
  {
    id: "about-zenji",
    num: "01",
    title: "ABOUT ZENJI",
    body: [
      <>
        ZENJI is an Australian anime-inspired streetwear brand operating at zenji.shop. Contact:{" "}
        <a href="mailto:support@zenji.shop" className="text-primary-red underline transition-all hover:no-underline">
          support@zenji.shop
        </a>
        .
      </>,
    ],
  },
  {
    id: "using-our-website",
    num: "02",
    title: "USING OUR WEBSITE",
    body: [
      <>
        You must be 18 or over to purchase, or have parental consent. You agree not to misuse, hack or
        disrupt our website. We reserve the right to refuse service to anyone.
      </>,
      <>All content on zenji.shop is owned by ZENJI. Do not copy, reproduce or distribute our designs or content.</>,
    ],
  },
  {
    id: "products-pricing",
    num: "03",
    title: "PRODUCTS & PRICING",
    body: [
      <>All prices are in Australian Dollars (AUD) and include GST.</>,
      <>Prices are subject to change without notice. Product images are representative - minor colour variations may occur.</>,
      <>All products are limited edition. There are no restocks. We reserve the right to limit quantities.</>,
    ],
  },
  {
    id: "orders-payment",
    num: "04",
    title: "ORDERS & PAYMENT",
    body: [
      <>Orders are confirmed by email after payment.</>,
      <>We accept Visa, Mastercard, American Express, Apple Pay and Google Pay, via Stripe.</>,
      <>Payment is processed securely by Stripe.</>,
      <>Order confirmation does not guarantee stock availability. We reserve the right to cancel orders and issue full refunds.</>,
    ],
  },
  {
    id: "shipping",
    num: "05",
    title: "SHIPPING",
    body: [
      <>We ship Australia-wide only. No international shipping currently.</>,
      <>Free shipping on orders over A$100. Standard shipping: A$9.99 flat rate.</>,
      <>Estimated delivery: 3-7 business days after dispatch.</>,
      <>We are not responsible for delays caused by Australia Post or couriers. Risk passes to you upon dispatch.</>,
    ],
  },
  {
    id: "returns-refunds",
    num: "06",
    title: "RETURNS & REFUNDS",
    body: [
      <>Returns are accepted within 14 days of delivery. Items must be unworn and unwashed, with tags attached.</>,
      <>Sale items cannot be returned for change of mind.</>,
      <>To start a return, email support@zenji.shop with your order number and photos.</>,
      <>Refunds are processed within 5-10 business days of us receiving the return.</>,
      <>Original shipping costs are non-refundable. Return shipping is the customer&apos;s responsibility.</>,
      <>We comply with the Australian Consumer Law (ACL). Your statutory rights apply.</>,
    ],
  },
  {
    id: "faulty-incorrect",
    num: "07",
    title: "FAULTY OR INCORRECT ITEMS",
    body: [
      <>If you receive a faulty or wrong item:</>,
      <>Email support@zenji.shop within 7 days of delivery. Include your order number and clear photos. We will replace or refund the item at our cost.</>,
      <>This does not affect your rights under the Australian Consumer Law.</>,
    ],
  },
  {
    id: "intellectual-property",
    num: "08",
    title: "INTELLECTUAL PROPERTY",
    body: [
      <>All ZENJI designs, logos, artwork and content are our property.</>,
      <>Anime character artwork is licensed for commercial use.</>,
      <>You may not reproduce, copy or sell ZENJI designs. Buying a ZENJI product does not transfer any intellectual property rights.</>,
    ],
  },
  {
    id: "limitation-of-liability",
    num: "09",
    title: "LIMITATION OF LIABILITY",
    body: [
      <>To the extent permitted by Australian law:</>,
      <>We are not liable for indirect or consequential loss.</>,
      <>Our liability is limited to the value of your order.</>,
      <>We do not guarantee uninterrupted access to zenji.shop.</>,
      <>Your rights under the Australian Consumer Law are not excluded.</>,
    ],
  },
  {
    id: "privacy",
    num: "10",
    title: "PRIVACY",
    body: [
      <>
        Your personal data is handled in accordance with our{" "}
        <a href="/privacy-policy" className="text-primary-red underline transition-all hover:no-underline">
          Privacy Policy
        </a>
        .
      </>,
    ],
  },
  {
    id: "changes-to-terms",
    num: "11",
    title: "CHANGES TO TERMS",
    body: [
      <>We may update these terms at any time.</>,
      <>Continued use of zenji.shop means you accept the updated terms. Check this page regularly.</>,
    ],
  },
  {
    id: "disputes",
    num: "12",
    title: "DISPUTES",
    body: [
      <>Contact us first at support@zenji.shop. We aim to resolve disputes within 14 days.</>,
      <>These terms are governed by the laws of New South Wales, Australia. The courts of New South Wales have exclusive jurisdiction.</>,
    ],
  },
  {
    id: "australian-consumer-law",
    num: "13",
    title: "AUSTRALIAN CONSUMER LAW",
    body: [
      <>Nothing in these terms excludes, restricts or modifies your rights under the Australian Consumer Law.</>,
      <>Our goods come with guarantees that cannot be excluded.</>,
    ],
  },
  {
    id: "contact",
    num: "14",
    title: "CONTACT",
    body: [
      <>
        Email: support@zenji.shop. Response time: 2 business days.
      </>,
    ],
  },
];

export const metadata = {
  title: "Terms & Conditions — ZENJI",
  description: "The terms and conditions governing use of zenji.shop and purchases of ZENJI products.",
};

export default function TermsPage() {
  return (
    <>
      <Splash />
      <Marquee />
      <Nav />
      <main className="bg-black pb-24 text-stark-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1
            style={ANTON}
            className="pb-2 pt-24 text-5xl uppercase tracking-widest text-white md:text-6xl"
          >
            Terms &amp; Conditions
          </h1>
          <p style={JET} className="text-xs tracking-[0.3em] text-primary-red">
            EFFECTIVE: JULY 2026
          </p>
          <span aria-hidden="true" style={{ backgroundColor: "#BC0100" }} className="mt-6 block h-px w-full" />

          <div style={IBM} className="mt-10 space-y-4 text-sm leading-relaxed text-gray-300">
            <p>
              By accessing zenji.shop or placing an order, you agree to these Terms &amp; Conditions. Read
              them carefully.
            </p>
            <p>These terms are governed by the laws of New South Wales, Australia.</p>
          </div>

          {SECTIONS.map((s) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2
                id={s.id}
                style={{ ...ANTON, borderLeft: "3px solid #BC0100" }}
                className="mb-4 mt-12 pl-4 text-xl uppercase tracking-widest text-white"
              >
                <span style={JET} className="mr-3 align-middle text-xs tracking-[0.25em] text-primary-red">
                  {s.num}
                </span>
                {s.title}
              </h2>
              <div style={IBM} className="space-y-4 text-sm leading-relaxed text-gray-300">
                {s.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
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