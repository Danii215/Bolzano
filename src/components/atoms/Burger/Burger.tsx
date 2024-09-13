"use client";
import { useState } from "react";
import style from "./Burger.module.scss";
import { BurgerProps } from "./Burger.types";

export function Burger({ onClick }: BurgerProps) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <button
            type="button"
            className={style.burger}
            data-open={active ? "" : null}
            onClick={(event) => {
                setActive(!active);
                if (onClick) onClick(event);
                onClick;
            }}
        >
            <div className={style.burger__line}></div>
        </button>
    );
}
