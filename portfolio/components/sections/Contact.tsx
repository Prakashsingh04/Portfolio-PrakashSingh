"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { profile } from "@/data/profile";
import { Linkedin, Github, Mail, Download } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="pt-16 pb-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-8"
                >
                    {/* Eyebrow */}
                    <motion.span
                        variants={fadeUp}
                        className="block font-mono text-xs tracking-[0.3em] text-accent"
                    >
                        CTC
                    </motion.span>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        className="font-display text-section font-bold text-text-primary"
                    >
                        Let&apos;s build something useful.
                    </motion.h2>

                    <motion.p
                        variants={staggerItem}
                        className="text-lg text-text-secondary max-w-lg mx-auto"
                    >
                        Interested in working together, discussing AI engineering, or just
                        talking tech?
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-wrap items-center justify-center gap-4 pt-4"
                    >
                        <a
                            href={profile.socials[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background text-sm font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
                        >
                            <Linkedin size={16} />
                            LinkedIn
                        </a>
                        <a
                            href={profile.socials[1].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-text-secondary text-sm font-medium rounded-lg hover:border-[var(--border-hover)] hover:text-text-primary transition-all duration-200"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-text-secondary text-sm font-medium rounded-lg hover:border-[var(--border-hover)] hover:text-text-primary transition-all duration-200"
                        >
                            <Mail size={16} />
                            Email
                        </a>
                        <a
                            href={profile.resumeUrl}
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-text-secondary text-sm font-medium rounded-lg hover:border-[var(--border-hover)] hover:text-text-primary transition-all duration-200"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
