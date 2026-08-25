"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    Github,
    GraduationCap,
    Linkedin,
    MapPin,
    Target,
} from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import {
    textReveal,
    staggerContainer,
    staggerItem,
    fadeUp,
} from "@/lib/animations";
import { useNavigate } from "@/lib/navigation-context";

const current = experiences[0];
const mca = education[0];

/** lucide-react has no Medium glyph, so this ships as a plain inline SVG. */
function MediumIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
    );
}

/**
 * What used to be a five-row Profile panel, cut down to the three facts worth
 * carrying on the card. "Currently" moved onto the photo scrim; interests live
 * in the Beyond Code section. These render in the amber secondary accent — the
 * lime stays reserved for the name badge and primary actions.
 */
const badges = [
    { icon: Target, text: "AI Engineering + Backend" },
    { icon: GraduationCap, text: `MCA · VIT Vellore · ${mca.score}` },
    { icon: MapPin, text: profile.location },
];

const socialLinks = [
    { url: profile.socials[1].url, icon: Github, label: "GitHub" },
    { url: profile.socials[0].url, icon: Linkedin, label: "LinkedIn" },
    { url: profile.socials[3].url, icon: MediumIcon, label: "Medium" },
];

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="relative lg:min-h-[calc(100svh-4rem)] flex items-center px-6 py-10 lg:py-16"
        >
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center"
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

                        {/* Description */}
                        <motion.p
                            variants={staggerItem}
                            className="text-lg text-text-secondary max-w-2xl leading-relaxed"
                        >
                            {profile.description}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={staggerItem}
                            className="flex flex-wrap items-center gap-3 pt-2"
                        >
                            <button
                                onClick={() => navigate("projects")}
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background text-sm font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-lg hover:shadow-[var(--accent-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                            >
                                View My Work
                                <ArrowRight
                                    size={14}
                                    className="group-hover:translate-x-0.5 transition-transform"
                                />
                            </button>

                            {socialLinks.map(({ url, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--border)] bg-surface/40 backdrop-blur-sm text-text-secondary text-sm font-medium rounded-xl hover:border-[var(--border-hover)] hover:text-text-primary hover:bg-surface-hover/60 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                                >
                                    <Icon size={16} />
                                    {label}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Profile card — photo, key facts as badges, resume */}
                    <motion.aside
                        variants={fadeUp}
                        className="glass-edge relative mx-auto w-full max-w-sm lg:max-w-[380px] lg:justify-self-end rounded-2xl border border-[var(--border)] bg-surface/70 backdrop-blur-xl shadow-2xl shadow-black/25 overflow-hidden"
                    >
                        {/* Window chrome + live location */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-surface-hover/40">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-accent/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-text-tertiary/25" />
                                <span className="w-2.5 h-2.5 rounded-full bg-text-tertiary/25" />
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inset-0 rounded-full bg-accent animate-ping-ring" />
                                    <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
                                </span>
                                <span className="font-mono text-[10px] text-accent uppercase tracking-[0.18em]">
                                    {profile.location.split(",")[0]}
                                </span>
                            </span>
                        </div>

                        <div className="p-4 space-y-4">
                            {/* Identity badge — the only lime badge on the card */}
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-muted border border-accent/25 text-accent text-[11px] font-mono uppercase tracking-[0.14em]">
                                <span className="w-1 h-1 rounded-full bg-accent" />
                                {profile.name}
                            </span>

                            {/* Photo with the current role on a scrim */}
                            <div className="group relative w-full aspect-[4/5] max-h-[42svh] rounded-xl overflow-hidden border border-[var(--border)] bg-surface-hover">
                                <Image
                                    src="/photo/ZAI.png"
                                    alt={profile.name}
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 380px, 70vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                                        Currently
                                    </p>
                                    <p className="text-sm font-semibold text-white mt-1 leading-snug">
                                        {current.role}
                                    </p>
                                    <p className="text-xs text-white/60 mt-0.5">
                                        {current.company} · {current.period}
                                    </p>
                                </div>
                            </div>

                            {/* Key facts, as amber badges */}
                            <div className="flex flex-wrap gap-2">
                                {badges.map((badge) => (
                                    <span
                                        key={badge.text}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-accent-2-muted border border-accent-2-border text-accent-2 text-[11px] font-medium"
                                    >
                                        <badge.icon size={12} strokeWidth={2.2} />
                                        {badge.text}
                                    </span>
                                ))}
                            </div>

                            {/* Resume download */}
                            <a
                                href={profile.resumeUrl}
                                download
                                className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-background text-sm font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-lg hover:shadow-[var(--accent-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                            >
                                <Download
                                    size={15}
                                    className="group-hover:translate-y-0.5 transition-transform"
                                />
                                Download Resume
                            </a>
                        </div>
                    </motion.aside>
                </motion.div>
            </div>
        </section>
    );
}
