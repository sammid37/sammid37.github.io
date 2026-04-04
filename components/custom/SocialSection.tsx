import {
    InstagramLogoIcon,
    LinkedinLogoIcon,
    TwitterLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import SocialLink from "@/components/ui/SocialLink";
import SectionHeader from "@/components/ui/SectionHeader";

const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com/sammid37",
        icon: InstagramLogoIcon,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/sammid37",
        icon: LinkedinLogoIcon,
    },
    {
        label: "Twitter/X",
        href: "https://twitter.com/sammid37",
        icon: TwitterLogoIcon,
    },
];

export default function SocialSection() {
    return (
        <section
        className="py-16 px-6 max-w-4xl mx-auto"
        aria-label="Conexões e redes sociais"
        >
            <SectionHeader
                title="Conexões"
                subtitle="Me encontre nas redes sociais"
            />
            <ul className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                {socialLinks.map(({ label, href, icon }) => (
                <li key={href}>
                    <SocialLink
                    href={href}
                    label={label}
                    icon={icon}
                    target="_blank"
                    />
                </li>
                ))}
            </ul>
        </section>
    );
}
