export interface Education {
    institution: string;
    course: string;
    period: string;
    description?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    year: number;
    credentialUrl?: string[];
}

export const educations: Education[] = [
    {
        institution: "Instituto Federal da Paraíba (IFPB)",
        course: "Mestrado Profissional em Informática",
        period: "2025 – 2026",
        description:
        "Formação como aluna especial de mestrado.",
    },
    {
        institution: "Universidade Federal da Paraíba (UFPB)",
        course: "Bacharelado em Ciência da Computação",
        period: "2019 – 2025",
        description:
        "Em breve. PET Ciência da Computação UFPB.",
    },
    {
        institution: "Instituto Federal do Rio Grande do Norte (IFRN)",
        course: "Ensino Técnico Integrado em Informática",
        period: "2015 – 2018",
        description:
        "Em breve.",
    },
];

export const certifications: Certification[] = [
    {
        name: "Docker Criando e Gerenciando Containers",
        issuer: "Alura",
        year: 2025,
        credentialUrl: ["https://cursos.alura.com.br/certificate/e5cb9ef3-da76-45cc-ac46-32dc5c91116e?lang=pt_BR"],
    },
    {
        name: "Redis",
        issuer: "Alura",
        year: 2025,
        credentialUrl: ["https://cursos.alura.com.br/certificate/b5a25c42-ef76-4928-8ce0-8c1127893be4?lang=pt_BR", "https://cursos.alura.com.br/certificate/37aded70-f018-4995-98c1-96f321e4da8d?lang=pt_BR"]
    },
    {
        name: "Figma",
        issuer: "Alura",
        year: 2025,
        credentialUrl: ["https://cursos.alura.com.br/certificate/ba8cbfd5-fb70-4ea9-bed2-96ce01affd8a?lang=pt_BR", "https://cursos.alura.com.br/certificate/37aded70-f018-4995-98c1-96f321e4da8d?lang=pt_BR"]
    },
    {
        name: "MongoDB",
        issuer: "Alura",
        year: 2025,
        credentialUrl: ["https://cursos.alura.com.br/certificate/ca228af2-c520-4d28-926e-bdfc55ba7c7e?lang=pt_BR", "https://cursos.alura.com.br/certificate/ba8cbfd5-fb70-4ea9-bed2-96ce01affd8a?lang=pt_BR"]
    }
];
