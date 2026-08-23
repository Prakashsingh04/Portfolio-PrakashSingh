import { Project } from "@/types/portfolio";

export const projects: Project[] = [
    {
        id: "corpgpt-voice-banking",
        title: "CorpGPT — Voice Banking POC",
        category: "Enterprise AI",
        description:
            "Real-time voice interaction system for enterprise banking workflows, enabling natural language voice conversations to execute complex banking operations.",
        problem:
            "Enterprise banking workflows required manual navigation across 76+ tools — voice AI enables hands-free, natural language execution.",
        stack: ["Gemini 2.5 Flash", "Python", "FastAPI", "MCP", "Asyncio"],
        highlights: [
            "76+ enterprise banking tools integrated",
            "Real-time speech streaming via MCP",
            "Voice session lifecycle management",
            "Multiple speech architecture evaluation",
        ],
        isExperienceProject: true,
    },
    {
        id: "visual-product-matcher",
        title: "Visual Product Matcher",
        category: "AI / Semantic Search",
        description:
            "AI-powered visual search application using Jina CLIP v2, enabling semantic product retrieval through image embeddings and cosine similarity search.",
        problem:
            "Traditional text-based product search fails when users want to find visually similar products — embedding-based search bridges that gap.",
        stack: [
            "FastAPI",
            "Streamlit",
            "MongoDB Atlas",
            "Jina AI",
            "Cloudinary",
        ],
        highlights: [
            "768-dimensional embeddings",
            "53 products across 5 categories",
            "Cosine similarity with Top-K retrieval",
            "Deployed on Streamlit Cloud & Vercel",
        ],
        demoUrl:
            "https://visualise-appuct-matcher-jina-ai-6yvussbfby48ctg9bdchz7.streamlit.app/",
        githubUrl:
            "https://github.com/Prakashsingh04/Visualise-Product-Matcher-JINA-AI",
    },
    {
        id: "pdf-dost",
        title: "PDF-DOST",
        category: "Full-Stack AI App",
        description:
            "Interactive PDF web assistant that lets you upload any PDF, chat with it using natural language, and instantly preview the document with a modern split-view interface.",
        problem:
            "Reading through long PDFs to find specific information is tedious — a conversational interface makes document exploration instant.",
        stack: ["React", "Tailwind CSS", "Flask", "Python", "NLP/QA"],
        highlights: [
            "Natural language Q&A over PDFs",
            "Real-time PDF preview with adjustable zoom",
            "Drag-and-drop upload interface",
            "Embedding-based retrieval pipeline",
        ],
        githubUrl: "https://github.com/Prakashsingh04/PDF-DOST",
    },
    {
        id: "fake-review-detection",
        title: "Cross-Domain Fake Review Detection",
        category: "Data Science / ML",
        description:
            "Machine learning system for detecting fake reviews across domains using metadata features and classic ML classifiers, with domain adaptation via fine-tuning.",
        problem:
            "Fake reviews erode consumer trust — cross-domain detection ensures models generalize beyond a single platform.",
        stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        highlights: [
            "Tested on Amazon & Yelp datasets",
            "Cross-domain adaptation via fine-tuning",
            "Metadata-driven feature engineering",
            "Classic ML classifier comparison",
        ],
        githubUrl:
            "https://github.com/Prakashsingh04/Cross-Domain-Fake-Review-Detection",
    },
];
