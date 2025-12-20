"use client";

import GhostCursor from "@/components/GhostCursor";
import TrueFocus from "@/components/TrueFocus";

export default function About() {
  return (
    // Main Background Color is set here
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
      />

      {/* Content Layer 
         - 'z-10': Ensures text is visually above the cursor trails.
         - 'relative': Allows z-index to work.
      */}
      <div className="absolute top-0 flex flex-col items-center justify-center min-h-screen px-6 py-20 w-full">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <span
            className="
              text-black
              transition-all
              duration-700
              ease-in-out
              group-hover:text-white
              group-hover:drop-shadow-[0_0_25px_rgba(177,158,239,0.35)]
            ">
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
            <h2 className="text-xl md:text-2xl font-light max-w-2xl">Redefining the digital landscape with focus and precision.</h2>
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
              bg-white/5
              backdrop-blur-sm

              transition-all
              duration-1000
              ease-out

              opacity-0
              hover:opacity-100
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-[#B19EEF]/60
              hover:bg-white/10
              ">
            <h3 className="text-xl font-semibold mb-3 text-[#B19EEF]">Our Mission</h3>
            <p className="text-gray-900 text-sm leading-relaxed">
              We strip away the unnecessary to build digital experiences that are intuitive, impactful, and designed to last.
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

              opacity-0
              hover:opacity-100
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-[#B19EEF]/60
              hover:bg-white/10
            ">
            <h3 className="text-xl font-semibold mb-3 text-[#B19EEF]">The Craft</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Combining motion design with robust engineering. We ensure your brand doesn't just function—it performs.
            </p>
          </div>

          {/* Card 3 */}
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

              opacity-0
              hover:opacity-100
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-[#B19EEF]/60
              hover:bg-white/10
            ">
            <h3 className="text-xl font-semibold mb-3 text-[#ccc1f1]">Future Ready</h3>
            <p className="text-gray-900 text-sm leading-relaxed">
              Constantly pushing boundaries. We explore new frameworks to set new standards for modern web development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
