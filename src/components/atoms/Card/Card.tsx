import Link from "next/link";
import style from "./Card.module.scss";
import Image from "next/image";
import { CardProps } from "./Card.types";

export function Card({ title, cta, href, image }: CardProps) {
    return (
        <article className={style.card}>
            <Image src={image} alt={title} title={title} />
            <div className={style.card__square}>
                <h5>{title}</h5>
                <Link href={href}>{cta}</Link>
            </div>
        </article>
    );
}
