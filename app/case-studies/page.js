"use client";

import CaseStudiesHero from "@/components/assignova/casestudies/CaseStudiesHero";
import CaseStudiesGrid from "@/components/assignova/casestudies/CaseStudiesGrid";
import CaseStudyProcess from "@/components/assignova/casestudies/CaseStudyProcess";
import CaseStudiesCTA from "@/components/assignova/casestudies/CaseStudiesCTA";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen w-full bg-gray-950 text-white selection:bg-[#B19EEF] selection:text-black">
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudyProcess />
      <CaseStudiesCTA />
    </main>
  );
}
