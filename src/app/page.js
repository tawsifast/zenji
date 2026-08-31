import Splash from "@/components/Splash";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FourWorlds from "@/components/FourWorlds";
import DropShowcase from "@/components/DropShowcase";
import LatestDrops from "@/components/LatestDrops";
import Ethos from "@/components/Ethos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Splash />
      <Marquee />
      <Nav />
      <main>
        <Hero />
        <FourWorlds />
        <DropShowcase />
        <LatestDrops />
        <Ethos />
      </main>
      <Footer />
    </>
  );
}
