import Splash from "@/components/home/Splash";
import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import Hero from "@/components/home/Hero";
import FourWorlds from "@/components/home/FourWorlds";
import DropShowcase from "@/components/home/DropShowcase";
import LatestDrops from "@/components/home/LatestDrops";
import Ethos from "@/components/home/Ethos";
import Footer from "@/components/shared/Footer";

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
