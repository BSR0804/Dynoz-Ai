import Nav from "@/components/nav";
import Hero from "@/components/hero/hero";
import TrustStrip from "@/components/trust-strip";
import Journey from "@/components/journey";
import HowItWorks from "@/components/how-it-works";
import BuiltFor from "@/components/built-for";
import Metrics from "@/components/metrics";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustStrip />
      <Journey />
      <HowItWorks />
      <BuiltFor />
      <Metrics />
      <CtaBand />
      <Footer />
    </main>
  );
}
