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

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* Card 1 */}
            <div
              className="
              group
              p-8
              rounded-2xl
              border border-white/10
              bg-white
              md:bg-white/5
              backdrop-blur-sm

              transition-all
              duration-1000
              ease-out

              md:opacity-0
              hover:opacity-100
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-[#B19EEF]/60
              hover:bg-white/10
              "
            >
              <h3 className="text-xl font-semibold mb-3 text-[#B19EEF]">
                Our Mission
              </h3>
              <p className="text-gray-900 text-sm leading-relaxed">
                We strip away the unnecessary to build digital experiences that
                are intuitive, impactful, and designed to last.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
              group
              p-8
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-sm

              transition-all
              duration-1000
              ease-out

              md:opacity-0
              hover:opacity-100
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-[#B19EEF]/60
              hover:bg-white/10
            "
            >
              <h3 className="text-xl font-semibold mb-3 text-[#B19EEF]">
                The Craft
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Combining motion design with robust engineering. We ensure your
                brand doesn't just function—it performs.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
              group
              p-8
              rounded-2xl
              border border-white/10
              md:bg-white/5
              bg-white
              backdrop-blur-sm

              transition-all
              duration-1000
              ease-out

              md:opacity-0
              hover:opacity-100
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-[#B19EEF]/60
              hover:bg-white/10
            "
            >
              <h3 className="text-xl font-semibold mb-3 text-[#ccc1f1]">
                Future Ready
              </h3>
              <p className=" text-gray-900 text-sm leading-relaxed">
                Constantly pushing boundaries. We explore new frameworks to set
                new standards for modern web development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 md:w-[600px] md:h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                About Assignova
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16 px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 mb-16 mx-4 sm:mx-6 backdrop-blur-sm">
            <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-col sm:flex-row">
              <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  We strip away the unnecessary to build digital experiences
                  that are intuitive, impactful, and designed to last. Our
                  mission is to empower businesses with cutting-edge technology
                  solutions that drive growth, innovation, and sustainable
                  success in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision and every line of code we
              write
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${item.color}/20 border ${item.color.split(" ")[0]}/30 mb-6`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              The brilliant minds driving innovation and excellence at Assignova
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`h-2 w-full rounded-t-lg absolute top-0 left-0 bg-gradient-to-r ${member.color} mb-6`}
                />
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {member.role}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    {member.expertise}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.color}`}
                    />
                    <span className="text-xs text-gray-500">
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Built with modern technologies for scalable, high-performance
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "Next.js", color: "from-gray-100 to-white" },
              { name: "React", color: "from-cyan-400 to-blue-500" },
              { name: "TypeScript", color: "from-blue-500 to-blue-700" },
              { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
              { name: "Node.js", color: "from-green-400 to-green-600" },
              { name: "AWS", color: "from-orange-400 to-yellow-500" },
              { name: "Python", color: "from-blue-400 to-cyan-400" },
              { name: "MongoDB", color: "from-green-500 to-emerald-600" },
              { name: "PostgreSQL", color: "from-blue-400 to-indigo-500" },
              { name: "Docker", color: "from-blue-400 to-cyan-500" },
              { name: "WordPress", color: "from-blue-500 to-cyan-600" },
              { name: "Drupal", color: "from-pink-500 to-purple-600" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-white/20 transition-all duration-300 group hover:scale-105"
              >
                <div
                  className={`h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${tech.color} mb-3`}
                />
                <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 text-center backdrop-blur-sm">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's build something extraordinary together. Our team is ready to
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="group bg-gray-900 border border-gray-800 text-gray-300 px-8 py-3 rounded-xl font-bold text-lg hover:border-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <span>View Case Studies</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
