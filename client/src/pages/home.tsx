import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MaturityCalculator from "@/components/MaturityCalculator";
import FrameworkOverview from "@/components/FrameworkOverview";
import Methodology from "@/components/Methodology";
import CaseStudy from "@/components/CaseStudy";
import AHPTool from "@/components/AHPTool";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MaturityCalculator />
      <FrameworkOverview />
      <Methodology />
      <CaseStudy />
      <AHPTool />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
