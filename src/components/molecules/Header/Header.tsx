import style from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { HeaderClient } from "./Header.client";

export function Header({ items }: HeaderProps) {
    return (
        <header className={style.header}>
            <HeaderClient items={items} />
        </header>
    );
}
