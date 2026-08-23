import {
    Home,
    Briefcase,
    FolderGit2,
    Cpu,
    GraduationCap,
    Award,
    Compass,
    Mail,
    LucideIcon,
} from "lucide-react";

export type SectionId =
    | "home"
    | "experience"
    | "projects"
    | "skills"
    | "education"
    | "certificates"
    | "beyond"
    | "contact";

export type SectionMeta = {
    id: SectionId;
    code: string;
    label: string;
    icon: LucideIcon;
};

export const sections: SectionMeta[] = [
    { id: "home", code: "HOM", label: "Home", icon: Home },
    { id: "experience", code: "EXP", label: "Experience", icon: Briefcase },
    { id: "projects", code: "PRJ", label: "Projects", icon: FolderGit2 },
    { id: "skills", code: "SKL", label: "Skills", icon: Cpu },
    { id: "education", code: "EDU", label: "Education", icon: GraduationCap },
    { id: "certificates", code: "CRT", label: "Certificates & Achievements", icon: Award },
    { id: "beyond", code: "BYD", label: "Beyond Code", icon: Compass },
    { id: "contact", code: "CTC", label: "Contact", icon: Mail },
];

export function isSectionId(value: string): value is SectionId {
    return sections.some((s) => s.id === value);
}
