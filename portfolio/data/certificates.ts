import { Certification, ImpactStat } from "@/types/portfolio";

export const certifications: Certification[] = [
    {
        title: "AI Foundations",
        issuer: "OpenAI Academy",
        url: "https://figademy.openai.com/public/certificate/m68bi41zju",
    },
    {
        title: "AI for Beginners",
        issuer: "HP LIFE Global",
        url: "https://www.life-global.org/certificate/57bbbea3-810e-4282-8e26-c087a9f001ec",
    },
    {
        title: "Data Analytics Certification",
        issuer: "GeeksforGeeks",
        url: "https://drive.google.com/file/d/1n5ETS5PneKYKIDZQoVkcRWT8CFxW6heE/view?usp=sharing",
    },
    {
        title: "Java Programming",
        issuer: "Udemy",
        url: "https://www.udemy.com/certificate/UC-c03268cc-ac3f-4450-b8ea-0a74d27e5a93/",
    },
    {
        title: "Programming: Python",
        issuer: "Certification Program",
        url: "https://drive.google.com/file/d/1ZVJM4DqbkFK6ZDPz-RgrlnCsxCye7aQg/view?usp=sharing",
    },
    {
        title: "Java Bootcamp",
        issuer: "Certification Program",
        url: "https://drive.google.com/file/d/16P4egb5w3n8mQDankfMLUOZ3mcWi3Jvr/view?usp=sharing",
    },
];

/**
 * Achievements rendered as counted-up numbers instead of cards. Every value
 * has to be independently verifiable — no invented awards or metrics.
 */
export const impactStats: ImpactStat[] = [
    {
        value: 76,
        suffix: "+",
        label: "Banking tools integrated",
        caption:
            "Secured real-time execution of banking operations via MCP during the Voice Banking PoC for CorpGPT at Intellect Design Arena.",
        period: "2026",
    },
    {
        value: 4,
        label: "Voice AI architectures benchmarked",
        caption:
            "Evaluated Gemini 2.5 Flash Native Audio, ElevenLabs, Google Chirp HD and browser-based pipelines to select a production-ready speech solution.",
        period: "2026",
    },
    {
        value: 8.14,
        decimals: 2,
        label: "CGPA — MCA, VIT Vellore",
        caption:
            "Maintaining strong academic standing while working as a full-time SDE Intern.",
        period: "2024 — 2026",
    },
    {
        value: certifications.length,
        label: "Certifications earned",
        caption:
            "Credentials from OpenAI Academy, HP LIFE Global, GeeksforGeeks and Udemy — each one linked and verifiable below.",
        period: "Ongoing",
    },
];
