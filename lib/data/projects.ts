export interface Project {
    id: string;
    name: string;
    description: string;
    stack: string[];
    repoUrl?: string;
    demoUrl?: string;
}

export const projects: Project[] = [
    {
        id: "portfolio",
        name: "Portfolio Pessoal",
        description:
        "Site de portfólio pessoal com dupla identidade: desenvolvedora e ilustradora.",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "DaisyUI"],
        repoUrl: "https://github.com/sammid37/sammid37.github.io",
        demoUrl: "https://sammid37.github.io",
    },
    {
        id: "bird-focus",
        name: "Bird Focus",
        description: "Já pensou de um pássaro fofo te acompanhar na realização de suas tarefas seguindo a metodologia pomodoro? Bird Focus!",
        stack: ["ElectronJS", "TailwindCSS"],
        repoUrl: "https://github.com/sammid37/bird-focus",
    },
    {
        id: "health-diary",
        name: "Health Diary",
        description: "Aplicação para registro e acompanhamento de dados de saúde diários, como sono, exercícios físicos e refeições.",
        stack: ["Spring Boot", "React", "TailwindCSS", "MySQL"],
        repoUrl: "https://github.com/sammid37/health-diary",
    },
    {
        id: "spotipy-playlist",
        name: "Spotipy Playlist",
        description: "Aplicação para criação e gerenciamento de playlists no Spotify, utilizando a API do Spotify.",
        stack: ["Python", "Spotipy", "Flask"],
        repoUrl: "https://github.com/sammid37/spotipy-playlist",
        // demoUrl: "https://spotipy-playlist.vercel.app",
    },
];
