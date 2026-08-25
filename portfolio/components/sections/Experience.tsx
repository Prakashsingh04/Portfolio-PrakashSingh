"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="pt-16 pb-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    code="EXP"
                    title="Experience"
                    subtitle="Building enterprise AI solutions"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-8"
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            variants={staggerItem}
                            className="relative"
                        >
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

                            <div className="md:pl-8 relative">
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-accent hidden md:block" />

                                <div className="p-6 rounded-2xl border border-[var(--border)] bg-surface hover:border-[var(--border-hover)] transition-colors duration-300">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-text-primary font-display">
                                                {exp.company}
                                            </h3>
                                            <p className="text-accent font-medium mt-1">
                                                {exp.role}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-1 text-sm text-text-tertiary shrink-0">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Calendar size={13} />
                                                {exp.period}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin size={13} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bullet points */}
                                    <ul className="space-y-3 mt-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                                                <span className="mt-2 w-1 h-1 bg-accent rounded-full shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium text-accent bg-accent-muted rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
