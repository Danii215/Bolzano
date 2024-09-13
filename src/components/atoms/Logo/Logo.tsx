import Link from "next/link";
import style from "./Logo.module.scss";
import { LogoProps } from "./Logo.types";

export function Logo({ isBig }: LogoProps) {
    return (
        <Link
            href="/"
            className={`${style.logo} ${isBig ? style["logo--big"] : ""}`}
        >
            <h1>Bolzano</h1>
        </Link>
    );
}
