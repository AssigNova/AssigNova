"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import AssignovaHero from "@/components/assignova/AssignovaHero";
import Script from "next/script";

const ServicesShowcase = dynamic(
  () => import("@/components/assignova/ServicesShowcase"),
  { ssr: false },
);
const TechStack = dynamic(() => import("@/components/assignova/TechStack"), {
  ssr: false,
});
const CaseStudiesPreview = dynamic(
  () => import("@/components/assignova/CaseStudiesPreview"),
  { ssr: false },
);
const ContactCTA = dynamic(() => import("@/components/assignova/ContactCTA"), {
  ssr: false,
});

export default function AssignovaHome() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-950 overflow-hidden"
    >
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vomc5psc9v");
          `,
        }}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: ["0%", "-10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -inset-[50%] bg-gradient-to-br from-dark-accent/10 via-mid-accent/5 to-transparent skew-y-12 origin-top-left"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <motion.div style={{ opacity, scale }} className="relative">
        <AssignovaHero />
        <ServicesShowcase />
        <TechStack />
        <CaseStudiesPreview />
        <ContactCTA />
      </motion.div>

      {/* Static Accent Background Layer */}
      <motion.div
        style={{ y: bgY }}
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-accent/10 via-gray-950 to-gray-950"
      />
    </div>
  );
}
