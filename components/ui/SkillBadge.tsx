interface SkillBadgeProps {
    label: string;
    category?: "frontend" | "backend" | "design" | "tools";
}

export default function SkillBadge({ label }: SkillBadgeProps) {
    return (
        <span className="badge badge-outline font-mono text-xs">{label}</span>
    );
}
