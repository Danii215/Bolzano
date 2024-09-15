import style from "./Content.module.scss";
import { ContentProps } from "./Content.types";

export function Content({ title, children }: ContentProps) {
    return (
        <section className={style.content}>
            <h3>{title}</h3>
            {children}
        </section>
    );
}
