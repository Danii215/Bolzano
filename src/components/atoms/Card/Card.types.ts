import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CardProps {
    title: string;
    cta: string;
    href: string;
    image: StaticImport;
}
