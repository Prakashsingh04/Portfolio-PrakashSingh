"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        setMounted(true);
        setIsDark(document.documentElement.getAttribute("data-theme") !== "light");
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    };

    if (!mounted) {
        return (
            <div
                className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--nav-bg)]"
                aria-hidden="true"
            />
        );
    }

    return (
        <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="group relative w-11 h-11 flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-lg shadow-black/10 text-text-secondary hover:text-accent hover:border-[var(--border-hover)] transition-colors duration-200"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={{ opacity: 0, rotate: -80, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 80, scale: 0.6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="flex items-center justify-center"
                >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
            </AnimatePresence>

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-[var(--border)] bg-surface px-3 py-1.5 text-xs opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                <span className="font-mono text-accent mr-1.5">
                    {isDark ? "LGT" : "DRK"}
                </span>
                <span className="text-text-secondary">
                    {isDark ? "Light mode" : "Dark mode"}
                </span>
            </span>
        </button>
    );
}
