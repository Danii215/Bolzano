import type { Metadata } from "next";
import "@/assets/sass/main.scss";

export const metadata: Metadata = {
    title: "Bolzano",
    description: "Projeto de Cálculo Numérico Computacional.",
};

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
