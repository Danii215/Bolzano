import Link from "next/link";
import style from "./Card.module.scss";
import Image from "next/image";
import { CardProps } from "./Card.types";
import { Suspense } from "react";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";

export function Card({ title, cta, href, image }: CardProps) {
    return (
        <Suspense fallback={<LoadingSkeleton width={330} height={330} />}>
            <article className={style.card}>
                <Image
                    src={image}
                    alt={title}
                    title={title}
                    sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={style.card__square}>
                    <h3>{title}</h3>
                    <Link href={href}>{cta}</Link>
                </div>
            </article>
        </Suspense>
    );
}
