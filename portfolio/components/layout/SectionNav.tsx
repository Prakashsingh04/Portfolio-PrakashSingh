"use client";

import { motion } from "framer-motion";
import { sections, SectionId } from "@/lib/sections";

interface SectionNavProps {
    active: SectionId;
    onNavigate: (id: SectionId) => void;
}

/** Shared spring so the desktop and mobile indicators feel identical. */
const indicatorSpring = { type: "spring", stiffness: 420, damping: 34 } as const;

export default function SectionNav({ active, onNavigate }: SectionNavProps) {
    const activeIndex = sections.findIndex((s) => s.id === active);

    return (
        <>
            {/* Logo mark */}
            <a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate("home");
                }}
                className="group fixed top-6 left-6 z-50 flex items-center gap-2 rounded-lg px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                aria-label="Go to home"
            >
                <span className="font-display text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-200">
                    PS
                </span>
                <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping-ring" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
            </a>

            {/* Desktop vertical pill nav */}
            <nav
                aria-label="Section navigation"
                className="hidden md:flex flex-col items-center gap-1 fixed left-6 top-1/2 -translate-y-1/2 z-50 p-2 rounded-[1.75rem] border border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-xl shadow-black/20 glass-edge"
            >
                {sections.map((s, i) => {
                    const isActive = active === s.id;
                    return (
                        <button
                            key={s.id}
                            onClick={() => onNavigate(s.id)}
                            aria-label={s.label}
                            aria-current={isActive ? "page" : undefined}
                            className="group relative w-11 h-11 flex items-center justify-center rounded-2xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                        >
                            {/* Sliding active pill */}
                            {isActive && (
                                <motion.span
                                    layoutId="nav-active-desktop"
                                    transition={indicatorSpring}
                                    className="absolute inset-0 rounded-2xl bg-accent shadow-lg shadow-[var(--accent-glow)]"
                                />
                            )}

                            {/* Hover wash, only when not active */}
                            {!isActive && (
                                <span className="absolute inset-0 rounded-2xl bg-surface-hover opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            )}

                            <s.icon
                                size={17}
                                strokeWidth={2}
                                className={`relative z-10 transition-all duration-200 ${isActive
                                    ? "text-background scale-105"
                                    : "text-text-tertiary group-hover:text-text-primary group-hover:scale-110"
                                    }`}
                            />

                            {/* Tooltip */}
                            <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 flex items-center whitespace-nowrap rounded-lg border border-[var(--border)] bg-surface px-3 py-1.5 text-xs shadow-lg shadow-black/20 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50">
                                <span className="font-mono text-accent mr-1.5">
                                    {s.code}
                                </span>
                                <span className="text-text-secondary">{s.label}</span>
                            </span>

                            <span className="sr-only">{`Section ${i + 1} of ${sections.length}`}</span>
                        </button>
                    );
                })}

                {/* Position readout — anchors "where am I" without extra chrome */}
                <span className="mt-1 pt-2 w-full border-t border-[var(--border)] text-center font-mono text-[10px] tracking-widest text-text-tertiary">
                    {String(activeIndex + 1).padStart(2, "0")}
                    <span className="opacity-40">
                        /{String(sections.length).padStart(2, "0")}
                    </span>
                </span>
            </nav>

            {/* Mobile bottom pill nav */}
            <nav
                aria-label="Section navigation"
                className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 px-1.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-xl shadow-black/30 glass-edge max-w-[94vw] overflow-x-auto"
            >
                {sections.map((s) => {
                    const isActive = active === s.id;
                    return (
                        <button
                            key={s.id}
                            onClick={() => onNavigate(s.id)}
                            aria-label={s.label}
                            aria-current={isActive ? "page" : undefined}
                            className="group relative shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="nav-active-mobile"
                                    transition={indicatorSpring}
                                    className="absolute inset-0 rounded-full bg-accent shadow-md shadow-[var(--accent-glow)]"
                                />
                            )}
                            <s.icon
                                size={16}
                                strokeWidth={2}
                                className={`relative z-10 transition-colors duration-200 ${isActive ? "text-background" : "text-text-tertiary"
                                    }`}
                            />
                        </button>
                    );
                })}
            </nav>
        </>
    );
}
