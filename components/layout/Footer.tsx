import Link from "next/link";
import {
    InstagramLogoIcon,
    LinkedinLogoIcon,
    GithubLogoIcon,
    TwitterLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Dev", href: "/dev" },
    { label: "Art", href: "/art" },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com/sammid37",
        Icon: InstagramLogoIcon,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/sammid37",
        Icon: LinkedinLogoIcon,
    },
    {
        label: "GitHub",
        href: "https://github.com/sammid37",
        Icon: GithubLogoIcon,
    },
    {
        label: "Twitter/X",
        href: "https://twitter.com/sammid37",
        Icon: TwitterLogoIcon,
    },
];

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content py-10 px-40 sm:grid-cols-[2fr_1fr_1fr]">
        {/* Col 1: Identity */}
        <aside>
            <p className="text-lg font-bold font-mono">sammid37</p>
            <p className="text-sm text-base-content/70">
            Samantha Medeiros — Dev &amp; Ilustradora
            </p>
            <p className="text-xs text-base-content/50 mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
        </aside>

        {/* Col 2: Quick links */}
        <nav aria-label="Links rápidos">
            <h6 className="footer-title">Mapa do site</h6>
            <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
                <li key={link.href}>
                <Link href={link.href} className="link link-hover text-sm">
                    {link.label}
                </Link>
                </li>
            ))}
            </ul>
        </nav>

        {/* Col 3: Social */}
        <nav aria-label="Redes sociais">
            <h6 className="footer-title">Redes</h6>
            <ul className="flex flex-col gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
                <li key={href}>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-hover flex items-center gap-2 text-sm"
                    aria-label={label}
                >
                    <Icon size={18} weight="duotone" aria-hidden="true" />
                    {label}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        </footer>
    );
}
