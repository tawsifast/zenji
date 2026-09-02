import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

export const metadata = {
  title: "Collaboration | ZENJI",
  description:
    "ZENJI creator and brand collaborations. Coming soon — follow @zenji_.shop for the announcement.",
  robots: { index: false, follow: true },
};

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };

export default function CollaborationPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
        <h1 style={ANTON} className="text-[56px] uppercase leading-none md:text-[80px]">
          COMING SOON
        </h1>
        <p style={JET} className="mt-4 text-[12px] tracking-widest text-primary">
          THIS SECTOR IS RESTRICTED
        </p>
        <Link
          href="/"
          style={JET}
          className="mt-10 border border-white px-6 py-3 text-[12px] tracking-widest text-white transition-colors hover:border-primary hover:bg-primary"
        >
          RETURN_TO_BASE
        </Link>
      </main>
      <Footer />
    </>
  );
}