"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { Palette, Gamepad2, Clapperboard, MonitorSmartphone } from "lucide-react";

const interests = [
    {
        label: "Animation & Graphic Design",
        description: "Exploring motion graphics and visual storytelling",
        icon: Palette,
    },
    {
        label: "Badminton/Chess",
        description: "Staying active on the court or the board",
        icon: Gamepad2,
    },
    {
        label: "Anime",
        description: "Watching anime and exploring new shows",
        icon: Clapperboard,
    },
    {
        label: "Exploring New Software",
        description: "Always trying the latest dev tools and AI products",
        icon: MonitorSmartphone,
    },
];

export default function BeyondCode() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    code="BYD"
                    title="Beyond Code"
                    subtitle="When I'm not engineering"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {interests.map((interest) => (
                        <motion.div
                            key={interest.label}
                            variants={staggerItem}
                            whileHover={{ y: -2, transition: { duration: 0.2 } }}
                            className="p-5 rounded-xl border border-[var(--border)] bg-surface hover:border-[var(--border-hover)] transition-all duration-200 group"
                        >
                            <interest.icon
                                size={20}
                                className="text-accent mb-3 group-hover:scale-110 transition-transform duration-200"
                            />
                            <h3 className="text-sm font-semibold text-text-primary mb-1">
                                {interest.label}
                            </h3>
                            <p className="text-xs text-text-tertiary leading-relaxed">
                                {interest.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
