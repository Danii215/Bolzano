import type { Metadata } from "next";
import "@/assets/sass/main.scss";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Bolzano",
        openGraph: {
            locale: "pt_BR",
            siteName: "Bolzano",
        },
        authors: [
            {
                name: "Danilo Movio",
            },
        ],
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": 1,
            "max-video-preview": 1,
        },
        icons: {
            other: [
                { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
                { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
                {
                    rel: "apple-touch-icon",
                    sizes: "100x100",
                    url: "/apple-touch-icon.png",
                },
                { rel: "manifest", url: "/site.webmanifest" },
                { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
            ],
        },
        manifest: "/site.webmanifest",
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
