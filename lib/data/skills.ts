export interface Skill {
    label: string;
    category: "frontend" | "backend" | "art & design" | "tools" | "other tech and languages";
}

export const skills: Skill[] = [
    // Frontend
    { label: "React", category: "frontend" },
    { label: "Next.js", category: "frontend" },
    { label: "TypeScript", category: "frontend" },
    { label: "TailwindCSS", category: "frontend" },
    { label: "HTML/CSS", category: "frontend" },

    // Backend
    { label: "Spring Boot", category: "backend" },
    { label: "Kotlin", category: "backend" },
    { label: "Node.js", category: "backend" },
    { label: "Express", category: "backend" },
    { label: "PostgreSQL", category: "backend" },
    { label: "MySQL", category: "backend" },
    { label: "Redis", category: "backend" },
    { label: "REST APIs", category: "backend" },

    // Art & Design
    { label: "Figma", category: "art & design" },
    { label: "Krita", category: "art & design" },
    { label: "Ilustração Digital", category: "art & design" },
    { label: "Character Design", category: "art & design" },

    // Tools
    { label: "Git", category: "tools" },
    { label: "Docker", category: "tools" },
    { label: "Datadog", category: "tools" },


    // Tools
    { label: "Python", category: "other tech and languages" },
    { label: "Matplotlib", category: "other tech and languages" },
    { label: "Pandas", category: "other tech and languages" },
    { label: "Numpy", category: "other tech and languages" },
    { label: "Jupyter", category: "other tech and languages" },
    { label: "Flask", category: "other tech and languages" },
    { label: "Go", category: "other tech and languages" },
    { label: "PHP", category: "other tech and languages" },
    { label: "MongoDB", category: "other tech and languages" },
];
