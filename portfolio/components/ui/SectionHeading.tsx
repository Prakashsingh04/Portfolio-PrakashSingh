"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    code?: string;
}

export default function SectionHeading({ title, subtitle, code }: SectionHeadingProps) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12"
        >
            {code && (
                <span className="block font-mono text-xs tracking-[0.3em] text-accent mb-3">
                    {code}
                </span>
            )}
            <h2 className="font-display text-section font-bold text-text-primary">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-text-secondary text-base max-w-lg">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 h-px w-16 bg-accent opacity-60" />
        </motion.div>
    );
}
