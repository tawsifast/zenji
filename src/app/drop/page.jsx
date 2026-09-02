import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import DropHero from "@/components/drop/DropHero";
import DropDivider from "@/components/drop/DropDivider";
import DropCountdown from "@/components/drop/DropCountdown";
import DropWaitlist from "@/components/drop/DropWaitlist";
import DropCollection from "@/components/drop/DropCollection";
import DropCTA from "@/components/drop/DropCTA";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Awakening Drop — ZENJI Anime Streetwear | Sept 2026",
  description:
    "The Awakening drop is coming. Join the waitlist for early access and pre-drop discount. No restocks. Ever.",
};

export default function DropPage() {
  return (
    <>
      
      <Marquee />
      <Nav />
      <main className="bg-white">
        <DropHero />
        <DropDivider />
        <DropCountdown />
        <DropWaitlist />
        <DropDivider />
        <DropCollection />
        <DropDivider />
        <DropCTA />
      </main>
      <Footer />
    </>
  );
}
