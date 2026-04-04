import SectionHeader from "@/components/ui/SectionHeader";
import DevProjectsGrid from "@/components/custom/DevProjectsGrid";
import GitHubBanner from "@/components/custom/GitHubBanner";

export const metadata = {
    title: "Dev — Samantha Medeiros",
    description: "Projetos de desenvolvimento de software de Samantha Medeiros.",
};

export default function DevPage() {
    return (
        <section className="py-16 px-6 max-w-5xl mx-auto" aria-label="Projetos de desenvolvimento">
            <SectionHeader
                title="Projetos de Desenvolvimento"
                subtitle="[Página em construção] Alguns dos Softwares que desenvolvi e venho mantendo."
                level={1}
            />
            <DevProjectsGrid />
            <GitHubBanner />
        </section>
    );
}
