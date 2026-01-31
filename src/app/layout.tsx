import type {Metadata} from "next";
import {Sora, Inter, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorTrail from "@/components/ui/CursorTrail";
import PageLoader from "@/components/ui/PageLoader";

const sora = Sora({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "Portfolio - Ismaël AÏHOU | Full Stack Engineer",
    description: "Professional portfolio - Full Stack Engineer specialized in Cloud & DevOps. Discover my projects and technical skills.",
    keywords: ["Full Stack", "DevOps", "Cloud", "React", "Next.js", "TypeScript", "AWS", "Kubernetes", "Docker"],
    authors: [{name: "Ismaël AÏHOU"}],
    openGraph: {
        title: "Portfolio - Ismaël AÏHOU | Full Stack Engineer",
        description: "Full Stack Engineer | Cloud & DevOps - Discover my projects and technical skills",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        </head>
        <body
            className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        >
        <PageLoader />
        <CursorTrail />
        <ScrollProgress />
        <ParticlesBackground />
        {children}
        </body>
        </html>
    );
}
