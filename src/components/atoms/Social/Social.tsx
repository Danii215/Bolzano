import Link from "next/link";
import { SocialProps } from "./Social.types";
import style from "./Social.module.scss";

export function Social({ href, icon }: SocialProps) {
    return <Link href={href} className={style.social} data-icon={icon} />;
}
