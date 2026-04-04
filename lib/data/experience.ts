import { GraphIcon, CodeIcon , BookOpenUserIcon, NotepadIcon } from "@phosphor-icons/react/dist/ssr";

export interface Experience {
    role: string;
    company: string;
    period: string;
    summary: string[];
    technologies: string[];
    icon: any;
}

export const experiences: Experience[] = [
    {
        role: "Desenvolvedora Fullstack Júnior com IA Generativa",
        company: "Objeto Relacional Sistemas",
        period: "Março de 2026 – Atual",
        summary: [
            "Metodologia Spec Driven Development (SDD);",
            "Documentação técnica de regras de negócio, system design e modelagem;",
            "Pair programming e code reviews."
        ],
        technologies: ["Kotlin", "Next.js", "React", "TypeScript", "PostgreSQL", "Claude Code", "Mermaid"],
        icon: GraphIcon,
    },
    {
        role: "Estagiária de Arquitetura e Desenvolvimento de Software",
        company: "Gaudium",
        period: "Maio de 2024 – Maio de 2025",
        summary: [
            "Implantação de observabilidade e rastreamento em microsserviços;",
            "Criação de microsserviço de autenticação, otimizando a performance do banco principal;",
            "Padronização e escrita de testes unitários e de integração;",
            "Elaboração de diretrizes técnicas (playbook) de resiliência e boas práticas;",
            "Diagnóstico de dados e propostas de arquitetura para paralelização de processos;",
            "Refatoração de código legado;",
            "Pair programming e code review;"
        ],
        technologies: ["Go", "Redis", "Datadog", "MySQL", "PHP"],
        icon: CodeIcon,
    },
    {
        role: "Estagiária de Desenvolvimento de Software",
        company: "Synchro Solução Fiscal",
        period: "Outubro de 2022 – Abril de 2024",
        summary: [
            "Manutenção de módulos de processamento e relatórios de documentos fiscais;",
            "Aprimoramento de interfaces e desenvolvimento de novas features no frontend;",
            "Consultas a banco de dados para suporte e análise operacional;",
            "Documentação técnica de produtos e APIs;",
            "Code reviews."
        ],
        technologies: ["Java", "Spring Boot", "React", "Typescript", "JavaScript", "Ant Design", "Oracle"],
        icon: CodeIcon,
    },
    {
        role: "Bolsista de Pesquisa, Ensino e Extensão",
        company: "PET Ciência da Computação - UFPB",
        period: "Janeiro de 2021 – Setembro de 2024",
        summary: [
            "Desenvolvimento Web e UI/UX: Prototipação e criação do novo site oficial do grupo;",
            "Ensino: Aulas de programação e ciência de dados para universitários;",
            "Comunicação: Co-host no podcast de tecnologia do projeto;",
            "Mentoria: Suporte acadêmico em algoritmos para alunos ingressantes;",
            "Liderança: Coordenação de grupo de estudos voltado ao inglês técnico;",
            "Design: Criação da identidade visual e do mascote oficial (Petrúcio, o ornitorrinco);",
            "Pesquisa: Publicação de artigos científicos e palestras em eventos da área."
        ],
        technologies: ["Next.js", "Python", "Figma", "Pandas", "NumPy", "Matplotlib"],
        icon: BookOpenUserIcon,
    },
    {
        role: "Bolsista Secitex IFRN",
        company: "IFRN Campus Caicó",
        period: "Maio de 2017 – Novembro de 2017",
        summary: [
            "Desenvolvimento do site para submissões de anais do evento III Semana de Ciência, Tecnologia e Extensão (SeCiTEx) do IFRN;",
        ],
        technologies: ["PHP", "Bootstrap", "HTML", "CSS", "JavaScript"],
        icon: NotepadIcon,
    },
];
