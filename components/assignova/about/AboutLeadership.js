"use client";

import { motion } from "framer-motion";

export default function AboutLeadership() {
    const team = [
        {
            name: "Ahrar Arif",
            role: "Founder & CEO",
            expertise: "Full-Stack Architecture",
        },
        {
            name: "Kaif Vohra",
            role: "Lead Designer",
            expertise: "UI/UX & Motion Design",
        },
        {
            name: "Javed Akhtar",
            role: "CTO",
            expertise: "Cloud & DevOps",
        },
        {
            name: "Shafin Vohra",
            role: "Product Manager",
            expertise: "Agile Development",
        },
    ];

    return (
        <section className="relative w-full py-32 overflow-hidden">
            {/* Subtle Mist */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-mid-accent rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 max-w-7xl mx-auto border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Leadership</h2>
                        <p className="text-gray-500 mt-4 text-lg">The minds driving innovation.</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex flex-col sm:flex-row justify-between sm:items-center py-8 border-b border-white/5 hover:border-light-accent/30 transition-colors duration-500"
                        >
                            <div className="mb-4 sm:mb-0">
                                <h3 className="text-2xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-light-accent text-sm mt-1">{member.role}</p>
                            </div>
                            <div className="text-left sm:text-right">
                                <p className="text-gray-500 text-sm tracking-wide uppercase">{member.expertise}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
