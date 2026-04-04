import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function DevProjectsGrid() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
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
    );
}
