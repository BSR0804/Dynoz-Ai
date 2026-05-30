import Nav from "@/components/nav";
import LanguageRibbon from "@/components/language-ribbon";
import Hero from "@/components/hero/hero";
import TrustStrip from "@/components/trust-strip";
import JourneyShowcase from "@/components/journey-showcase";
import HowItWorks from "@/components/how-it-works";
import BuiltFor from "@/components/built-for";
import Metrics from "@/components/metrics";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="pt-16">
        <LanguageRibbon />
      </div>
      <Hero />
      <TrustStrip />
      <JourneyShowcase />
      <HowItWorks />
      <BuiltFor />
      <Metrics />
      <CtaBand />
      <Footer />
    </main>
  );
}
