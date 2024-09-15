import Link from "next/link";
import style from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export function Button({ text, href, hasArrow }: ButtonProps) {
    return (
        <Link
            href={href}
            className={`${style.button} ${
                hasArrow ? style["button--arrow"] : ""
            }`}
        >
            {text}
        </Link>
    );
}
