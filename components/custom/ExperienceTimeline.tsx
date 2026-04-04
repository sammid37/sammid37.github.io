import { experiences } from "@/lib/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ExperienceTimeline() {
    return (
        <section className="py-16 px-6 max-w-4xl mx-auto" aria-label="Experiência profissional">
            <SectionHeader
                title="Experiência"
                subtitle="Minha trajetória profissional."
            />
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {experiences.map((exp, index) => {
                    const isEnd = index % 2 === 0;
                    const card = (
                        <div className={`${isEnd ? "timeline-end" : "timeline-start"} timeline-box mb-8 w-full`}>
                            <h3 className="font-bold text-base">{exp.role}</h3>
                            <p className="text-sm text-primary font-mono">{exp.company}</p>
                            <p className="text-xs text-base-content/50 font-mono mt-0.5">{exp.period}</p>

                            <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-base-content/80">
                                {exp.summary.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            {exp.technologies.length > 0 && (
                                <>
                                    <div className="divider my-3" />
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className="badge badge-outline badge-sm font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    );

                    const Icon = exp.icon;

                    return (
                        <li key={index}>
                            {index > 0 && <hr className="bg-primary" />}
                            {!isEnd && card}
                            <div className="timeline-middle">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center" aria-hidden="true">
                                    <Icon size={16} weight="bold" />
                                </div>
                            </div>
                            {isEnd && card}
                            {index < experiences.length - 1 && <hr className="bg-primary" />}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
