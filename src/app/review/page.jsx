import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import ReviewsPanel from "@/components/review/ReviewsPanel";
import ReviewForm from "@/components/review/ReviewForm";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Reviews — ZENJI Anime Streetwear",
  description: "See what customers say about ZENJI anime streetwear. Authentic reviews from real buyers.",
};

const ANTON = { fontFamily: "var(--font-anton), sans-serif" };
const JET = { fontFamily: "var(--font-jetbrains), monospace" };

export default function ReviewPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="bg-black">
        <header className="border-b border-white/10 pb-8 pt-24">
          <div className="mx-auto max-w-container-max px-[5%] md:px-[6%]">
            <h1 style={ANTON} className="text-6xl uppercase tracking-widest text-white">
              REVIEWS
            </h1>
            <p style={{ ...JET, color: "#BC0100" }} className="mt-2 text-xs tracking-[0.3em]">
              WHAT THE COMMUNITY SAYS
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-container-max px-[5%] md:px-[6%]">
          <ReviewsPanel />
          <ReviewForm />
        </div>
      </main>
      <Footer />
    </>
  );
}