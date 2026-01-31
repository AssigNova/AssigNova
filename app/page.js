import Hero from "@/components/landing/Hero";
// import Benefits from "./components/landing/Benefits";
import TrustBadges from "@/components/landing/TrustBadges";
import QuoteForm from "@/components/landing/QuoteForm";
import Services from "@/components/landing/Services";
import AboutUs from "@/components/landing/AboutUs";
import WebSolutions from "@/components/landing/WebSolutions";
import Portfolio from "@/components/landing/Portfolio";
import ContactSection from "@/components/landing/ContactSection";
// import FAQ from "./components/landing/FAQ";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      {/* Hero with Form */}
      <section className="relative">
        <Hero />
        <div className="container mx-auto px-4">
          <QuoteForm position="hero" />
        </div>
      </section>

      <Services />

      <TrustBadges />
      <AboutUs />
      <WebSolutions />
      <Portfolio />
      <ContactSection />
      {/*  <Testimonials />
      <Industries />
      <FAQ /> */}

      {/* Final CTA Form */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <QuoteForm position="bottom" />
        </div>
      </section> */}
    </div>
  );
}
