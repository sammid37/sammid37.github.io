interface SocialLinkProps {
    href: string;
    label: string;
    icon: React.ElementType;
    target?: "_blank" | "_self";
}

export default function SocialLink({
    href,
    label,
    icon: Icon,
    target = "_blank",
}: SocialLinkProps) {
    const rel = target === "_blank" ? "noopener noreferrer" : undefined;

    return (
        <a
        href={href}
        target={target}
        rel={rel}
        className="flex items-center gap-2 link link-hover"
        aria-label={label}
        >
        <Icon size={20} weight="duotone" aria-hidden="true" />
        <span>{label}</span>
        </a>
    );
}
