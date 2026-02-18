import Hero from "@/components/landing/Hero";
// import Benefits from "./components/landing/Benefits";
import TrustBadges from "@/components/landing/TrustBadges";
import QuoteForm from "@/components/landing/QuoteForm";
import Services from "@/components/landing/Services";
import AboutUs from "@/components/landing/AboutUs";
import WebSolutions from "@/components/landing/WebSolutions";
import Industries from "@/components/landing/Industries";
import ContactSection from "@/components/landing/ContactSection";
import GoogleReviewsWidget from "@/components/landing/GoolgeReivewsWidget";
import FAQ from "@/components/landing/FAQ";
import LandingNavigation from "@/components/landing/LandingNavigation";
// import ScrollSpy from "@/components/landing/ScrollSpy";
import Testimonials from "@/components/landing/Testimonials";
import WhatsappButton from "@/components/WhatsappButtion";
export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <LandingNavigation />
      {/* <ScrollSpy /> */}

      {/* Hero with Form */}
      <section id="home" className="relative pt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start py-10 hero-bg">
          <div className="flex flex-col justify-center">
            <Hero />
          </div>
          <div className="flex flex-col justify-center">
            <QuoteForm position="hero" />
          </div>
        </div>
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>

      <TrustBadges />

      <section id="Industries">
        <Industries />
      </section>
      <section id="solutions">
        <WebSolutions />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <FAQ />
      <GoogleReviewsWidget />
      <WhatsappButton />
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
