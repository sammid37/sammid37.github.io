import type { Skill } from "@/lib/data/skills";

export function groupSkillsByCategory(
    skills: Skill[]
    ): Record<string, Skill[]> {
        return skills.reduce<Record<string, Skill[]>>((acc, skill) => {
            if (!acc[skill.category]) {
            acc[skill.category] = [];
            }
            acc[skill.category].push(skill);
            return acc;
        }, {});
    }
