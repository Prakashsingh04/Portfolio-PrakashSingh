"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { MapPin } from "lucide-react";

export default function Education() {
    const earliest = education[education.length - 1].period.slice(0, 4);
    const latest = education[0].period.slice(-4);

    return (
        <section id="education" className="pt-16 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <SectionHeading
                    code="EDU"
                    title="Education"
                    subtitle="From Army Public School, Devlali to an MCA at VIT Vellore — the full academic path."
                />

                {/* Timeline meta */}
                <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
                    <span className="text-accent">{earliest}</span>
                    <span className="flex-1 h-px bg-[var(--border)]" />
                    <span>{education.length} milestones</span>
                    <span className="flex-1 h-px bg-[var(--border)]" />
                    <span className="text-accent">{latest}</span>
                </div>

                <motion.ol
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                >
                    {education.map((edu, i) => {
                        const isLast = i === education.length - 1;
                        const percent = (Number(edu.score) / edu.scoreMax) * 100;

                        return (
                            <motion.li
                                key={edu.id}
                                variants={staggerItem}
                                className="relative pl-10 md:pl-12 pb-8 last:pb-0"
                            >
                                {/* Connector down to the next milestone */}
                                {!isLast && (
                                    <motion.span
                                        aria-hidden="true"
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.15 + i * 0.1,
                                            ease: "easeOut",
                                        }}
                                        className="absolute left-[7px] top-8 bottom-0 w-px origin-top bg-[var(--border-hover)]"
                                    />
                                )}

                                {/* Node */}
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-accent/40 bg-background"
                                >
                                    <span className="h-[7px] w-[7px] rounded-full bg-accent" />
                                </span>

                                <div className="rounded-2xl border border-[var(--border)] bg-surface p-5 md:p-6 hover:border-[var(--border-hover)] transition-colors duration-200">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <span className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase">
                                                {edu.level}
                                            </span>
                                            <h3 className="font-display font-semibold text-text-primary text-lg mt-1.5">
                                                {edu.institution}
                                            </h3>
                                            <p className="text-sm text-text-secondary mt-1">
                                                {edu.degree}
                                                {edu.stream && (
                                                    <span className="text-text-tertiary">
                                                        {" · "}
                                                        {edu.stream}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                        <span className="shrink-0 font-mono text-[11px] text-text-secondary px-2.5 py-1 rounded-full border border-[var(--border)] bg-background/50">
                                            {edu.period}
                                        </span>
                                    </div>

                                    <p className="flex items-center gap-1.5 text-xs text-text-tertiary mt-3">
                                        <MapPin size={12} className="shrink-0" />
                                        {edu.location}
                                    </p>

                                    {/* Score meter */}
                                    <div className="mt-5">
                                        <div className="flex items-baseline justify-between font-mono text-[11px]">
                                            <span className="uppercase tracking-[0.18em] text-text-tertiary">
                                                {edu.scoreLabel}
                                            </span>
                                            <span className="text-text-primary font-semibold">
                                                {edu.score}
                                                <span className="text-text-tertiary font-normal">
                                                    {edu.scoreLabel === "CGPA" ? " / 10" : "%"}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="mt-2 h-1.5 rounded-full bg-surface-hover overflow-hidden">
                                            <motion.span
                                                className="block h-full rounded-full bg-accent"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${percent}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.9,
                                                    delay: 0.2 + i * 0.1,
                                                    ease: [0.25, 0.4, 0.25, 1],
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.li>
                        );
                    })}
                </motion.ol>
            </div>
        </section>
    );
}
