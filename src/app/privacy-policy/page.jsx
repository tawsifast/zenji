import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };
const IBM = { fontFamily: "var(--font-ibm-plex), monospace" };

const SECTIONS = [
  {
    id: "information-we-collect",
    num: "01",
    title: "INFORMATION WE COLLECT",
    body: [
      "Name, email, shipping address and phone number when you place an order.",
      "Payment information, processed securely by Stripe - we never store card details.",
      "Browsing data, IP address and device type via cookies.",
      "Your email address if you join our waitlist or popup signup.",
      "Communications you send us.",
    ],
  },
  {
    id: "how-we-use-your-information",
    num: "02",
    title: "HOW WE USE YOUR INFORMATION",
    body: [
      "Process and fulfil your orders.",
      "Send order confirmations and shipping updates.",
      "Send marketing emails, only if you opt in.",
      "Improve our website and product offerings.",
      "Comply with legal obligations.",
      "Prevent fraud and protect security.",
    ],
  },
  {
    id: "sharing-your-information",
    num: "03",
    title: "SHARING YOUR INFORMATION",
    body: [
      "We do not sell your personal information.",
      "We share data only with: Stripe, for payment processing. Shipping carriers - Australia Post and CouriersPlease. Email service providers, for transactional emails. Analytics providers, including Google Analytics.",
      "All third parties are bound by confidentiality obligations.",
    ],
  },
  {
    id: "cookies",
    num: "04",
    title: "COOKIES",
    body: [
      "We use cookies to: Keep items in your cart. Analyse site traffic, via Google Analytics. Remember your preferences.",
      "You can disable cookies in your browser settings.",
      "Our splash screen and popup preferences are stored in localStorage.",
    ],
  },
  {
    id: "data-security",
    num: "05",
    title: "DATA SECURITY",
    body: [
      "We use SSL encryption on all pages.",
      "Payment data is handled by Stripe, which is PCI DSS Level 1 certified.",
      "We store data on secure servers and limit access to authorised personnel only.",
    ],
  },
  {
    id: "data-retention",
    num: "06",
    title: "DATA RETENTION",
    body: [
      "We retain order data for 7 years, as required by Australian tax law.",
      "Email marketing data is retained until you unsubscribe.",
      "You may request deletion of your account data at any time.",
    ],
  },
  {
    id: "your-rights",
    num: "07",
    title: "YOUR RIGHTS",
    body: [
      "Under the Australian Privacy Act, you have the right to:",
      "Access the personal information we hold about you. Correct inaccurate information. Request deletion of your data. Opt out of marketing communications at any time.",
      "Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.",
    ],
  },
  {
    id: "marketing-communications",
    num: "08",
    title: "MARKETING COMMUNICATIONS",
    body: [
      "We send marketing emails only with your consent, and every email includes an unsubscribe link.",
      "To opt out, click unsubscribe or email support@zenji.shop.",
    ],
  },
  {
    id: "third-party-links",
    num: "09",
    title: "THIRD PARTY LINKS",
    body: [
      "Our site may link to third-party sites, including Instagram and TikTok.",
      "We are not responsible for their privacy practices.",
    ],
  },
  {
    id: "childrens-privacy",
    num: "10",
    title: "CHILDREN'S PRIVACY",
    body: [
      "Our site is not directed at children under 13, and we do not knowingly collect data from children.",
    ],
  },
  {
    id: "changes-to-this-policy",
    num: "11",
    title: "CHANGES TO THIS POLICY",
    body: [
      "We may update this policy. Changes are posted on this page with an updated date - the version above was last revised in july 2026.",
      "Continued use of the site means you accept the current policy.",
    ],
  },
  {
    id: "contact-us",
    num: "12",
    title: "CONTACT US",
    body: [
      "Privacy enquiries: support@zenji.shop - use the subject line \"Privacy Enquiry\".",
      "We respond within 30 business days, as required by the Privacy Act.",
      "You may also contact the OAIC directly at www.oaic.gov.au.",
    ],
  },
];

export const metadata = {
  title: "Privacy Policy — ZENJI",
  description: "How ZENJI collects, uses and protects your personal information in accordance with the Australian Privacy Act 1988.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="bg-black pb-24 text-stark-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 style={ANTON} className="pb-2 pt-24 text-5xl uppercase tracking-widest text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p style={JET} className="text-xs tracking-[0.3em] text-primary-red">
            LAST UPDATED: JULY 2026
          </p>
          <span aria-hidden="true" style={{ backgroundColor: "#BC0100" }} className="mt-6 block h-px w-full" />

          <div style={IBM} className="mt-10 space-y-4 text-sm leading-relaxed text-gray-300">
            <p>ZENJI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates zenji.shop.</p>
            <p>
              This policy explains how we collect, use, disclose and protect your personal information in
              accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles
              (APPs).
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