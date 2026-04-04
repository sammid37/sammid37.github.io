import { GithubLogoIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
    name: string;
    description: string;
    stack: string[];
    repoUrl?: string;
    demoUrl?: string;
}

export default function ProjectCard({
    name,
    description,
    stack,
    repoUrl,
    demoUrl,
}: ProjectCardProps) {
    return (
        <article className="card card-bordered bg-base-100 hover:shadow-sm transition-shadow border border-base-300">
        <div className="card-body gap-3">
            <h3 className="card-title text-base">{name}</h3>
            <p className="text-sm text-base-content/70">{description}</p>
            <div className="flex flex-wrap gap-1">
            {stack.map((tech) => (
                <SkillBadge key={tech} label={tech} />
            ))}
            </div>
            {(repoUrl || demoUrl) && (
            <div className="card-actions mt-2">
                {repoUrl && (
                <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-xs gap-1"
                    aria-label={`Repositório GitHub de ${name}`}
                >
                    <GithubLogoIcon size={14} weight="duotone" aria-hidden="true" />
                    Repo
                </a>
                )}
                {demoUrl && (
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-xs gap-1"
                    aria-label={`Demo ao vivo de ${name}`}
                >
                    <ArrowSquareOutIcon size={14} weight="duotone" aria-hidden="true" />
                    Demo
                </a>
                )}
            </div>
            )}
        </div>
        </article>
    );
}
