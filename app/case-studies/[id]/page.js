import { caseStudies } from "@/app/data/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Target,
    CheckCircle,
    TrendingUp,
    Code,
    Calendar,
    Users
} from "lucide-react";

// Generate static params so Next.js pre-builds all case study routes 
export function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id.toString(),
    }));
}

export default function CaseStudyPage({ params }) {
    const study = caseStudies.find((s) => s.id.toString() === params.id);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-950 text-white selection:bg-[#B19EEF] selection:text-black">

            {/* 1. Immersive Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden min-h-[60vh] flex flex-col justify-center border-b border-gray-900">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute w-[800px] h-[800px] bg-dark-accent/10 rounded-full blur-[120px] top-[-20%] right-[-10%]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/case-studies" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Case Studies</span>
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between">
                        <div className="max-w-3xl">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-4 bg-gray-900/80 border border-gray-800 rounded-2xl flex items-center justify-center filter drop-shadow-xl backdrop-blur-md">
                                    {study.logo}
                                </div>
                                <div>
                                    <div className="text-dark-accent font-semibold tracking-wide uppercase text-sm mb-1">{study.industry}</div>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                        {study.client}
                                    </h1>
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-light text-gray-300 leading-snug">
                                {study.title}
                            </h2>
                        </div>

                        {/* Hero Quick Stats */}
                        <div className="flex gap-6 text-sm text-gray-400 bg-gray-900/40 p-6 rounded-3xl border border-gray-800 backdrop-blur-md">
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-dark-accent" /> Duration</span>
                                <span className="text-white font-medium text-lg">{study.duration}</span>
                            </div>
                            <div className="w-px bg-gray-800" />
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-dark-accent" /> Team</span>
                                <span className="text-white font-medium text-lg">{study.teamSize}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Deep Dive Content Grid */}
            <section className="py-24 relative z-10 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Reading Column */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* The Challenge */}
                        <div>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">The Challenge</h3>
                            </div>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                {study.challenge}
                            </p>
                        </div>

                        {/* The Architecture Solution */}
                        <div>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-dark-accent/10 border border-dark-accent/20 flex items-center justify-center">
                                    <Code className="w-6 h-6 text-dark-accent" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Architecture & Solution</h3>
                            </div>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                {study.solution}
                            </p>
                        </div>

                        {/* The Definitive Results */}
                        <div>
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Definitive Results</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {study.results.map((result, idx) => (
                                    <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-dark-accent/50 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <CheckCircle className="w-8 h-8 text-dark-accent" />
                                            <span className="text-4xl font-black text-gray-800/50 italic">0{idx + 1}</span>
                                        </div>
                                        <p className="text-gray-200 font-medium text-lg leading-snug">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 sticky top-32">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Code className="w-5 h-5 text-dark-accent" /> Technologies Used
                            </h4>
                            <div className="flex flex-col gap-3">
                                {study.technologies.map((tech, index) => (
                                    <div key={tech} className="flex items-center justify-between p-4 bg-gray-950 border border-gray-800/50 rounded-xl hover:border-gray-700 transition-colors">
                                        <span className="text-gray-200 font-medium">{tech}</span>
                                        <span className="text-xs text-gray-600 font-mono">#{index + 1}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <h4 className="text-xl font-bold text-white mb-6">Outcome Rating</h4>
                                <div className="w-full bg-gray-950 border border-gray-800 rounded-xl p-6 text-center shadow-inner">
                                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600">
                                        100%
                                    </span>
                                    <div className="text-sm font-bold text-green-500 mt-2 uppercase tracking-widest">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 border-t border-gray-900 bg-gray-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-dark-accent/5 pointer-events-none" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to build something similar?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">Partner with us to create highly scalable architectures tailored perfectly to your enterprise needs.</p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg">
                        <span>Start Your Project</span>
                        <ArrowLeft className="w-5 h-5 rotate-180" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
