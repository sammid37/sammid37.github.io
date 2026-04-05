interface SkillBadgeProps {
    label: string;
    category?: "frontend" | "backend" | "art & design" | "tools" | "other tech and languages";
}

export default function SkillBadge({ label }: SkillBadgeProps) {
    return (
        <span className="badge badge-outline font-mono text-xs">{label}</span>
    );
}
