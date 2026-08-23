import { LucideIcon } from "lucide-react";

export type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    problem: string;
    stack: string[];
    highlights: string[];
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
    isExperienceProject?: boolean;
};

export type Experience = {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    tags: string[];
};

export type SkillGroup = {
    id: string;
    code: string;
    category: string;
    icon: LucideIcon;
    /** One line on how this group actually shows up in my work. */
    note: string;
    skills: string[];
};

export type Education = {
    id: string;
    institution: string;
    degree: string;
    /** Stage of the academic path — drives the timeline kicker. */
    level: string;
    stream?: string;
    period: string;
    location: string;
    score: string;
    scoreLabel: "CGPA" | "Percentage";
    scoreMax: number;
};

export type Certification = {
    title: string;
    issuer: string;
    url: string;
};

export type ImpactStat = {
    value: number;
    decimals?: number;
    suffix?: string;
    label: string;
    caption: string;
    period: string;
};

export type SocialLink = {
    name: string;
    url: string;
    icon: string;
};

export type Profile = {
    name: string;
    greeting: string;
    tagline: string;
    eyebrow: string;
    headline: string;
    description: string;
    bio: string;
    location: string;
    email: string;
    resumeUrl: string;
    socials: SocialLink[];
};
