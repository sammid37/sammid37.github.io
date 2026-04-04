import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { educations, certifications } from "@/lib/data/education";
import SectionHeader from "@/components/ui/SectionHeader";

export default function EducationSection() {
    return (
        <section
        className="py-16 px-6 bg-base-200"
        aria-label="Formação e certificações"
        >
            <div className="max-w-4xl mx-auto">
                <SectionHeader title="Formação &amp; Certificações" />
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Education */}
                    <div>
                        <h3 className="font-mono text-sm uppercase tracking-wider text-base-content/50 mb-4">
                        Formação Acadêmica
                        </h3>
                        <div className="flex flex-col gap-4">
                        {educations.map((edu, i) => (
                            <div key={i} className="card card-bordered border border-base-300 bg-base-100">
                            <div className="card-body p-4">
                                <h4 className="font-bold text-sm">{edu.institution}</h4>
                                <p className="text-sm text-primary font-mono">{edu.course}</p>
                                <p className="text-xs text-base-content/50">{edu.period}</p>
                                {edu.description && (
                                <p className="text-xs text-base-content/70 mt-1">
                                    {edu.description}
                                </p>
                                )}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="font-mono text-sm uppercase tracking-wider text-base-content/50 mb-4">
                        Certificações
                        </h3>
                        <ul className="flex flex-col gap-3">
                        {certifications.map((cert, i) => (
                            <li
                            key={i}
                            className="flex items-start justify-between gap-2 p-3 rounded-lg bg-base-100 border border-base-300"
                            >
                            <div>
                                <p className="font-medium text-sm">{cert.name}</p>
                                <p className="text-xs text-base-content/50">
                                {cert.issuer} · {cert.year}
                                </p>
                            </div>
                            {cert.credentialUrl && (
                                <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost btn-xs shrink-0"
                                aria-label={`Credencial de ${cert.name}`}
                                >
                                <ArrowSquareOutIcon size={14} weight="duotone" aria-hidden="true" />
                                </a>
                            )}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
