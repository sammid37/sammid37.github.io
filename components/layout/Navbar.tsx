"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X, DownloadSimple } from "@phosphor-icons/react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Dev", href: "/dev" },
    { label: "Art", href: "/art" },
    { label: "Contato", href: "/#contato" },
    ];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
        {/* Brand */}
        <div className="navbar-start">
            <Link href="/" className="btn btn-ghost text-lg font-bold font-mono">
            sammid37
            </Link>
        </div>

        {/* Desktop links + CV button */}
        <div className="navbar-end hidden md:flex items-center gap-1">
            <nav aria-label="Navegação principal">
            <ul className="menu menu-horizontal gap-1 px-1">
                {navLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className="font-medium">
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
            </nav>
            <a
            href="/cv.pdf"
            download
            className="btn btn-primary btn-sm gap-2"
            aria-label="Download CV"
            >
            <DownloadSimple size={16} weight="duotone" aria-hidden="true" />
            Download CV
            </a>
        </div>

        {/* Mobile: hamburger */}
        <div className="navbar-end md:hidden">
            <button
            className="btn btn-ghost btn-square"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            >
            {isMenuOpen ? (
                <X size={24} weight="duotone" aria-hidden="true" />
            ) : (
                <List size={24} weight="duotone" aria-hidden="true" />
            )}
            </button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
            <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-base-100 shadow-md md:hidden"
            >
            <nav aria-label="Navegação mobile">
                <ul className="menu menu-vertical w-full p-4 gap-1">
                {navLinks.map((link) => (
                    <li key={link.href}>
                    <Link
                        href={link.href}
                        className="font-medium"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                <li>
                    <a
                    href="/cv.pdf"
                    download
                    className="btn btn-primary btn-sm mt-2 gap-2"
                    aria-label="Download CV"
                    >
                    <DownloadSimple size={16} weight="duotone" aria-hidden="true" />
                    Download CV
                    </a>
                </li>
                </ul>
            </nav>
            </div>
        )}
        </header>
    );
}
