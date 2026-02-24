"use client";

import GhostCursor from "@/components/GhostCursor";
import TrueFocus from "@/components/TrueFocus";
import {
  Sparkles,
  Target,
  Users,
  Zap,
  Globe,
  Award,
  Code,
  ChevronRight,
  ArrowUpRight,
  Rocket,
} from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const AboutPhilosophy = dynamic(() => import("@/components/assignova/about/AboutPhilosophy"), { ssr: false });
const AboutValues = dynamic(() => import("@/components/assignova/about/AboutValues"), { ssr: false });
const AboutLeadership = dynamic(() => import("@/components/assignova/about/AboutLeadership"), { ssr: false });
const AboutCTA = dynamic(() => import("@/components/assignova/about/AboutCTA"), { ssr: false });

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on initial render and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "Every pixel, every line of code is crafted with intention and purpose.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work with you, not just for you. Your vision becomes our mission.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Constantly pushing boundaries with cutting-edge technologies.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Building solutions that transcend borders and transform industries.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Setting new standards for quality and performance in every project.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Technical Mastery",
      description: "Deep expertise across modern frameworks and architectures.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const stats = [
    { number: "90+", label: "Projects Completed", suffix: "" },
    { number: "100", label: "Client Satisfaction", suffix: "%" },
    { number: "3", label: "Years of Excellence", suffix: "+" },
    { number: "24/7", label: "Support", suffix: "" },
    { number: "15", label: "Team Members", suffix: "+" },
    { number: "100k", label: "Lines of Code", suffix: "+" },
  ];

  const team = [
    {
      name: "Ahrar Arif",
      role: "Founder & CEO",
      expertise: "Full-Stack Architecture",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Kaif Vohra",
      role: "Lead Designer",
      expertise: "UI/UX & Motion Design",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Javed Akhtar",
      role: "CTO",
      expertise: "Cloud & DevOps",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Shafin Vohra",
      role: "Product Manager",
      expertise: "Agile Development",
      color: "from-orange-500 to-yellow-500",
    },
  ];
  return (
    <>
      <main className="min-h-screen w-full bg-neutral-950 text-white selection:bg-[#B19EEF] selection:text-black">
        {/* FIXED: Ghost Cursor Layer
        - 'fixed inset-0': Makes it cover the whole screen and stay there while scrolling.
        - 'pointer-events-none': Allows you to click text/buttons THOUGH the cursor layer.
        - 'z-0': Keeps it in the background so text (z-10) floats above it.
      */}
        <GhostCursor
          color="#B19EEF"
          brightness={1.2}
          edgeIntensity={0}
          trailLength={40}
          inertia={0.4}
          grainIntensity={0.08}
          bloomStrength={0.5}
          bloomRadius={0.5}
          bloomThreshold={0}
          fadeDelayMs={200}
          fadeDurationMs={1000}
          zIndex={50}
          className={"hidden md:block"}
        />

        {/* Content Layer 
         - 'z-10': Ensures text is visually above the cursor trails.
         - 'relative': Allows z-index to work.
      */}
        <div className="absolute top-0 flex flex-col items-center justify-center min-h-screen px-6 py-20 w-full">
          {/* Heading Section */}
          <div className="flex flex-col p-4 items-center text-center gap-8 mb-16">
            <span
              className="
              flex flex-col p-4 items-center text-center gap-8 mb-16
              text-black
              transition-all
              duration-700
              ease-in-out
              group-hover:text-white
              group-hover:drop-shadow-[0_0_25px_rgba(177,158,239,0.35)]
            "
            >
              <div className="text-5xl text-neutral-400 md:text-7xl font-bold tracking-tighter">
                <TrueFocus
                  sentence="Assig Nova"
                  manualMode={false}
                  blurAmount={8}
                  borderColor="#B19EEF"
                  animationDuration={0.8}
                  pauseBetweenAnimations={2}
                />
              </div>
              <h2 className="text-xl md:text-2xl text-white md:text-black font-light max-w-2xl">
                Redefining the digital landscape with focus and precision.
              </h2>
            </span>
          </div>

        </div>
      </main>

      <div className="relative z-10 bg-gray-950">
        <AboutPhilosophy />
        <AboutValues />
        <AboutLeadership />
        <AboutCTA />
      </div>
    </>
  );
}
