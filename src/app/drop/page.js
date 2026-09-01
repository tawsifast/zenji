import Splash from "@/components/Splash";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import DropHero from "@/components/DropHero";
import DropDivider from "@/components/DropDivider";
import DropCountdown from "@/components/DropCountdown";
import DropWaitlist from "@/components/DropWaitlist";
import DropCollection from "@/components/DropCollection";
import DropCTA from "@/components/DropCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Awakening Drop — ZENJI Anime Streetwear | Sept 2026",
  description:
    "The Awakening drop is coming. Join the waitlist for early access and pre-drop discount. No restocks. Ever.",
};

export default function DropPage() {
  return (
    <>
      <Splash />
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
