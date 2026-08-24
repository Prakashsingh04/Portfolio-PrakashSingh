"use client";

import { useState, useEffect, useCallback, ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionNav from "./SectionNav";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NavigationContext } from "@/lib/navigation-context";
import { sections, isSectionId, SectionId } from "@/lib/sections";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import BeyondCode from "@/components/sections/BeyondCode";
import Contact from "@/components/sections/Contact";

const componentMap: Record<SectionId, ComponentType> = {
    home: Hero,
    experience: Experience,
    projects: Projects,
    skills: Skills,
    education: Education,
    certificates: Certificates,
    beyond: BeyondCode,
    contact: Contact,
};

export default function AppShell() {
    const [active, setActive] = useState<SectionId>("home");

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (isSectionId(hash)) {
            setActive(hash);
        }
    }, []);

    const navigate = useCallback((id: SectionId) => {
        setActive(id);
        window.history.replaceState(null, "", `#${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const ActiveSection = componentMap[active];
    const activeMeta = sections.find((s) => s.id === active);

    return (
        <NavigationContext.Provider value={navigate}>
            <SectionNav active={active} onNavigate={navigate} />

            {/* Theme control — deliberately kept apart from the nav */}
            <div className="fixed top-5 right-5 md:top-6 md:right-6 z-50">
                <ThemeToggle />
            </div>

            <main className="md:pl-28 pb-28 md:pb-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                        <ActiveSection />
                    </motion.div>
                </AnimatePresence>
            </main>
            <span className="sr-only" role="status">
                {activeMeta?.label}
            </span>
        </NavigationContext.Provider>
    );
}
