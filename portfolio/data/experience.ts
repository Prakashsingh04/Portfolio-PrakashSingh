import { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
    {
        id: "intellect-design-arena",
        company: "Intellect Design Arena Ltd.",
        role: "Software Development Engineer Intern",
        period: "Feb 2026 — Present",
        location: "Chennai, Tamil Nadu",
        description: [
            "Developed a Voice Banking Proof of Concept for CorpGPT, enabling enterprise banking through natural voice conversations using Gemini 2.5 Flash Native Audio, Python, and FastAPI.",
            "Built FastAPI endpoints for voice session lifecycle management, including session creation, deletion, and real-time communication with AI services.",
            "Integrated MCP with real-time speech streaming to securely execute banking operations across 76+ enterprise banking tools.",
            "Evaluated multiple speech architectures, including Gemini Native Audio, ElevenLabs, Google Chirp HD, and browser-based speech pipelines to identify the most suitable production-ready voice solution.",
        ],
        tags: ["Python", "FastAPI", "Gemini", "MCP", "Voice AI"],
    },
];
