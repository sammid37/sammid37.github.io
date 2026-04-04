import { skills } from "@/lib/data/skills";
import { groupSkillsByCategory } from "@/lib/utils/index";
import SkillBadge from "@/components/ui/SkillBadge";
import SectionHeader from "@/components/ui/SectionHeader";

const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    tools: "Ferramentas",
};

export default function SkillsSection() {
    const grouped = groupSkillsByCategory(skills);

    return (
        <section
        className="py-16 px-6 bg-base-200"
        aria-label="Habilidades"
        >
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                title="Habilidades"
                subtitle="Tecnologias e ferramentas que utilizo."
                />
                    <div className="grid gap-8 sm:grid-cols-2">
                    {Object.entries(grouped).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="font-mono text-sm uppercase tracking-wider text-base-content/50 mb-3">
                                {categoryLabels[category] ?? category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                <SkillBadge
                                    key={skill.label}
                                    label={skill.label}
                                    category={skill.category}
                                />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
