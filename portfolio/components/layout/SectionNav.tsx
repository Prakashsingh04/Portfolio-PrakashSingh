"use client";

import { sections, SectionId } from "@/lib/sections";

interface SectionNavProps {
    active: SectionId;
    onNavigate: (id: SectionId) => void;
}
export default function SectionNav({ active, onNavigate }: SectionNavProps) {
    return (
        <>
            {/* Logo mark */}
            <a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate("home");
                }}
                className="fixed top-6 left-6 z-50 font-display text-lg font-bold text-text-primary hover:text-accent transition-colors duration-200"
                aria-label="Go to home"
            >
                PS
            </a>

            {/* Desktop vertical pill nav */}
            <nav
                aria-label="Section navigation"
                className="hidden md:flex flex-col items-center gap-1 fixed left-6 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full border border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-lg shadow-black/10"
            >
                {sections.map((s) => {
                    const isActive = active === s.id;
                    return (
                        <button
                            key={s.id}
                            onClick={() => onNavigate(s.id)}
                            aria-label={s.label}
                            aria-current={isActive}
                            className={`group relative w-11 h-11 flex items-center justify-center rounded-full transition-all duration-200 ${isActive
                                    ? "bg-accent text-background"
                                    : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                                }`}
                        >
                            <s.icon size={17} strokeWidth={2} />
                            {/* Tooltip */}
                            <span className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-[var(--border)] bg-surface px-3 py-1.5 text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50">
                                <span className="font-mono text-accent mr-1.5">{s.code}</span>
                                <span className="text-text-secondary">{s.label}</span>
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* Mobile bottom pill nav */}
            <nav
                aria-label="Section navigation"
                className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 px-1.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-lg shadow-black/20 max-w-[94vw] overflow-x-auto"
            >
                {sections.map((s) => {
                    const isActive = active === s.id;
                    return (
                        <button
                            key={s.id}
                            onClick={() => onNavigate(s.id)}
                            aria-label={s.label}
                            aria-current={isActive}
                            className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${isActive
                                    ? "bg-accent text-background"
                                    : "text-text-secondary"
                                }`}
                        >
                            <s.icon size={16} strokeWidth={2} />
                        </button>
                    );
                })}
            </nav>
        </>
    );
}
