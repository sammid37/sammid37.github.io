interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    level?: 1 | 2 | 3;
}

export default function SectionHeader({
    title,
    subtitle,
    level = 2,
}: SectionHeaderProps) {
    const Tag = `h${level}` as "h1" | "h2" | "h3";

    return (
        <div className="mb-8">
        <Tag className="text-2xl font-bold tracking-tight md:text-3xl">{title}</Tag>
        {subtitle && (
            <p className="mt-2 text-base-content/70">{subtitle}</p>
        )}
        </div>
    );
}
