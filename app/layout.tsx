import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import BaseLayout from "@/components/layout/BaseLayout";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Samantha Medeiros — Dev & Ilustradora",
    description:
        "Portfolio pessoal de Samantha Medeiros: desenvolvedora de software e ilustradora.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
        lang="pt-BR"
        className={`${inter.variable} ${spaceMono.variable}`}
        >
            <body className="font-sans antialiased">
                <BaseLayout>{children}</BaseLayout>
            </body>
        </html>
    );
}
