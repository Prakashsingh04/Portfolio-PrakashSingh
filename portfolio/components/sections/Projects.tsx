"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowUpRight, Lock } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    code="PRJ"
                    title="Selected Projects"
                    subtitle="Things I've built and shipped"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItem}
                            whileHover={{ y: -4, transition: { duration: 0.3 } }}
                            className="group relative rounded-2xl border border-[var(--border)] bg-surface overflow-hidden hover:border-[var(--border-hover)] transition-all duration-300"
                        >
                            {/* Category Badge */}
                            <div className="p-6 pb-0">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-mono tracking-wider text-accent uppercase">
                                        {project.category}
                                    </span>
                                    {project.isExperienceProject && (
                                        <span className="inline-flex items-center gap-1 text-xs text-text-tertiary">
                                            <Lock size={10} />
                                            Experience Project
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-display font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                                    {project.title}
                                </h3>

                                {/* Problem */}
                                <p className="text-sm text-text-tertiary mb-3 italic">
                                    {project.problem}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                    {project.description}
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="px-6 pb-4">
                                <div className="grid grid-cols-2 gap-2">
                                    {project.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                                            <span className="text-xs text-text-secondary">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 border-t border-[var(--border)] flex items-center justify-between">
                                {/* Stack Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.stack.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-[10px] font-medium text-text-tertiary border border-[var(--border)] rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.stack.length > 4 && (
                                        <span className="px-2 py-0.5 text-[10px] text-text-tertiary">
                                            +{project.stack.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-2">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-text-tertiary hover:text-text-primary transition-colors"
                                            aria-label={`${project.title} source code`}
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-text-tertiary hover:text-accent transition-colors"
                                            aria-label={`${project.title} live demo`}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                    {!project.githubUrl && !project.demoUrl && (
                                        <span className="text-xs text-text-tertiary italic">
                                            Internal
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Hover arrow */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight
                                    size={18}
                                    className="text-accent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
