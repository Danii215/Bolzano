import Link from "next/link";
import style from "./Card.module.scss";
import Image from "next/image";
import { CardProps } from "./Card.types";

export function Card({ title, cta, href, image }: CardProps) {
    return (
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
    );
}
