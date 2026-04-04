import {
    EnvelopeIcon,
    MapPinIcon,
    LinkedinLogoIcon,
    GithubLogoIcon,
    BehanceLogoIcon,
    ArrowRightIcon,
    TabsIcon 
} from "@phosphor-icons/react/dist/ssr";
import SectionHeader from "@/components/ui/SectionHeader";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/sammid37",
        icon: GithubLogoIcon,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/sammid37",
        icon: LinkedinLogoIcon,
    },
    {
        label: "Behance",
        href: "https://www.behance.net/sammid37",
        icon: BehanceLogoIcon,
    },
    {
        label: "Lattes",
        href: "http://lattes.cnpq.br/3450197729571170",
        icon: TabsIcon 
    }
];

export default function ContactSection() {
    return (
        <section
            id="contato"
            className="py-16 px-6 max-w-4xl mx-auto"
            aria-label="Contato"
        >
            <SectionHeader
                title="Contato"
                subtitle="Vamos conversar? Fique a vontade para trocar ideias sobre projetos e colaborações."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* Coluna esquerda: informações */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                            <EnvelopeIcon size={20} weight="duotone" aria-hidden="true" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-xs font-bold tracking-widest uppercase text-base-content/50">Email</span>
                            <a
                                href="mailto:samantha@exemplo.com"
                                className="link link-hover text-sm"
                                aria-label="Enviar e-mail para Samantha"
                            >
                                samanthadmedeiros37@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                            <MapPinIcon size={20} weight="duotone" aria-hidden="true" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-xs font-bold tracking-widest uppercase text-base-content/50">Localização</span>
                            <span className="text-sm text-base-content/70">João Pessoa, Paraíba</span>
                            <span className="text-sm text-base-content/50">Brasil</span>
                        </div>
                    </div>
                </div>

                {/* Coluna direita: redes sociais */}
                <div className="flex flex-col gap-3">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-base-content/10 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                            aria-label={`Perfil no ${label}`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={18} weight="duotone" aria-hidden="true" />
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                            <ArrowRightIcon
                                size={14}
                                className="text-base-content/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                                aria-hidden="true"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
