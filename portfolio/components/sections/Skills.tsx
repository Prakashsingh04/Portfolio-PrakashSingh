"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { ChevronRight, Terminal } from "lucide-react";

const totalSkills = skills.reduce((sum, group) => sum + group.skills.length, 0);

export default function Skills() {
    const [activeId, setActiveId] = useState(skills[0].id);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const activeIndex = skills.findIndex((g) => g.id === activeId);
    const group = skills[activeIndex] ?? skills[0];

    const focusTab = (index: number) => {
        const next = (index + skills.length) % skills.length;
        setActiveId(skills[next].id);
        tabRefs.current[next]?.focus();
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case "ArrowDown":
            case "ArrowRight":
                e.preventDefault();
                focusTab(activeIndex + 1);
                break;
            case "ArrowUp":
            case "ArrowLeft":
                e.preventDefault();
                focusTab(activeIndex - 1);
                break;
            case "Home":
                e.preventDefault();
                focusTab(0);
                break;
            case "End":
                e.preventDefault();
                focusTab(skills.length - 1);
                break;
        }
    };

    return (
        <section id="skills" className="pt-16 pb-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    code="SKL"
                    title="Technical Skills"
                    subtitle={`${totalSkills} technologies across ${skills.length} areas — pick one to see where it shows up in my work.`}
                />

                <div className="grid lg:grid-cols-[260px_1fr] gap-4">
                    {/* Category rail — vertical on desktop, scrollable row on mobile */}
                    <div
                        role="tablist"
                        aria-label="Skill categories"
                        aria-orientation="vertical"
                        onKeyDown={onKeyDown}
                        className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1"
                    >
                        {skills.map((g, i) => {
                            const isActive = g.id === activeId;
                            return (
                                <button
                                    key={g.id}
                                    ref={(el) => {
                                        tabRefs.current[i] = el;
                                    }}
                                    role="tab"
                                    id={`skill-tab-${g.id}`}
                                    aria-selected={isActive}
                                    aria-controls={`skill-panel-${g.id}`}
                                    tabIndex={isActive ? 0 : -1}
                                    onClick={() => setActiveId(g.id)}
                                    className={`group relative shrink-0 flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${isActive
                                            ? "border-accent/40 bg-accent-muted"
                                            : "border-[var(--border)] bg-surface hover:border-[var(--border-hover)] hover:bg-surface-hover"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="skill-rail-marker"
                                            className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-accent"
                                            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                                        />
                                    )}
                                    <g.icon
                                        size={17}
                                        className={
                                            isActive
                                                ? "text-accent shrink-0"
                                                : "text-text-tertiary group-hover:text-text-secondary shrink-0 transition-colors"
                                        }
                                    />
                                    <span className="min-w-0">
                                        <span
                                            className={`block text-sm font-medium whitespace-nowrap ${isActive ? "text-text-primary" : "text-text-secondary"
                                                }`}
                                        >
                                            {g.category}
                                        </span>
                                        <span className="hidden lg:block font-mono text-[10px] tracking-[0.18em] text-text-tertiary uppercase mt-0.5">
                                            {g.code} · {g.skills.length}
                                        </span>
                                    </span>
                                    <ChevronRight
                                        size={14}
                                        className={`hidden lg:block ml-auto shrink-0 transition-all duration-200 ${isActive
                                                ? "text-accent translate-x-0 opacity-100"
                                                : "text-text-tertiary -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Detail panel */}
                    <div className="rounded-2xl border border-[var(--border)] bg-surface overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={group.id}
                                id={`skill-panel-${group.id}`}
                                role="tabpanel"
                                aria-labelledby={`skill-tab-${group.id}`}
                                tabIndex={0}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.22, ease: [0.25, 0.4, 0.25, 1] }}
                                className="h-full"
                            >
                                {/* Panel header */}
                                <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-4 border-b border-[var(--border)] bg-surface-hover/50">
                                    <span className="flex items-center gap-3 min-w-0">
                                        <span className="p-2 rounded-lg bg-accent-muted text-accent shrink-0">
                                            <group.icon size={16} />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block font-mono text-[10px] tracking-[0.25em] text-accent uppercase">
                                                {group.code}
                                            </span>
                                            <span className="block font-display text-base font-semibold text-text-primary truncate">
                                                {group.category}
                                            </span>
                                        </span>
                                    </span>
                                    <span className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider shrink-0">
                                        {group.skills.length} tools
                                    </span>
                                </div>

                                {/* Skill chips */}
                                <motion.ul
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 p-5 md:p-7"
                                >
                                    {group.skills.map((skill) => (
                                        <motion.li
                                            key={skill}
                                            variants={staggerItem}
                                            className="group flex items-center gap-2.5 px-3.5 py-3 rounded-xl border border-[var(--border)] bg-background/40 hover:border-accent/40 hover:bg-accent-muted transition-all duration-200"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary group-hover:bg-accent transition-colors duration-200 shrink-0" />
                                            <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                                                {skill}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Context note */}
                                <div className="px-5 md:px-7 pb-6 md:pb-7">
                                    <div className="flex gap-3 rounded-xl border border-dashed border-[var(--border-hover)] bg-background/40 px-4 py-3.5">
                                        <Terminal size={15} className="text-accent shrink-0 mt-0.5" />
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {group.note}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
