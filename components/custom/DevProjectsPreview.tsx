import Link from "next/link";
import { ArrowCircleRightIcon  } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const PREVIEW_COUNT = 3;

export default function DevProjectsPreview() {
    const preview = projects.slice(0, PREVIEW_COUNT);

    return (
        <section className="py-16 px-6 max-w-4xl mx-auto" aria-label="Projetos de desenvolvimento">
            <SectionHeader
                title="Projetos Dev"
                subtitle="Alguns dos meus projetos de software."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {preview.map((project) => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    stack={project.stack}
                    repoUrl={project.repoUrl}
                    demoUrl={project.demoUrl}
                />
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link
                href="/dev"
                className="btn btn-soft gap-2 bg-base-100 hover:border-secondary hover:text-neutral"
                aria-label="Ver todos os projetos de desenvolvimento"
                >
                Ver todos os projetos
                <ArrowCircleRightIcon size={18} weight="duotone" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
