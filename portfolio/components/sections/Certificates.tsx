"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useCountUp } from "@/lib/use-count-up";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, impactStats } from "@/data/certificates";
import { Certification, ImpactStat } from "@/types/portfolio";
import { BadgeCheck, ExternalLink } from "lucide-react";

/** Keeps issuers in the order they first appear in the data. */
const groupedByIssuer = certifications.reduce<[string, Certification[]][]>(
    (groups, cert) => {
        const existing = groups.find(([issuer]) => issuer === cert.issuer);
        if (existing) {
            existing[1].push(cert);
        } else {
            groups.push([cert.issuer, [cert]]);
        }
        return groups;
    },
    []
);

function StatTile({ stat }: { stat: ImpactStat }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const value = useCountUp(stat.value, {
        start: inView,
        decimals: stat.decimals ?? 0,
    });

    return (
        <motion.div
            ref={ref}
            variants={staggerItem}
            className="group p-5 md:p-6 rounded-2xl border border-[var(--border)] bg-surface hover:border-[var(--border-hover)] transition-colors duration-200"
        >
            <div className="flex items-baseline justify-between gap-2">
                <p className="font-display text-4xl md:text-5xl font-semibold text-text-primary leading-none tabular-nums">
                    {value}
                    {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
                </p>
                <span className="font-mono text-[10px] tracking-[0.16em] text-text-tertiary uppercase shrink-0">
                    {stat.period}
                </span>
            </div>
            <p className="text-sm font-medium text-text-primary mt-4">{stat.label}</p>
            <p className="text-xs text-text-tertiary leading-relaxed mt-2">
                {stat.caption}
            </p>
        </motion.div>
    );
}

export default function Certificates() {
    return (
        <section id="certificates" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    code="CRT"
                    title="Certificates & Achievements"
                    subtitle="The numbers behind the work, and every credential linked for verification."
                />

                {/* Impact band */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14"
                >
                    {impactStats.map((stat) => (
                        <StatTile key={stat.label} stat={stat} />
                    ))}
                </motion.div>

                {/* Credential ledger */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="rounded-2xl border border-[var(--border)] bg-surface overflow-hidden"
                >
                    <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-4 border-b border-[var(--border)] bg-surface-hover/50">
                        <span className="font-mono text-[11px] tracking-[0.22em] text-text-tertiary uppercase">
                            Credentials
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent uppercase tracking-wider">
                            <BadgeCheck size={13} />
                            {certifications.length} verifiable
                        </span>
                    </div>

                    <div className="divide-y divide-[var(--border)]">
                        {groupedByIssuer.map(([issuer, items]) => (
                            <motion.div
                                key={issuer}
                                variants={staggerItem}
                                className="grid md:grid-cols-[220px_1fr]"
                            >
                                {/* Issuer */}
                                <div className="px-5 md:px-6 pt-4 md:py-5 md:border-r border-[var(--border)] bg-background/30">
                                    <p className="text-sm font-medium text-text-primary">
                                        {issuer}
                                    </p>
                                    <p className="font-mono text-[10px] tracking-[0.18em] text-text-tertiary uppercase mt-1">
                                        {items.length} credential{items.length > 1 ? "s" : ""}
                                    </p>
                                </div>

                                {/* Credentials from that issuer */}
                                <ul className="divide-y divide-[var(--border)]">
                                    {items.map((cert) => (
                                        <li key={cert.title}>
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between gap-4 px-5 md:px-6 py-4 hover:bg-surface-hover transition-colors duration-200"
                                            >
                                                <span className="flex items-center gap-3 min-w-0">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary group-hover:bg-accent transition-colors duration-200 shrink-0" />
                                                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200 truncate">
                                                        {cert.title}
                                                    </span>
                                                </span>
                                                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-tertiary group-hover:text-accent transition-colors duration-200 shrink-0">
                                                    Verify
                                                    <ExternalLink size={12} />
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
