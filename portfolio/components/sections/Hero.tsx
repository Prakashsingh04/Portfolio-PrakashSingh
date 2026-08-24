"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Briefcase,
    Github,
    GraduationCap,
    Linkedin,
    MapPin,
    Sparkles,
    Target,
} from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certificates";
import {
    textReveal,
    staggerContainer,
    staggerItem,
    fadeUp,
} from "@/lib/animations";
import { useNavigate } from "@/lib/navigation-context";

const current = experiences[0];
const mca = education[0];

/** The old About section, folded in as icon rows instead of prose. */
const facts = [
    {
        icon: Briefcase,
        label: "Currently",
        value: current.role,
        meta: `${current.company} · ${current.period}`,
    },
    {
        icon: Target,
        label: "Focus",
        value: "AI Engineering + Backend",
        meta: "Enterprise AI workflows, APIs, real-time systems",
    },
    {
        icon: GraduationCap,
        label: "Education",
        value: "MCA · VIT Vellore",
        meta: `${mca.period} · ${mca.score} CGPA`,
    },
    {
        icon: MapPin,
        label: "Based in",
        value: profile.location,
        meta: "Working with teams across India",
    },
    {
        icon: Sparkles,
        label: "Interests",
        value: "AI · Software · Animation · Anime",
        meta: "Badminton on the side",
    },
];

const stats = [
    { value: "76+", label: "Enterprise tools", meta: "integrated over MCP" },
    {
        value: String(projects.length),
        label: "Projects built",
        meta: "AI · full-stack · ML",
    },
    { value: mca.score, label: "MCA CGPA", meta: "VIT Vellore" },
    {
        value: String(certifications.length),
        label: "Certifications",
        meta: "all verifiable",
    },
];

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center px-6 py-24 md:py-28 overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-[var(--gradient-end)]/10 rounded-full blur-[100px] animate-pulse-slow" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start"
                >
                    {/* Intro */}
                    <div className="space-y-6">
                        {/* Eyebrow */}
                        <motion.p
                            variants={staggerItem}
                            className="text-xs md:text-sm font-mono tracking-[0.2em] text-accent uppercase"
                        >
                            <span className="text-text-tertiary">HOM /</span>{" "}
                            {profile.eyebrow}
                        </motion.p>

                        {/* Name — main focus */}
                        <div>
                            <motion.p
                                variants={staggerItem}
                                className="font-display text-2xl md:text-3xl text-text-secondary"
                            >
                                {profile.greeting}
                            </motion.p>
                            <motion.h1
                                variants={textReveal}
                                className="font-display text-hero font-semibold text-text-primary -mt-1"
                            >
                                {profile.name}
                            </motion.h1>
                        </div>

                        {/* Role headline */}
                        <motion.p
                            variants={staggerItem}
                            className="font-display text-xl md:text-2xl text-accent whitespace-pre-line"
                        >
                            {profile.headline}
                        </motion.p>

                        {/* Description + bio */}
                        <motion.p
                            variants={staggerItem}
                            className="text-lg text-text-secondary max-w-2xl leading-relaxed"
                        >
                            {profile.description}
                        </motion.p>
                        <motion.p
                            variants={staggerItem}
                            className="text-base text-text-tertiary max-w-2xl leading-relaxed"
                        >
                            {profile.bio}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-wrap items-center gap-3 pt-2"
                        >
                            <button
                                onClick={() => navigate("projects")}
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background text-sm font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
                            >
                                View My Work
                                <ArrowRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 transition-transform"
                                />
                            </button>
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
                                href={profile.socials[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-text-secondary text-sm font-medium rounded-lg hover:border-[var(--border-hover)] hover:text-text-primary transition-all duration-200"
                            >
                                <Linkedin size={16} />
                                LinkedIn
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile panel — the old About metadata, as icon rows */}
                    <motion.aside
                        variants={fadeUp}
                        className="rounded-2xl border border-[var(--border)] bg-surface/80 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-surface-hover/60">
                            <span className="font-mono text-[11px] tracking-[0.2em] text-text-tertiary uppercase">
                                Profile
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span className="font-mono text-[11px] text-accent uppercase tracking-wider">
                                    {profile.location.split(",")[0]}
                                </span>
                            </span>
                        </div>

                        <ul className="divide-y divide-[var(--border)]">
                            {facts.map((fact) => (
                                <li
                                    key={fact.label}
                                    className="group flex items-start gap-4 px-5 py-4 hover:bg-surface-hover/50 transition-colors duration-200"
                                >
                                    <span className="mt-0.5 p-2 rounded-lg bg-accent-muted text-accent shrink-0">
                                        <fact.icon size={15} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block font-mono text-[10px] tracking-[0.18em] text-text-tertiary uppercase">
                                            {fact.label}
                                        </span>
                                        <span className="block text-sm font-medium text-text-primary mt-1">
                                            {fact.value}
                                        </span>
                                        <span className="block text-xs text-text-tertiary mt-0.5">
                                            {fact.meta}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                </motion.div>

                {/* Stat tiles */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={staggerItem}
                            className="p-5 rounded-xl border border-[var(--border)] bg-surface/80 backdrop-blur-sm hover:border-[var(--border-hover)] transition-colors duration-200"
                        >
                            <span className="block w-7 h-px bg-accent opacity-70 mb-4" />
                            <p className="font-display text-3xl md:text-4xl font-semibold text-text-primary leading-none">
                                {stat.value}
                            </p>
                            <p className="text-sm text-text-secondary mt-2.5">{stat.label}</p>
                            <p className="font-mono text-[11px] text-text-tertiary mt-1">
                                {stat.meta}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
