import Hero from "@/components/landing/Hero";
// import Benefits from "./components/landing/Benefits";
import TrustBadges from "@/components/landing/TrustBadges";
import QuoteForm from "@/components/landing/QuoteForm";
import Services from "@/components/landing/Services";
import AboutUs from "@/components/landing/AboutUs";
import WebSolutions from "@/components/landing/WebSolutions";
import Portfolio from "@/components/landing/Portfolio";
import ContactSection from "@/components/landing/ContactSection";
import GoogleReviewsWidget from "@/components/landing/GoolgeReivewsWidget";
import LandingNavigation from "@/components/landing/LandingNavigation";
// import FAQ from "./components/landing/FAQ";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <LandingNavigation />

      {/* Hero with Form */}
      <section id="home" className="relative pt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start py-10">
          <div className="flex flex-col justify-center">
            <Hero />
          </div>
          <div className="flex flex-col justify-center">
            <QuoteForm position="hero" />
          </div>
        </div>
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="trust">
        <TrustBadges />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="solutions">
        <WebSolutions />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <GoogleReviewsWidget />
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
